const { kitties } = require("../datasets/kitties");
const { puppers } = require("../datasets/puppers");

// To run the code you've written in this file, use node prototypes/problem-sets/kitties.js

console.log("Running kitties.js");

/* Kitty Prompts*/

/*
Level 1

Code: 
  Write a function called "findOrangeNames" that returns an array of just the names of kitties who are orange 

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(findOrangeNames())
    should print --> ['Tiger', 'Snickers']

Annotate:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/

function findOrangeNames(data) {
  // find which kittens are orange
  let orangeKitties = data.filter((kitten) => kitten.color === "orange");
  // need to now go through all the cats left and grab there name to use for the return
  let orangeKittyNames = orangeKitties.map((kitten) => kitten.name);
  // return it
  return orangeKittyNames;
}

//console.log(findOrangeNames());

/*
Level 2

Code: 
  Write a function called "sortByAge" that returns an array of kitty objects that are sorted from oldest to youngest.

Invoke:
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(sortByAge())
    should print -->   
      [{
        name: 'Snickers',
        age: 8,
        color: 'orange'
      },
      {
        name: 'Tiger',
        age: 5,
        color: 'orange'
      },
      {
        name: "Felicia",
        age: 2,
        color: "grey"
      }, 
      ...etc]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/

function sortByAge(data) {
  // copy original array before we mutilate it
  let sortedKittens = [...data];
  // sort the kittens by age descending
  sortedKittens.sort((a, b) => b.age - a.age);
  // return new array
  return sortedKittens;
}

//console.log(sortByAge());

/*
Level 3

Code: 
  Write a function called "growUp" that returns an array of kitty objects that have all grown up by 2 years.

Invoke: 
  To print the value your function returns and confirm it is correct, invoke your function within a console.log().
e.g.
  console.log(growUp())
    should print -->   
      [{
        name: 'Felicia',
        age: 4,
        color: 'grey'
      },
      {
        name: 'Tiger',
        age: 7,
        color: 'orange'
      },
      ...etc]

Annotation:
  After you find a solution, write out the steps of that solution.  Break them down as much as possible. 
*/

function growUp(data) {
  //let olderKitties = [...kitties];

  //olderKitties.forEach((kitten) => (kitten.age += 2));

  // use map to create a new array with older kitties
  let olderKitties = data.map((kitty) => {
    // create a copy of each kitty object with the age increased by 2
    return { ...kitty, age: kitty.age + 2 };
  });

  // had to change this so it sorts oldest to youngest, going to mutilate it.
  olderKitties.sort((a, b) => b.age - a.age);
  // return new array
  return olderKitties;
}

//console.log(growUp());

/*
Level 4

Currently, your functions are probably using the imported `kitties` global  variable from line 1.

Code:
  Refactor the three functions above using arguments and parameters so that they can perform the same utility for the kitties or puppers datasets, depending on what arguments you send through.

Invoke:
  Invoke each refactored function twice, once passing the kitties data as an argument and once passing the puppers data as an argument

e.g.
  console.log(findOrangeNames(kitties)) --> same result as above
  console.log(sortByAge(kitties)) --> same result as above
  console.log(growUp(kitties)) --> same result as above

  console.log(findOrangeNames(puppers)) 
    should return --> ["Hatchet", "Butter"]

  console.log(sortByAge(puppers)) 
    should return --> 
      [{
        name: 'Scout',
        age: 12,
        color: 'grey'
      },
      {
        name: 'Stick',
        age: 6,
        color: 'brown'
      },
      ...etc]

  console.log(growUp(puppers))
    should return --> 
      [{
        name: 'Scout',
        age: 14,
        color: 'grey'
      },
      {
        name: 'Hatchet',
        age: 5,
        color: 'orange'
      },
      ...etc]

Annotation:
  Jot down any takeaways, questions, or reflections about this refactoring.
*/

// console.log("kitten: ", findOrangeNames(kitties));
// console.log(findOrangeNames(puppers));
// console.log("kitten: ", sortByAge(kitties));
// console.log(sortByAge(puppers));
// console.log("kitten: ", growUp(kitties));
// console.log(growUp(puppers));

// didnt have to really change anything, just gave each of them one param to use for what data you feed it.

/*
Level 5

Test:
  * Uncomment the module.exports below.
  * Unskip the 3 Kitty Prompts tests and 3 Kitty Prompts Refactor tests in your prototype-test.js file.
  * Run `npm test` to confirm that all your functions are passing their tests.
  * Refactor as needed until all 6 tests are passing

Annotation:
  If your tests did not immediately pass, take notes on what details you missed while building and checking your solutions. 
  Take notes on the error messages that led you to fixing those details. 
*/

module.exports = {
  findOrangeNames,
  sortByAge,
  growUp,
};
