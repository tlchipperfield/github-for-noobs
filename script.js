/*var firstName = 'Tyler';
console.log(firstName);

var lastName = 'Chip';
var age = 30;

var fullAge = true;
console.log(fullAge);

// ALWAYS USE MEANINGFUL NAMES!!!!

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// SIMPLE RULES
// NO NUMBERS OR SIMBLYOLS
// _ $ WORK!
// no keywords

var _test = 'test';
var $test = true;
console.log(_test + ' ' + $test);
*/


/* TYPES OF VARS
Number: Floating point numbers, for decimals and intergers
 String: Sequence of characters, used for text
 Boolean: Logical data type that can only be true or false
 Undefined: Data typ eof a variable that does not have a value yet
/* Null: Also means 'non-existent'

// JavasScript has dynamic typing: data types are automatically assigned to variables


// START 9 COMMENTS SINGLE LINE


/****************
 * Variable mutation and type coercion
 

 var firstName = 'Tyler';
 var age = 30;
// Type coercion
 console.log(firstName + ' is ' + age + ' years old!'); //This is actually one big string

 var job, isMarried;
 job = 'unknown';
 isMarried = false;

console.log(firstName + ' is a ' + age + ' years old' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twent eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old' + job + '. Is he married? ' + isMarried);


var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);

*/





/*************
 * Basic operators
var now, yearTyler, yearMark;
now = 2020; 
ageTyler = 30;
ageMark = 33;


//Math operators
yearTyler = now - ageTyler;
yearMark = now - ageMark;

console.log(yearTyler);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var markOlder = ageMark > ageTyler; //make a boolean
console.log(markOlder);


// typeof operator
console.log(typeof markOlder); 
console.log(typeof ageTyler);
console.log(typeof 'Mark is older than Tyler');
var x;
console.log(typeof x);
*/

/********
 * Operator precedence
 */
/*
var now = 2018;
var yearTyler = 1990;
var fullAge = 18;

var isFullAge = now - yearTyler >= fullAge; // true
console.log(isFullAge);

var ageTyler = now - yearTyler;
var ageMark = 35;
var average = (ageTyler + ageMark) / 2;

console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);
*/
// 2 + 4 + 5 Left to Right
// Assigment '=' Right to Left

// More operators
/*
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x += 3;
console.log(x);
*/

/** 
 * If / else statements
 

 var firstName = 'John';
 var civilStatus = 'single';

 if (civilStatus === 'married'){
     console.log(firstName + ' is married');
 } else {
     console.log(firstName + ' is not married');
 }

 var isMarried = true;
 if (isMarried){
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' is not married');
}
*/
/*
var firstName = 'Tyler';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age <= 17) {
    console.log(firstName + ' is a teenager.');
} else if (age >=18 && age <= 29) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man');
}
*/

/*****
 * The Ternary Operator and Switch Statements
 */

 var firstName = 'Tyler';
 var age = 12;

 age >= 18 ? console.log(firstName + ' drinks beer.')
 : console.log(firstName + ' drinks juice.');

 var drink = age >= 18 ? 'beer' : 'juice';
 console.log(drink);

/* if (age >= 18) {
     var drink = 'beer'
 } else {
     var drink = 'juice;'
 }*/
/*
 //switch statement
 var job = 'cop';
switch(job) {
    case 'construction':
        console.log(firstName + ' is a construction worker.');
        break;
    case 'driver' :
        console.log(firstName + ' is a driver.');
        break;
    case 'designer':
        console.log(firstName + ' is a designer');
        break;
    default:
        console.log(firstName + ' is lazy.');
}


var firstName = 'Tyler';
var age = 21;

switch(true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age <= 19:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age <= 29:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/

/********
 * Truthy and Falsy values and equality operators
 */

 // falsy values: undefined, null, 0, '', NaN
 // truthy values: NOT falsy values

 /*
 var height;
 height = 23;

 if (height || height === 0) {
     console.log('Variable is defined');
 } else {
     console.log('Variable has NOT been defined');
 }

// Equality operators
if (height == '23') {
    console.log('The == operator does type coercion!');
}
*/

/****
 * Coding Challenge 2
 */

 var teamJohn = [89, 120, 103], teamMike = [116, 94, 123], teamMary = [97, 134, 105];





























