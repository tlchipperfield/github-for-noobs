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
/*
 var firstName = 'Tyler';
 var age = 12;

 age >= 18 ? console.log(firstName + ' drinks beer.')
 : console.log(firstName + ' drinks juice.');

 var drink = age >= 18 ? 'beer' : 'juice';
 console.log(drink);
*/
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
 *

function teamAverage(team) {
    var total = 0;
    for (i = 0; i < team.length; i++){
        total = total + team[i];
    }
    return total / i++;
}

function getWinner(totalJohn, totalMike, totalMary){
    switch(true){
        case totalJohn > totalMike && totalJohn > totalMary:
            console.log('The winner is: Team John');
            break;
        case totalMike > totalJohn && totalMike > totalMary:
            console.log('The winner is: Team Mike');
            break;
        case totalMary > totalJohn && totalMary > totalMike:
            console.log('The winner is: Team Mary');
            break;
        default:
            console.log('It was a draw!');
    }
 }

 function teamStats(totalJohn, totalMike, totalMary) {
    console.log('Team John: ' + totalJohn);
    console.log('Team Mike : ' + totalMike);
    console.log('Team Mary : ' + totalMary); 
 }


var teamJohn = [89, 120, 103], teamMike = [116, 97, 123], teamMary = [97, 134, 105];

var totalJohn = teamAverage(teamJohn);
var totalMike = teamAverage(teamMike);
var totalMary = teamAverage(teamMary);

getWinner(totalJohn, totalMike, totalMary);
teamStats(totalJohn, totalMike, totalMary);

****** End Coding Challenge
*/
/*********
 * Functions
 *


function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageTyler = calculateAge(1990);
var ageChristina = calculateAge(1989);
var ageSomer = calculateAge(1993);
console.log(ageTyler, ageChristina, ageSomer);



function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' has already retired');
    }
    
}

yearsUntilRetirement(1990, 'Tyler');
yearsUntilRetirement(1999, 'Lex');
yearsUntilRetirement(1929, 'Jane');

*/

/***
 * Function Statements and Expressions
 *

 // Function declaration
 // function whatDoYouDo(job, firstName){}

 // Function expression
 var whatDoYouDo = function(job, firstName) {
     switch(job){
         case 'teacher':
            return firstName + ' teaches kids how to code';
         case 'driver':
            return firstName + ' drives people around town.';
         case 'construction':
            return firstName + ' builds awesome buildings.';
         default:
             return firstName + ' has another job.';
     }
 }

 console.log(whatDoYouDo('teacher', 'Sarah'));
 console.log(whatDoYouDo('driver', 'Matt'));
 console.log(whatDoYouDo('construction', 'Tyler'));
 console.log(whatDoYouDo('crazy people', 'Christina'));
 
 */

/****
 * Arrays (0 BASED)
 *
//                0         1        2
 var names = ['Tyler','Christina','Mark'];
 var years = new Array(1990,1989,1942);

 console.log(names);
 console.log(names.length);

// Mutate Data array
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var tyler = ['Tyler', 'Chip', 1990, 'construction', false];

tyler.push('Orange');
tyler.unshift('Mr.');
console.log(tyler);

tyler.pop();
tyler.pop();
tyler.shift();
console.log(tyler);

console.log(tyler.indexOf(23));

var isTeacher = tyler.indexOf('teacher') === -1 ? 'Tyler is not a teacher' : 'Tyler is a teacher';
console.log(isTeacher);

*/



/**
 * Coding Challenge #3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less thatn $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2)Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simple multiply if with 20/100 = 0.2)

Good luck 
*/

function getTotal(){
    var tipPercent, beforeTip = [124, 48, 268], afterTip = [];
    console.log(beforeTip);
    //loop to go through and add tips
    for (i = 0; i < beforeTip.length; i++){
        //Percent Check
       if (beforeTip[i] < 50) {tipPercent = .2;}
       if (beforeTip[i] >= 50 && beforeTip[i] < 200) {tipPercent =.15;}
       if (beforeTip[i] >= 200) {tipPercent =.1;}
       // add before to after
       afterTip[i] = (beforeTip[i] * tipPercent) + beforeTip[i];
       console.log(afterTip[i]);
       console.log(afterTip);
    }
    
}

getTotal();


















































