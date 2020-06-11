// Every Javascript object has a prototype property, which makes inheritance possible in JavaScript;

//The prototype property of an object is where we put methods and properties that we want other objects to inherit;

//The Constructor's prototype property is NOT the prototype of the Constructor itself, it's the prototype of ALL instances that are created through it;

//When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype. This continues until the method is found: prototype chain.

/******
 * Function constructor
 */
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function (){
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

/******
 * Object.create
 */
/*
var personProto = {
    calculateAge: function() {
        console.log(2020 - this.yearOfBirth);
    }
};

var tyler = Object.create(personProto);
tyler.name = 'Tyler';
tyler.yearOfBirth = 1990;
tyler.job = 'developer';


var jack = Object.create(personProto,
    {
        name: {value: 'Jack'},
        yearOfBirth: { value: 1969 },
        job: { value: 'designer'}
    });

*/

/*****
 * Primitvies vs objects
 */
// Primitives
/*
var a = 23;
var b = a;
a = 69;
console.log(a);
console.log(b);



// Objects
var obj1 = {
    name: 'Tyler',
    age: '30'
}

var obj2 = obj1;
obj1.age = 33;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Jack',
    city: 'Lisbon'
};

function change(a,b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age,obj);

console.log(age);
console.log(obj.city);

*/

/******
 * Functions
 */

 // A function is an istance of the Object type;
 // A function behaves like any other object;
 // We can store functions in a variable;
 // We can pass a function as an argument to another function;
 // We can return a function from a function.



 ////// Passing functions as arguments
/*
var years = [1990,1965,1969,1993,2007];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2020- el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el){
    if(el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 *el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAge = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAge);
console.log(rates);
*/

/******
 * Functions returning functions
 */
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello, ' + name + ' what do you do?');
        }
    }
}


var q3 = interviewQuestion('teacher');
var designQuestion = interviewQuestion('designer');


designQuestion('John');
q3('Beth');
q3('Mark');
q3('Jane');
q3('Ann');


interviewQuestion('teacher')('Mark');
*/


/******
 * Immediately Invoked Function Expressions (IFFE)
 */
/*
function game() {
    var score = Math.random() *10;
    console.log(score >= 5);
}
game();
*/
/*
(function () {
    var score = Math.random() *10;
    console.log(score >= 5);
})();

(function (goodluck) {
    var score = Math.random() *10;
    console.log(score >= 5 - goodluck);
})(5);
*/

/******
 * CLosures
 */

/*
 function retirement(retireAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retireAge - age) + a);
    }
 }

var retirementUS = retirement(66);
retirementUS(1990);
var retirementGermany = retirement(65);
var retirementSweden = retirement(68);

retirementGermany(1990);
retirementSweden(1990);
*/

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello, ' + name + ' what do you do?');
        }
    }
}
*/

/*
function interviewQuestion(job){
    return function(name){
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
                console.log('What subject do you teach, ' + name + '?');
        } else {
                console.log('Hello, ' + name + ' what do you do?');
            }
        }
    }


interviewQuestion('teacher')('John');
*/

/***********
 *  Bind, call and apply
 */
/*
var john = {
    name: 'John',
    age: 30,
    job: 'teacher',
    presentation: function(style,timeOfDay) {
        if (style === 'formal') {
            console.log('Good' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 33,
    job: 'designer'
};


john.presentation('formal','morning');
// Call method
john.presentation.call(emily, 'friendly', 'afternoon');

var johnFriendly = john.presentation.bind(john,'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('nightttty')
*/
/*
var years = [1990,1965,1969,1993,2001];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2020- el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
*/


/*******
 * Coding challenge 7
 */

 /*
 ---Let's build a fun quiz game in the console! ---
 
 1. Build a function constructor called Question to describe a question. A question should include:
     a) question itself
     b) the answers from which the player can choose the correct one (choose and adequate data structure here, arrary, object, etc.)
     c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number)  (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on task 4.

6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write anohter method for this)

7. Suppose this code would be a plugin for other programmer to use in their code. So make sure that all your code is private and doesn't interfer with the other programmers code (Hint: we leared a special technique to do exactly that).
*/

(function() {
    function Question(question,possibleAnswers, answer) {
        this.question = question;
        this.possibleAnswers = possibleAnswers;
        this.answer = answer;
    }
    // Display Question Prototype function
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.possibleAnswers.length; i++) {
            console.log(i + ') ' + this.possibleAnswers[i]);
        }
    }
    // Check Answer Prototype function
    Question.prototype.checkAnswer = function(guess, callback) {
        var sc;

        if (guess === this.answer) {
            console.log('Correct');
            sc = callback(true);
        } else {
            console.log('wrong')
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('You\'re current score is: ' + score);
        console.log('==================================');
    }

    // Input questions into constructor function    
    var q1 = new Question('What is this class about?',['Pearl','VB.Net','C++','JavaScript'],3);
    var q2 = new Question('Functions can do the following?',['Be stored in a variable','Pass a function as an argument to another function','Return a function from a function','All of the above'],3);
    var q3 = new Question('What\'s the name of the teacher for this class',['Tyler','Mark','John','Jonas'],3);

    // define array with questions
    var qArray = [q1,q2,q3];

    //score function for closure
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    // keep score var
    var keepScore = score();

    // Ask question function
    function askQuestion(){
         // generate a random number the length of the array
        var n = Math.floor(Math.random() * qArray.length);
        //ask the question and display the input box
        qArray[n].displayQuestion();
        var input = prompt('Please input the correct number:');

        //check if the user inputed anything other than exit
        if (input !== 'exit') {
            //call checkanswer prototype
            qArray[n].checkAnswer(parseInt(input), keepScore);
            askQuestion();
        }
    }

    askQuestion();

})();



// Expert Level
/*
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. in this case DONT call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

*/








