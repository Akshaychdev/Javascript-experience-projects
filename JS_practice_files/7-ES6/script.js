// let i = 45;
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i);


// let firstName = 'Akshay';
// let lastName = 'Chandran';
// const yearOfBirth = 1995;

// function calcAge(year) {
//     return 2020 - yearOfBirth;
// }

// // ES5
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in '
// + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.')

// // ES6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}.
// Today, he is ${calcAge(yearOfBirth)} years old.`)

// const name = `${firstName} ${lastName}`;

// console.log(name.startsWith('J'));
// console.log(name.endsWith('n'));

// // in between the string, There is `includes()`
// console.log(name.includes(' ')); // checks if there is any space

// // To repeat the string
// console.log(`${firstName} `.repeat(3));

// ES6 Arrow Functions

// const years = [1990, 1965, 1982, 1937];

// // ES5 (using map function)
// var ages5 = years.map(function(el) {
//     return 2020 - el;
// });
// console.log(ages5);

// // ES6 - less code & clean code

// let ages6 = years.map(el => 2020 - el);
// console.log(ages6);

// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`);
// console.log(ages6);

// // More actions
// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index + 1}: ${age}.`
// });
// console.log(ages6);

// Arrow Functions: Lexical 'this' keyword.

// // ES5

// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         var self = this;
//         // button with class="green"
//         document.querySelector('.green'). addEventListener('click',
//         function() {
//             var str = 'This is the box number ' + self.position + ' and it is '
//                 + self.color;
//             alert(str);
//         });
//     }
// }
// box5.clickMe(); // "This is the box number undefined and it is undefined"

// // ES6

// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function () {
//         // button with class="green"
//         document.querySelector('.green').addEventListener('click',
//             () => {
//                 const str = `This is the box number ${this.position} and ${''
//                 }it is ${this.color}`;
//                 alert(str);
//             });
//     }
// }
// box6.clickMe(); // "This is the box number 1 and it is green"

// ES6

// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => {
//         // button with class="green"
//         document.querySelector('.green').addEventListener('click',
//             () => {
//                 const str = `This is the box number ${this.position} and ${''
//                     }it is ${this.color}`;
//                 alert(str);
//             });
//     }
// }
// box6.clickMe(); // "This is the box number 1 and it is green"

// Function constructor with ES6

// function Person(name) {
//     this.name = name;
// }

// // ES5
// Person.prototype.myFriends5 =
//     function(friends) {
//         var arr = friends.map(function(el) {
//             return this.name + ' is friends with ' + el;
//         });
//         console.log(arr);
//     }

// var friends = ['Bob','Jhon', 'Marks', 'Sweet'];
// new Person('Jane').myFriends5(friends);

// Here also the name is not defined cz, of the same reason, the main prototype
// function have access to the 'this' keyword, but the function inside the map
// function doesn't.

// In ES5, there is also a common workaround (This issues are well known ones),
// ie, to use the `bind()` method to make a copy with the `this` variable set to
// `this` of the main `prototype`.

// Person.prototype.myFriends5 =
//     function (friends) {
//         var arr = friends.map(function (el) {
//             return this.name + ' is friends with ' + el;
//         }.bind(this));

//         console.log(arr);
//     }

// var friends = ['Bob', 'Jhon', 'Marks', 'Sweet'];
// new Person('Jane').myFriends5(friends);

// // ES6
// Person.prototype.myFriends5 =
//     function (friends) {
//         var arr = friends.map(el => {
//             return this.name + ' is friends with ' + el;
//         });
//         console.log(arr);
//     }

// var friends = ['Bob', 'Jhon', 'Marks', 'Sweet'];
// new Person('Jane').myFriends5(friends);

// // Destructuring.

// // ES5

// var john = ['John', 25];
// // var name = john[0];
// // var age = john[1];

// // ES6

// const [name, year] = ['John', 25];
// console.log(name);  // John
// console.log(year);  // 25

// // Also with objects
// const obj = {
//     firstName: 'John',
//     lastName: 'Smith'
// };

// // Destructuring (variable names match the keys)
// const {firstName, lastName} = obj;
// console.log(firstName);  // John
// console.log(lastName);  // Smith

// // If need a separate variable name
// const { firstName: a, lastName: b } = obj;
// console.log(a);  // John
// console.log(b);  // Smith

// // Practical application of destructuring, To return multiple values from
// // a function

// function calcAgeRetirement(year) {
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [age, retirement] = calcAgeRetirement(1994);
// console.log(age);
// console.log(retirement);


// Arrays in ES6

// const boxes = document.querySelectorAll('.box');

// To traverse through the nodelist returned in ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);

// // To change all box colors to blue (ES5)
// boxesArr5.forEach(function(curr) {
//     curr.style.backgroundColor = 'dodgerblue';
// });

// // In ES6 - It can be done in a single line of code

// Array.from(boxes).forEach(curr => curr.style.backgroundColor = 'dodgerblue');


// console.log('kjds');

// function narcissistic(value) {
//     let sum = 0;
//     Array.from(String(value), Number).forEach(num => sum += num ** String(value).length);
//     return sum === value
// }
// console.log(narcissistic(7));
// console.log(narcissistic(371));
// console.log(narcissistic(153));
// console.log(narcissistic(45));


// // Loops

// When we need looping through an array, we use `forEach` or `map` method,
// But the problem with both of them is, we can't `break` from them or use the
// `continue` statement, for that we need to go back to conventional for loop,
// But for simple loops it is more code and variables.

// ie, in the ES5 way,
// for (var i = 0; i < boxesArr5.length; i++) {
//     if (boxesArr5[i].className === 'box blue') {
//         continue;
//     }
//     boxesArr5[i].textContent = 'I changed to Blue';
// }

// In ES6 to overcome this issue a new loop called `for of` loop, introduced
// const boxesArr6 = Array.from(boxes);

// for (const cur of boxesArr6) {
//     if (cur.className.includes('blue')) {
//         continue;
//     }
//     cur.textContent = 'I changed to Blue';
// }

// ES5

// var  ages = [12, 17, 16, 14, 19, 15, 11];

// // To determine the index of the ages which are greater than or equal to 18

// var full = ages.map(function(cur) {
//     return cur >= 18
// })

// console.log(full);

// // Which one is full age
// console.log(full.indexOf(true));

// // to find the exact year
// console.log(ages[full.indexOf(true)]);

// // In ES6, index, find methods

// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));



// // The spread operator

// function addFourAges (a, b, c, d) {
//     return a + b + c + d;
// }

// var sum1 = addFourAges(18, 21, 34, 23);
// console.log(sum1);

// // If the numbers are in an array,
// // ES5

// var ages = [18, 21, 34, 23];

// // 'bind', 'call' and 'apply' methods, need 'this'(here don't any use so 'null')
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// // In ES6, the `spread` operator simplifies it all,
// const sum3 = addFourAges(...ages);
// console.log(sum3);

// // A spread operator denoted by `...`(three dots), the operator just expands
// // the array in to its components.
// // It got more use cases, eg: for joining arrays.

// // const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];

// const bigFamily = [...familySmith, ...familyMiller, 'lilly'];

// // As explained the `spread` operator just expands the array and put there, so
// // it gives the output of two arrays combined.text-content
// console.log(bigFamily);

// It can be applied not just on an array but also on nodelists.

// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');

// const all = [h, ...boxes];

// Array.from(all).forEach(cur => cur.style.color = 'purple');

// Rest parameters

// // ES5

// function isFullage5() {
//     console.log(arguments);
//     var argsArray = Array.prototype.slice.call(arguments);

//     argsArray.forEach(function(cur) {
//         console.log((2020 - cur) >= 18);
//     })
// }

// // in ES5, to receive an undefined number of arguments, don't define any
// // parameters for a function, then just use the `arguments` variable(which is
// // similar to `this` in which every execution context get access to.)

// isFullage5(1990, 1995, 1996, 2013, 1997);
// // It returns not exactly an array(does not got an Array, function constructor)
// // but an object, For to loop through it, use the ES5 hack to convert it to an
// // array


// // ES6, by making use of rest parameters

// function isFullage6(...years) {
//     years.forEach(cur => console.log((2020 - cur) >= 18));
// }

// isFullage6(1990, 1995, 1996, 2013, 1997);

// // The difference between the spread operator and the rest parameter is actually
// // the place where we use it each, `spread` is used in a function call, and
// // `rest` operator is in a function declaration to accept an arbitrary number
// // of parameters

// ES5, modifying it by giving a limit, at which age the person will got full
// age

// function isFullage5(limit) {
//     var argsArray = Array.prototype.slice.call(arguments, 1);

//     console.log(argsArray); // outs after omitting the first number

//     argsArray.forEach(function (cur) {
//         console.log((2020 - cur) >= limit);
//     })
// }

// // But there is a problem, the `limit` will also be part of the arguments, like
// isFullage5(21, 1990, 1995, 1996, 2013, 1997);

// // In ES5, the problem is overcome using the same slice method, (they basically
// // used to cut a piece of an array)

// // In ES6, there is not that much complication to add an extra argument
// function isFullage6(limit, ...years) {
//     years.forEach(cur => console.log((2020 - cur) >= limit));
// }

// isFullage6(17, 1990, 1995, 1996, 2003, 1997);


// Default Parameter

// To Preset one or more parameters of a function(if needed a default value)

// // The ES5 way of adding default parameter.

// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1990);

// // Here we only specify the first two arguments required, js assigned undefined to the
// // other two values.

// console.log(john);

// // But if added a default for the last name and nationality, it can be solved, in ES5 it can be added
// // using if-else statements or turnery operators,

// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

//     lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//     nationality = nationality === undefined ? 'Indian' : nationality;

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// console.log(john);

// // In ES6,

// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }


// Maps in ES6

// A map is a new key: value data structure in javascript,

// The difference is, one can use anything(numbers, strings, boolean or even functions and numbers)
// in place of keys.(in objects, it is limited to strings)

// Creating a map:

// const question = new Map();

// // Setting up values
// // 0 position
// question.set('question', 'What is the official name of the latest major javascript version?');

// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES 2015');
// question.set(4, 'ES 2017');

// question.set('correct', 3);

// question.set(true, 'Correct answer:D');
// question.set(false, "Wrong, please try again!");

// console.log(question);

// // To get values from it.
// console.log(question.get('question'));

// // to get length of the map
// console.log(question.size);

// // Delete data from map
// // question.delete(4);
// // // here the element with key 4, (4 => 'ES 2017') gets deleted.
// // //  if deletion done on a non-existent element.
// // question.delete(4);

// // Check if data is there with "has".
// if (question.has(4)) {
//     // question.delete(4);
//     console.log("has worked");
// }

// To clear
// question.clear();
//

// Looping through maps,

// forEach similar to other iterables, it has access to current element, key and the entire map.
// question.forEach((value, key) => console.log(`${key} and ${value}`));

// using the for of method
// for (let [key,value] of question.entries()) {
//     console.log(`${key} and ${value}`);
// }

// // Instead of printing all elements from the map, lets try to print all 4 answers
// for (let [key, value] of question.entries()) {
//     if (typeof(key) === 'number') {
//         console.log(`Answer ${key}: ${value}`);
//     }
// }

// const ans = parseInt(prompt('Write the correct answer'));
// Check for the correct answer, if the expression is correct it will extract the 'true' key value
// console.log(question.get(ans === question.get('correct')));

// maps are now better than object to create hash maps, use any data type as keys, maps are iterable
// // easily loop through them and to manipulate data with them, get the size of a map using the `size` property
// console.log(question.size)
// Also it is easy to add and remove data from maps

// CLASSES IN ES6

// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }

// var john5 = new Person5('John', 1995, 'teacher');
// john5.calculateAge();

// ES6, nicely structured, Easier to write syntactic sugar
// class Person6 {
//     // All classes need a constructor method
//     constructor (name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     // prototype just added inside the class
//     calculateAge() {
//         let age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }

//     static greeting() {
//         console.log('Hey there!');
//     }
// }

// const john6 = new Person6('John', 1995, 'teacher');
// john6.calculateAge();

// Person6.greeting();

// Inheritance between classes

// In ES5

var Person5 = function(name, yearOfBirth, gender) {
    // Just a default value
    this.isHuman = true;
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.gender = gender;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

// The person5  function constructor, will be the superclass here
// The subclass will be the athlete class

var Athlete5 = function (name, yearOfBirth, gender, olympicGames, medals) {
    // Just calls the parentclass or superclasss
    Person5.call(this, name, yearOfBirth, gender);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

// Creating an instance
var Usain = new Athlete5("Usain Bolt", 1982, "Male", 4, 18);
console.log(Usain.isHuman);
console.log(Usain.yearOfBirth);
console.log(Usain.name);
console.log(Usain.olympicGames);
console.log(Usain.medals);

// There need to call the superclass fun. constructor with the `this` keyword, cz
// (remember with the `new` operator, it creates a new instance of the class and assign
// the `this` keyword to it, thereby inheriting all the parent properties to the instance created,
// also prototype methods)
// To inherit all the properties of superclass(Person5) to the Athlete5 class, use the call method to
// call the superclass, the `this` sets the current class as a child.
// The call method (learnt earlier as a trio ---call, apply, bind--- methods of JS objects) accepts the first
// argument
var sampleObj = {num:2};

var justAdd = function(a, b) {

    return this.num + a + b;
};

// But the there is no "num" assigned to `this` function
// To assign, use the `call` method
var answer;
answer = justAdd.call(sampleObj, 3, 5);
console.log(answer);  // Gives 10

// Here, the `justAdd` is called with the sample object (set to `this`), so `this.num = 3`

// To use the apply method,
var argArr = [3, 5];
answer = justAdd.apply(sampleObj, argArr);

console.log(answer);  // gives same answer 10
// apply just uses an array of arguments.

// To use the bind method
answer = justAdd.bind(sampleObj, 3, 5);

console.log(answer); // The answer now doesn't returns a value, but a function

// To examine it
console.dir(answer);
// It is now a function with name `bound justAdd` and has "[[BoundThis]]: Object - num:2 ,[[BoundArgs]]: Array(1), 0: [3,5]"

// It needed to pass arguments as single (not as an array)
console.log(answer()); // Gives 10

// But the answer now is a function, one can pass the arguments directly
answer = justAdd.bind(sampleObj);
console.log(answer(3, 5));

// Above, done the opposite thing,ie called the Person5 fun. constructor with current one(ie the `this`), and used
// no arguments.

// if used only `Person5.call(this)`