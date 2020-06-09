/***
 * Lecture: Hoisting
 */

 //fuctions
 /*
calculateAge(1990);

function calculateAge(year){
    console.log(2020-year);
}

var retirement = function(year) {
    console.log(65-(2020-year));
}

retirement(1990);

// variables
console.log(age);
var age = 30;
console.log(age);

function foo(){
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/

/***********
 * Lecture: Scopiong
 *

//First scoping example

var a = 'Hello';
first();

function first(){
    var b = 'Hi!';
    second();

    function second(){
        var c = 'Hey!';
        third();
    }
}

function third(){
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}
*/


/*****
 * The THIS keyword
 */

 /*
 Regular function call: the this keyword points at the global object, (the window oboject, in the browser).

 Method Call: the this variable points to the object that is calling the method.

 The this keyword is not assigned a value until a function where it is defined is actually called.
*/

//console.log(this); //Window object
/*
calculateAge(1990);

function calculateAge(year){
    console.log(2020-year);
    console.log(this);
}
*/

var tyler = {
    name: 'Tyler',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2020 - this.yearOfBirth);
        /*
        function innerFunction(){
            console.log(this);
        }
        innerFunction();
        */
    }
}

tyler.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = tyler.calculateAge;
mike.calculateAge();




























