'use strict';

/* ****************** Restaurant object ************************* */

/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
*/

/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // ES6 literals
  openingHours,

  // For destructuring the names need to be matched
  // ES6 object enhanced literals
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and` +
        ` ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and
    ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};


/* ****************** Array destructuring ************************* */

/*
// Array destructuring

const arr = [2, 3, 4];

// Destructuring assignment
const [x, y, z] = arr;
console.log(x, y, z);

// From the restaurant

// const [first, second] = restaurant.categories;
// console.log(first, second);

// Skipping (avoid extra variables)
let [main, , second] = restaurant.categories;
console.log(main, second);

// To switch values conventionally
// const temp = main;
// main = second;
// second = temp;
// console.log(main, second);

// With destructuring
[main, second] = [second, main];
console.log(main, second);

// returning multiple values from a function

// restaurant.order(2, 0);
// console.log(restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

/* ****************** Nested Array destructuring ************************* */
/*
//
const nested = [1, 3, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const arr2 = [8, 9];
const [p = 1, q = 1, r = 1] = arr2;
console.log(p, q, r);

// Destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// very useful when retrieving external API calls
// Assigning alternate names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

/* ****************** Setting default values ************************* */
/*
//
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// Need those open parenthesis to use object assignment without let or const
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/* ****************** Spread operator ************************* */

//
/*
const arr = [3, 4, 5];

const newArr = [1, 2, ...arr];
console.log(newArr);

// array back to its values
console.log(...newArr);
// That is equal to
console.log(1, 2, 3, 4, 5);

// Adding to an existing array and creating a new
const newMenu = [...restaurant.mainMenu, 'Ginger Soda'];
console.log(newMenu);

// Copy array
// To make a shallow copy
const mainMenu = [...restaurant.mainMenu];
console.log(mainMenu);

// For a complex/nested array
const newArray2 = [1, 5, 8, 7, [1, 5]];
const newArray3 = [...newArray2];
// It wont work
console.log(newArray3);

/* ****************** Join two arrays or more ************************* */
/*
//
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Spread operator works on all iterables (arrays, strings, maps, sets,
// NOT objects)

// So it can be used on strings too
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);

// Arguments that are comma separated is not expected always, it will not work
// inside a string literal"${}", or it works only inside a function argument or
// other areas that expect those

// ************ Using Spread operator to pass arguments (real world example) ******

// const ingredients = [
//   prompt('Let\'s make pasta! Ingredient 1?'),
//   prompt('Ingredient 2?'),
//   prompt('ingredient 3?'),
// ];

console.log(ingredients);

restaurant.orderPasta(...ingredients);
*/

/*
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// Shallow copy using spread operator
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);
*/
//

/* ****************** Rest pattern and Parameters. ************************* */
/*

// When spread comes to LHS,

// Eg.
// const [a, b, ...others] = [1, 2, 3, 4, 5];

// console.log(a);
// console.log(b);
// console.log(others);

/*
const [a, b, ...restItems] = [
  ...restaurant.categories,
  ...restaurant.starterMenu,
];

console.log(a, b, restItems);

// Add function to create any number of parameter
// Packing of elements
const add = function(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    console.log(sum);
  }
  return sum;
};

console.log(add(1, 2, 3, 5, 7));

const x = [45, 45, 65];

add(...x); // Unpacking of values
*/

// Ordering pizza
// Pizza must have one real ingredient, other one is optional

// restaurant.orderPizza('butter', 'pasta', 'chocolate');
//

/* ****************** Short Circuiting using logical operator ************************* */

// Using OR
/*
// Logical operators - &&, ||, !
console.log(3 || 'Akshay');

// -> Can use any datatypes
// -> Return any datatypes
// -> Can do short circuiting

console.log('' || 'Akshay'); // Akshay (returnes the truthy value)
console.log(true || false); // true
console.log(true || 0); // true
console.log('AAA' || 'Akshay'); // AAA
console.log(undefined || null); // undefined is falsy value
// null is more truthy comapared to undefined

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
// (falsy//falsy//falsy//true//true//falsy)

// -> The result is the first truthy value ie, Hello, after hello it will
// short circuit the entire value (ie simply the others will not be evaluated)

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

// By using short circuiting and logical operator

const guests2 = restaurant.numGuests || 10;
console.log(guests2);
// That simply happens because the first one doesn't exists or it is falsy
// NOTE:- If the actual guests is 0, this 2 methods don't work, (sometimes
// called boundary values, solution is use logical chaining-->coming below)

/* ****************** Short circuiting using AND operator ************************* */

/*
console.log(0 && 'Akshay');
// Only true when all the ones are truthy, one is found false it will be
// displayed and the whole result will be false
// What happens here is the checking starts from first value then each element,
// is tested, when it finds a falsy value it short circuit the rest
// here 0 is falsy so it shorts rets and displays that one
console.log(7 && 'Akshay');
// It here 7 is truthy, it goes to the next value then checks that also true,
// so it outs the stopped on value
console.log('Hello' && 23 && null && 'jose');
// When it reaches the null it is detected falsy and that will be returned

// Practical application

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinch');
}

// By using and operator (hard to read not recommended)
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
*/

/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

/* ****************** Nullish coalescing operator ************************* */

/*
// New feature introduced in ES2020
// Nullish coalescing operator: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
// If the first value is null or undefined
*/

// CODE:
// QUESTION:
/* ****************** Coding Challenge #1 ************************* */
/* ****************** ********************************************* */

/*
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this
challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are
field players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams
(22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players.
So create a new array ('players1Final') containing all the original team1
players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd
(called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number
of player names (NOT an array) and prints each of them to the console,
along with the number of goals that were scored in total (number of player
  names passed in)
7. The team with the lower odd is more likely to win. Print to the console
which team is more likely to win, WITHOUT using an if/else statement or the
ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK 😀
*/

/*

// Foot ball game object

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/

// ANSWER:
/*
// 1
const [players1, players2] = game.players;
// 2
const [gk1, ...fieldPlayers1] = players1;
console.log(fieldPlayers1);
console.log(gk1);

const [gk2, ...fieldPlayers2] = players2;
console.log(fieldPlayers2);
console.log(gk2);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
// 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6
function printGoals(...players) {
  console.log(`Total Goals ${players.length} goals were scored`);
  console.log(...players);
}

printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console
// which team is more likely to win, WITHOUT using an if/else statement or the
// ternary operator.

team1 < team2 && console.log('Team1 wins');
team1 > team2 && console.log('Team2 wins');
*/

// call the orderDelivery function and passing in an object
// restaurant.orderDelivery({
//   time: '23:30',
//   address: 'Sol street, Mumbai',
//   mainIndex: 2,
//   starterIndex: 2,
// });

/*

// NOTE:

/* ****************** Looping over objects in an indirect way ************************* */
/*
//
// Looping over property names or keys

// Actually the keys are converted to some type of array and then
// we loop through it

const days = Object.keys(restaurant.openingHours);
console.log(days);

let openStr = `We are open for ${days.length} days in a week.`;

for (const day of days) {
  openStr += ` ${day},`;
}

console.log(openStr);

// ************************ Getting or looping through values *************

const values = Object.values(restaurant.openingHours);
console.log(values);

// Getting all the entries( note for a list with index in for loop we use
// list_name.entries())
// Here we got array objects of length 2 contains key and the object
const entriesObj = Object.entries(restaurant.openingHours);
console.log(entriesObj);

for (const x of entriesObj) {
  console.log(`on ${x[0]} we open at ${x[1].open} and close at ${x[1].close}`);
}

// With destructuring object
for (const [day, { open, close }] of entriesObj) {
  console.log(`on ${day} we open at ${open} and close at ${close}`);
}

*/

/* ****************** ? checking in ES6 ************************* */
/*
// console.log(restaurant.openingHours.mon.open);
// But actually the restaurant.openingHours.mon didn't exists
// Need to check before doing an operation
if (restaurant.openingHours) {
  // Do that
}

// For one property it is Ok, but if there is the restaurant, openingHours all
// are optional, then separate conditionals needed chained with &&..

// ES 2020 introduced optional chaining
// Only if the property exist then it reads otherwise it drops
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // check if restaurant open and display a string
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On day ${day}, we are ${open}`);
}

// Methods
// Check method exists before calling
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisoutte?.(0, 1) ?? 'Method does not exist');

// To check an array is empty
const users = [{
  name: 'Akshay', email: 'hello&akshay.oi',
}];
console.log(users[0]?.name ?? 'Empty array');
*/

/*
// ES6 enhanced object literals
console.log(restaurant.openingHours);

// ES6 enhanced methods
console.log(restaurant.orderDelivery({}));

// Calculate property names in ES6
*/

/* ****************** for...of loop ************************* */
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// To get the index too
// for (const item of menu.entries()) {
//   // Each item will be an array
//   console.log(item);
// }

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/

// CODE:
// QUESTION:
/** ****************** Coding Challenge 2  ************************* */
/*
// Coding Challenge #2


Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console
(We already studied how to calculate averages, you can go check if you don't
remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like
this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (
except for "draw"). HINT: Note how the odds and the game objects have the
same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value.
In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

*/

// ANSWER:
/** ****************** **********  ************************* */
/*
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")

for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

// 2. Use a loop to calculate the average odd and log it to the console

// Using Object.values
const odds = Object.values(game.odds);
let avg = 0;
for (const val of odds) {
  avg += val;
}

avg = avg / odds.length;
console.log(avg);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like
// this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (
// except for "draw"). HINT: Note how the odds and the game objects have the
// same property names 😉

*/

/*
const [odd1, odd2, odd3] = Object.values(game.odds);
console.log(`Odd of victory ${game.team1}: ${odd1}`);
console.log(`Odd of draw: ${odd2}`);
console.log(`Odd of victory ${game.team2}: ${odd3}`);
*/

/*
for (const [key, val] of Object.entries(game.odds)) {
  const teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`;
  console.log(`Odd of ${teamStr}: ${val}`);
}
*/

/*
BONUS: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value.
In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/

/*
const scorers = {};

// frequency counter
game.scored.forEach((player) => {
  if (Object.prototype.hasOwnProperty.call(scorers, player)) {
    scorers[player]++;
  } else {
    scorers[player] = 1;
  }
});

console.log(scorers);
*/

/*
// USing turnery operator
const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);
*/

/** ************************************************************************ */

//

/** *************************** Sets in JS ******************************** */
/*
//

const orderSet = new Set([
  'pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);

console.log(new Set('Jonas'));

console.log(orderSet.size);

console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bred'));

// ********************* Add elements
orderSet.add('Garlic Bread');
console.log(orderSet);

// ********************** Delete elements
orderSet.delete('Risotto');
console.log(orderSet);

// In sets there are no indexes, ie getting values out of a set don't make any sense
// For that array is there already,

// const orderSet1 = ['m', 'j', 'k'];

orderSet.forEach((order) => console.log(order));

// for (const order of orderSet) {
//   console.log(order);
// }

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// ******************** If needed a unique array
// const staffUnique = new Set(staff);

// ************************ Unpack the set back to array using spread operator
const staffUnique = [...new Set(staff)];

console.log(staffUnique);

// **************** How many different letter there are in my name
console.log(new Set('akshaychandran').size);

// Only mind about sets if any uniqueness cf a data comes into the mind
*/

/** ****************** Maps in JS  ************************* */
//
// const rest = new Map();

// // Fill map up
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');

// rest.set('catagories');
// console.log(rest);

// // ************ Chaining the set methods
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegan', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest);

// // Get items from map
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// // Logs if we are open or not based on the time
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// // ******************* has method
// console.log(rest.has('catagories'));
// // Delete from map

// rest.delete(2);
// console.log(rest);

// console.log(rest.size);

// rest.set([1, 2], 'Test');
// console.log(rest.get([1, 2])); // Gives 'undefined'
// // Only because those arrays are structurally same they are stored in different
// // locations in memory heap, they didn't point to the same location so they are
// // not same, think about the equating of co-ordinates ((1,2))

// rest.set(document.querySelector('h1'), 'Heading');

// ****************** Method to add values to the map other than the set method

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again'],
// ]);

// console.log(question);

// // Convert objects to map

// console.log(Object.entries(openingHours));

// // As we know it returns array objects of key value pairs, also the map create
// // a new one from that, chaining it together

// const hoursMap = new Map(Object.entries(openingHours));
// console.log(openingHours);

// // ********************** Maps are iterables,

// // for (const [key, value] of question) {
// //   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// // }

// question.forEach((value, key) => {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// });

// // const answer = prompt('your answer');
// // console.log(answer);

// // if (question.get('correct') === Number(answer)) {
// //   console.log(question.get(true));
// // } else {
// //   console.log(question.get(false));
// // }

// // console.log(question.get(question.get('correct') === Number(answer)));

/* *************************** Convert map to array ************************* */
//

// console.log([...question]);
// // Which is same as
// // console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);
// console.log(question.values());
// console.log(question.keys());

// for (const obj in question) {
//   console.log(obj);
// }

/*

/** ****************** Coding Challenge 3 ************************* */
//

/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
const gameEventArray = [...new Set(gameEvents.values())];
console.log(gameEventArray);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

gameEvents.delete(64);
console.log(gameEvents);

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽️ GOAL

gameEvents.forEach((event, time) => {
  // if (time > 45) console.log(`[SECOND HALF] ${time}: ${event}`);
  // else console.log(`[FIRST HALF] ${time}: ${event}`);
  const half = time <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${time}: ${event}`);
});
*/
