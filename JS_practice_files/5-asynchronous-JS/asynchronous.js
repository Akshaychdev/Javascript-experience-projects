// Asynchronous Javascript

// Syn. javascript code (present style.)

// const second = () => {
//     setTimeout(() => {
//         console.log('Async, Hey there!');
//     }, 2000)
// }

// const first = () => {
//     console.log('Hey There');
//     second();
//     console.log('The End');
// }

// first();

// Adding Asynchronous code using `setTimeout` function, in the second function.


// Asyn. JS the traditional Way.

// Fake recipe reader, gonna fake some AJAX calls, as it is loading data from an external web server,\
// using setTimeouts,
// First it gets some id's, then the recipes..

// function getRecipe() {
//     // To simulate the AJAX calls
//     setTimeout(() => {
//         // the fetched recipe id's
//         const recipeID = [523, 883, 432, 974];
//         console.log(recipeID);

//         // new-timer to fetch data from a single id
//         setTimeout(id => {
//             // For simulating a remote server
//             const recipe = {
//                 title: 'Chicken Curry',
//                 publisher: 'Akshay'
//             };
//             console.log(`${id}: ${recipe.title}`);

//             // Adding a third level of timeout
//             setTimeout(publisher => {
//                 // block scoped
//                 const recipe = {
//                     title: 'Italian Pizza',
//                     publisher: publisher
//                 };
//                 console.log(recipe);
//             }, 1500, recipe.publisher)

//         }, 2000, recipeID[2])

//     }, 1500)
// }

// getRecipe();

// The data(in the recipeID) appears after 1.5 seconds, like coming from a server.
// Then it needs to fetch one of the id detailed data..
// The value needed to be passed to the callback function as third argument, here the id(432) get
// passed to `setTimeout()` function.
// Now after 2s logged data(id and title) appears on the screen.
// with 1.5s delay
// (4) [523, 883, 432, 974]
// after 2s
// 432: Chicken Curry

// To get things more complex lets add a third level, such as one need to get another recipe from the same publisher
// so, we pass the publisher as the `argument` to the callback function.
// it gets displayed after 1.5 seconds. now the first recipe and the related recipe gets displayed

// This now is like some chained AJAX calls getting some data from a server, if  there is more and more chaining like
// 10 levels inside one another, then all the callbacks appears one another creating a so called,
// Callback Hell..
// the left triangle we see on the code (i.e. looping after looping)..It gets a lot messy and unmanageable


// Use the new keyword as usual to create a new promise,
// Executer(The arrow fn. inside) is a function which is immediately called once the promise is created..
// Assign the promise to a variable, so as to recreate the prv. example.
// This first promise is responsible for getting the ID's as like in the first timer,
// The Executer fn. takes in two arguments, ie the callback functions- `resolve` and `reject`, as the executer function
// is used to inform the promise the event handling successful or not, if successful --> resolve, else if there is no
// results --> reject gets called.
// Let's put an asynchronous task in the promise..(again, faking the AJAX call with setTimeout functions.), the timer
// is set to 1.5s after the callback function gets called.
// Similarly return some fake data with the id as before, for that now call the resolve function, remember resolve is
// called when the event gets successful, so marking resolve makes the event as successful.
// resolve takes an argument, which is for the result of the promise and this is how we return the result from a promise
// if it was successful(here we need the array od ids)
// The timer is impossible to fail(it always finishes), but in real world all requests don't come back with results,
// as in case it don't need to implement the reject case. so as it always marks as fulfilled and the result get resolved.
// Now the simple promise is produced and stored in the `getIDs` variable.
// As a next step, we can look at how to consume this promise.

// To do that one can use these two methods on all promises, which are the `then` and `catch` methods.(all of the promise
// objects inherit these methods)

// const getIDs = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //1. After 1.5 promise successful, result passed
//         resolve("[523, 883, 432, 974]");
//     }, 1500)
// });

// The `then` method allows one to add an event-handler for the case fulfilled condition, i.e. it determines what to do
// with the result.
// The argument passed to the callback function(the arrow function), will be the result of the successful promise,(here
// in our case, the ids array.)
// getIDs.then(IDs => {
//     // logging the result array to console
//     console.log(IDs);
// });

// Now with delay of 1.5s, array gets logged in as same
// (4) [523, 883, 432, 974]

// On the counter side the `catch` method allows one to add handler, when the promise gets rejected, error happens,
// can chain this together

// 2. Function to receive an id and returns a promise
// const getRecipe = recID => {
//     return new Promise((resolve, reject) => {
//         setTimeout( id => {
//             const recipe = {
//                 title: 'Chicken Curry',
//                 publisher: 'Akshay'
//             };
//             resolve(`${id}: ${recipe.title}`);
//         }, 1500, recID);
//     });
// };


// getIDs
// .then(IDs => {
//     // logging the result array to console
//     console.log(IDs);
//     // consuming the 2nd promise, by calling the function
//     getRecipe(IDs[2]).then()
// })
// .catch(error => {
//     // the reject error handling
//     console.log(error);
// })

// but to visualize it, use a `reject` call with the array, or an "ERROR" message, if there is a reject call and no `catch`
// methods implemented, then it gets an error,
// Uncaught (in promise) ERROR

// getIDs
// .then(IDs => {
//     // logging the result array to console
//     console.log(IDs);
//     // get the promise and return it,
//     return getRecipe(IDs[2]);
// })
// // this chained then handles the result of the returned promise
// .then(recipe => {
//     console.log(recipe);
// })
// .catch(error => {
//     // the reject error handling
//     console.log(error);
// })

// const getRelated = publisher => {
//     return new Promise((resolve, reject) => {
//         setTimeout(pub => {
//             const recipe = {
//                 title: 'Italian Pizza',
//                 publisher: pub
//             };
//             resolve(recipe);
//         }, 1500, publisher)
//     });
// };

// getIDs
// .then(IDs => {
//     // logging the result array to console
//     console.log(IDs);
//     // get the promise and return it,
//     return getRecipe(IDs[2]);
// })
// // this chained then handles the result of the returned promise
// .then(recipe => {
//     console.log(recipe);
//     return getRelated('Akshay')
// })
// .then(recipe => {
//     console.log(recipe);
// })
// .catch(error => {
//     // the reject error handling
//     console.log(error);
// })


// ES 2017 - ASYNC/AWAIT to consume promises more effectively

// Its just change the way we consume the promises (as with then() and catch() earlier)

const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        //1. After 1.5 promise successful, result passed
        resolve("[523, 883, 432, 974]");
    }, 1500)
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout( id => {
            const recipe = {
                title: 'Chicken Curry',
                publisher: 'Akshay'
            };
            resolve(`${id}: ${recipe.title}`);
        }, 1500, recID);
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {
                title: 'Italian Pizza',
                publisher: pub
            };
            resolve(recipe);
        }, 1500, publisher)
    });
};

// Changing the way to consume the promises with Async/await

// This is a new kind of function, this one keeps running in the background, then return a promise
// Inside one async function, there can have one or more await expressions, to consume the promises.
// async function getRecipesAW() {
//     // The first promise is assigned to IDs with an await
//     const IDs = await getIDs;
//     console.log(IDs);
// }
// getRecipesAW();

// // after 1.5s
// [523, 883, 432, 974]

// await stops the code from executing until the promise get fulfilled, then only it gets assigned
// to the const. await keeps the function running asynchronously in the background.

// If the promise gets rejected an error will be thrown, if it needs to handle that more code
// needed to be added in the async function.(below.)

// Consuming the other two promises
// async function getRecipesAW() {
//     // The first promise is assigned to IDs with an await
//     const IDs = await getIDs;
//     console.log(IDs);

//     const recipe = await getRecipe(IDs[2]);
//     console.log(recipe);

//     const related = await getRelated('Akshay');
//     console.log(related);
// }
// getRecipesAW();

// after 1.5s
// [523, 883, 432, 974]
// after 1.5s
// 2: Chicken Curry
// another 1.5s
// {title: "Italian Pizza", publisher: "Akshay"}
// The syntax gets lot more simpler now, simply waits(awaits) till each of the promises gets resolved,
// It allows consume promises without the callback hells in a more readable way.
// remember the async/await only comes as a pair. i.e. the await can only be used inside the async
// function.

// What about returning a value from an async function, lets try
async function getRecipesAW() {
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const related = await getRelated('Akshay');
    console.log(related);

    return recipe;
}
const rec = getRecipesAW();
console.log(rec);

// But it didn't works, it only shows
// Promise {<pending>}

// Why it didn't work, its simply cz the function, `getRecipesAW()`, runs asyn. in the background\
// When it is called it is still running in background, (it runs synchronously)

// so if we really need to log that giving a set timeout will do  like/
function logRes() {
    setTimeout(() => {
        console.log(rec);
    }, 5000)
};

logRes();
// Promise {<pending>}
// after 1.5s
// [523, 883, 432, 974]
// after 1.5s
// 2: Chicken Curry
// another 1.5s
// {title: "Italian Pizza", publisher: "Akshay"}

// after a total 5sec from start
// Promise {<fulfilled>: "2: Chicken Curry"}

// But this is hack there are simpler and implemented ways to do the same,
// The fact is the async function always automatically returns a promise, when
// a return is done within the async function, then promise gets resolved
// (new promise -> resolve(recipe) thing) automatically,
// ie, one can simply use the then() method as with a promise traditionally,
getRecipesAW().then(result => console.log(`${result} is the best ever thing`));

// the exacting thing about async/await is that it looks like a synchronous code but works
// asynchronously behind the scenes.
// "Synchronous code that works in an asynchronous way"
