//This is for step 3 jsweek2 homework, item #08, comparing two variables. 
"use strict";
//8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
//8.1 First declare at least four variables and assign them different data types.

//8.2 For each variable write a console.log statement that logs the value

    //let foo = 3;
    //console.log('The value of my variable foo is: ' + foo);
    //(Curious to know what a foo is ? Check this article on WikiPedia.)
let foo = 3;
console.log("The value of my variable foo is: " + foo);
let bar = 6;
console.log("The value of my variable bar is: " + bar);
let toto = "hello";
console.log("The value of my variable toto is: " + toto);
let tata = "bye";
console.log("The value of my variable tata is: " + tata);

//8.3 Now write a console.log statement wherein you first explain in words what you think the type of your variables is.
console.log("I think variables foo and bar are numbers; and variables toto and tata are strings.");

//8.4 Now use typeof to log the actual type of your variables.
console.log("Variable foo is a " + typeof foo);
console.log("Variable bar is a " + typeof bar);
console.log("Variable toto is a " + typeof toto);
console.log("Variable tata is a " + typeof tata);
//8.5 Now compare the types of your different variables with one another.
//8.6 Make sure to also show a message when the variables you are comparing are not the same type.

    //For example:

    //let x = 9;
    //let y = 'Hello';

    //if (...) {
        //console.log('SAME TYPE');
    //}
    // TODO -> add a way of giving feedback if your variables don't have the same type
if (typeof foo === typeof bar) { console.log("Variables foo and bar are SAME TYPE");}
else { console.log("Variables foo and bar are not SAME TYPE"); }
if (typeof toto === typeof tata) { console.log("Variables toto and tata are SAME TYPE"); }
else { console.log("Variables toto and bar are not SAME TYPE"); }
if (typeof foo !== typeof tata) { console.log("Variables foo and tata are NOT same type"); }
if (typeof toto !== typeof bar) { console.log("Variables toto and bar are NOT same type"); }





