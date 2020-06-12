
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
            var newItem;

            // create new ID
            ID = data.allItems[type][data.allItems[type].length -1].id + 1;

            // Create new item based on inc or exp type
            if (type === 'exp') {
                new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            //store the data
            data.allItems[type].push(newItem);

            //return the new element
            return newItem;

        }
    }


})();





// UI CONTROLLER Module
var UIController = (function() {

    // DOM strings data
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    // UI Controller Module returns
    return {
        getinput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
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


    // Add the item to either Income or Expense objects
    var ctrlAddItem = function(){
        // 1. Get field input data
        var input = UICtrl.getinput();
        // 2. Add the item to the budget controller
        // 3. Add the item to the UI
        // 4. Calculate the budget
        // 5. Display budget on UI
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
























