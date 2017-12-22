//This is for step 3 jsweek2 homework, item #10, a programme to answer various questions.
"use strict";

//10. Write a program to answer the following questions:
//10.1 Can you store multiple types in an array ? Numbers and strings ? Make an example that illustrates your answer.

    //Answer: yes.
console.log("These are the steps to creating an array with different types within it.");
console.log("step 1, create a blank array.");
let array = [];
console.log("step 2, *push* items into the array, EG, a string 'I am a string in an array', and a number '42'");
array.push("I am a string in an array");
array.push(42);
console.log(array);
console.log("There are now two different types in the array, namely: " + array);

//10.2 Can you compare infinities ? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
let x = 6 / 0;
let y = 10 / 0;
if (x === y) {console.log("We can compare infinities!") }
else { console.log("We can not compare infinities!") };
console.log("In JS, if the result of two operations are mathematical, they can be compared.")
console.log("However, the answer in mathematics may be somewhat different.")
//10.3 Add console.log statements to the above program's in which you show that you understand the concepts (just like you've done in the above assignments).