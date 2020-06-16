// Lecture: let and const


//es5
/*
var name5 ='Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5)

//es6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6)
*/

// ES5 
/*
function driversLicence5(passedTest) {

    if (passedTest) {
        console.log(firstName)
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');

}

driversLicence5(true);

//ES6

function driversLicence6(passedTest) {
    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {

        // these variables are block scoped
        let firstName = 'John';
        console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
    }

}

driversLicence6(true);
*/





/*
// block-scoped variables
let i = 23;

for(let i = 0; i < 5; i++) {
    console.log(i);
}
*/


/*
console.log(i);
// NOT block-scoped variables
var i = 23;

for(let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);
*/

/*******
 * Blocks and IIFEs
 */

 //Block privacy (like an IIFE)
 {
     //code in here is a block
     //const a = 1;
     //let b = 2;
     //var c = 3;
 }
 //console.log(a+b)
 //console.log(c)

 //es 5
 /*
 (function() {
     var c =3;
 })();
*/
 //console.log(c)

 /******
  * Strings
  * 
  */
/*
  let firstName = 'John';
  let lastName = 'Smith';
  const yearOfBirth = 1990;

  function calcAge(year) {
      return 2020 - year;
  }

  // es5
  console.log('This is  ' + firstName + ' ' + lastName + '. He was born in: ' + calcAge(yearOfBirth) + ' years old.');

  //es6 (templete literals)
  console.log(`This is ${firstName} ${lastName}. He was born in: ${yearOfBirth} and is now: ${calcAge(yearOfBirth)}.`)

  const n = `${firstName} ${lastName}`
  console.log(n.startsWith('J'));
  console.log(n.endsWith('Sm'));
  console.log(n.includes(' '));
  console.log(`${firstName} `.repeat(5));
*/

//Arrow Functions
/*
const years = [1997, 1990, 1984, 1969];

//es 5
var ages5 = years.map(function(el) {
    return 2020 - el;
});
console.log(ages5);

// ES6    argument(el) arrow operator(=>)  return     
let ages6 = years.map(el => 2020 - el);





ages6 = years.map((el, index) => `Age element ${index+1}: ${2020-el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);
*/

// Arrowfuctions 2
// Lexical this variable

//es5
/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number: ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}

box5.clickMe();
*/
//es6
/*
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){

        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number: ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}

box6.clickMe();
*/

//function constructor
/*
function Person(name) {
    this.name = name;
}
//es5
Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(el)
    {
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);

}

var friends = ['Bob', 'Matt', 'Troy', 'Mark']
new Person('Jane').myFriends5(friends);

*/
/*
// es6
function Person(name) {
    this.name = name;
}
//es5
Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(el)
    {
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);

}

var friends = ['Bob', 'Matt', 'Troy', 'Mark']
new Person('Jane').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends) {
    
    var arr = friends.map(el =>
    `${this.name} is friends with ${el}`);
    console.log(arr);

}

new Person('Mike').myFriends6(friends);

*/

/*****
 * Destructuring
 */

// convient way to extract data from data structure such as obj or array

//ES5
/*
var john = [' John' , 26];
var name = john[0];
var age = john[1];
*/
/*
// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);


const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;

const {firstname: a, lastName: b} = obj;

console.log(firstName);
console.log(lastName);



function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 -age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/



/*****
 * Arrays in ES6
 */
// New methods and loops
/*
const boxes = document.querySelectorAll('.box');

var boxesArr5 = Array.prototype.slice.call(boxes);
/*
// ES5
boxesArr5.forEach(function (cur) {
    cur.style.backgroundColor = 'dodgerblue';
});



// ES6

const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach( cur => cur.style.background  = 'dodgerblue');

// ES5
/*
for(var i = 0; i < boxesArr5.length;i++) {
    if(boxesArr5[i].className === 'box blue') {
        continue;
    }
    boxesArr5[i].textContent = 'I changed to blue';
}
*/
/*
// ES6
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    } 
    cur.textContent = 'I changed to blue';
}
/*
// ES5
var  ages = [12, 6, 11, 18, 14, 20]

var full = ages.map(function(cur){
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));


*/

/****
 * The spread operator
 */

/*
 function addFourAges(a, b, c, d) {
     return a + b + c + d;
 }

 var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1)


// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);

console.log(sum2);

const sum3 = addFourAges(...ages);
console.log(sum3);



const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith,...familyMiller];
console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');

*/



/******
 * Rest parameters
 */
/*
// ES5
function isFullAge5(){
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((2020- cur) >= 18);
    })
}

isFullAge5(1990, 2005, 1965);
isFullAge5(1990, 2005, 1965, 2016, 2013);

// ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log((2020 - cur) >= 18));
}

isFullAge6(1990, 2005, 1965);
*/

/*

// ES5
function isFullAge5(limit){
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function(cur) {
        console.log((2020- cur) >= limit);
    })
}

//isFullAge5(1990, 2005, 1965);
//isFullAge5(1990, 2005, 1965, 2016, 2013);

// ES6
function isFullAge6(limt, ...years) {
    years.forEach(cur => console.log((2020 - cur) >= limit));
}

isFullAge5(14, 1990, 2005, 1965, 2016, 2013);
*/


/********
 * Default Parameters
 */
/*
//ES5
 function SmithPerson(firstName, yearOfBirth, lastName, nation) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nation === undefined ? nation = 'american' : nation = nation;
     this.firstName = firstName;
     this.lastName = lastName;
     this.yearOfBirth = yearOfBirth;
     this.nation = nation;
 }

 var john = new SmithPerson('John',1990);

var emily = new SmithPerson('Emily', 1985, 'Diaz', 'spanish');
*/
/*
// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nation = 'american'){ 
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nation = nation;
}


var john = new SmithPerson('John',1990);
var emily = new SmithPerson('Emily', 1985, 'Diaz', 'spanish');
*/

/*******
 * MAPS {Data structure}
 */


 // Maps is a new key value data structure
// maps can use any primative value and functions
/*
const question = new Map();
question.set('question','What is the offical name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES7');
question.set(4, 'ES8');
question.set('correct' , 3);
question.set(true, 'Correct Answer ;D');
question.set(false, 'Wrong please try again!');

console.log(question.get('question'));
console.log(question.size);


if(question.has(4)){
    //question.delete(4);
    console.log('Answer is 4 here');
}

console.log(question.get('question'));
console.log(question.size);

//question.clear();

//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
*/

/********
 * Classes
 */

 // ES5
/*
 var Person5 = function(name, yearOfBirth, job) {
     this.name = name;
     this.yearOfBirth = yearOfBirth;
     this.job = job;
 }

Person5.prototype.caculateAge = function () {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');



// ES6

class Person6 {
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }
    
    static greeting() {
        console.log('Hey there!');
    }
}
const john6 = new Person6('John',1990,'teacher');
Person6.greeting();
*/
/*
// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.caculateAge = function () {
   var age = new Date().getFullYear() - this.yearOfBirth;
   console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olymicGames = olymicGames
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.caculateAge();
johnAthlete5.wonMedal();

// ES6
class Person6 {
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olymicGames, medals){
        super(name, yearOfBirth, job);
        this.olymicGames = olymicGames;
        this.medals = medals;
    }   

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3,10);

johnAthlete6.calculateAge();
johnAthlete6.wonMedal();

*/

/******
 * Coding Challenege 8
 */
/*
Suppose that you're working in a small town adminstration, and you're in charge of two town elements: 
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year. 

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town. (forumla: tree/area)
2. Average age of each town's park( forumsla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknow the default is normal

All the report data should be printed to the console.

Hint: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps,arrow functions, destructuring, etc.
*/

class TestObj {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class Street extends TestObj {
    constructor(name, year, length, size = 3) {
        super(name, year);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.year}, is a ${classification.get(this.size)}`);
    }
    returnData(){
        console.log(`${this.name}, built in ${this.year}, is a ${this.size} street.`);
    }
}

class Park extends TestObj {
    constructor(name, year, area, trees) {
        super(name, year);
        this.area = area;
        this.trees = trees;
    }
    caculateDensity(){
        var density = this.trees / this.area
        console.log(`${this.name} has a tree density of ${density} tree per square km`)
    }
}

const allParks = [new Park('Green Park', 1900, 100, 2500), new Park('National Park', 1840, 100, 20000),new Park('Oak Park', 1920, 10, 1000)];

const allStreets = [new Street('Ocean Aveune', 1999, 3, 4),new Street('Evergreen Street', 2008, 1, 2), new Street('4th Street', 2015, 4), new Street('Sunset Boulevard', 1982, 10, 5)]


function calc(arr) {

    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum / arr.length];

}

function reportParks(p) {

    console.log('--------- PARKS REPORT--------------');
    // density
    p.forEach(el => el.caculateDensity());
    //average age
    const ages = p.map(el => new Date().getFullYear() - el.year);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

    // which park has more that 4000 trees
    const i = p.map(el => el.trees).findIndex(el => el >= 4000);
    console.log(`${p[i].name} has more that 4000 trees`);

}

function reportStreets(s) {
    console.log('--------- STREETS REPORT--------------');

    //total and average length of towns streets
    const [totalLength, avgLength] = calc(s.map(el => el.lenght));
    console.log(`Our ${s.lengths} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

    // classify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);