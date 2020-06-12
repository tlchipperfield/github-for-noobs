
// BUDGET CONTROLLER Module
var budgetController = (function() {
    // Expense function constructor
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    // Income function constructor
    var Income = function(id, description, value) {
        this.id =id;
        this.description = description;
        this.value = value;
    }


    // Main data Object
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };
    
    // Budget Controller Module Returns
    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            // create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length -1].id + 1;
            } else {
                ID = 0;
            }

            // Create new item based on inc or exp type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            //store the data
            data.allItems[type].push(newItem);

            //return the new element
            return newItem;
        },

        testing: function() {
            console.log(data);
        }
    };


})();





// UI CONTROLLER Module
var UIController = (function() {

    // DOM strings data
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
    };

    // UI Controller Module returns
    return {
        getinput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                // parseFloat to convert string to number with decimal
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },

        addListItem: function(obj, type) {
            var html, newHtml, element;

            // Create HTML string with PLaceholder text
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            // Replace the lpaceholder text with some real data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
            
        },

        clearFields: function() {
            var fields,fieldsArray;

            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

            // fields.slice() Will not work!
            // slice is stored in array prototype properties
            var fieldsArray = Array.prototype.slice.call(fields);

            // forEach loop used on the array. The function can recieve up to 3 callback objs. (current, index number, array)
            fieldsArray.forEach(function (current, index, array) {
                //EMPTY FIELDS FIRST
                current.value = "";

            });

            fieldsArray[0].focus();
        },


        // Allows public pass DOMstrings
        getDOMstrings: function() {
            return DOMstrings;
        }
    }

})();


//  GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    // Setup all event listeners
    var setupEventListeners = function(){
        // Return DOMstrings as DOM in this constroller
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });

    };

    var updateBudget = function() {
        // 1. Calculate the budget

        // 2. return the budget

        // 3. Display the budget on the UI

    }
    // Add the item to either Income or Expense objects
    var ctrlAddItem = function(){

        var input, newItem;

        // 1. Get field input data
        var input = UICtrl.getinput();
        // Only do something if there is data
        if (input.description !== "" && !isNaN(input.value) && input.value > 0 ) {
            // 2. Add the item to the budget controller
            var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);
            // 3 b. Clear the fields
            UICtrl.clearFields();
            // 4. Calculate and update Budget
            updateBudget();
        }
    }

    
    // PUBLIC INIT
    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    }

})(budgetController,UIController);


controller.init();


