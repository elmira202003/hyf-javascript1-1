"use strict";

    //1. Create a function that takes 3 arguments and returns the sum of the three arguments.
let x = 21;
let y = 95;
let z = 34;
function sum() {
    console.log(x + y + z);
}
sum();

    //2. Create a function named colorCar that receives a color, and prints out, "a red car" for example.
let color = 'red';
function colorCar() {
    console.log('a ' + color + ' car');
}
colorCar();

    //3.Create an object and a function that takes the object as a parameter and prints out all of its names and values.
let car = { brand: 'Mercedes-Benz', colour: 'white', year: 2018 };
function carInfo() {

    console.log(car.brand);
    console.log(car.colour);
    console.log(car.year);
}
carInfo();

    //4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike.And prints "a blue motorbike" for example when called as vehicleType("blue", 2)

let code = 0;
function vehicleType(colour, code) {
    let type = 'car';
    if (code === 1) { type = 'car' };
    if (code === 2) { type = 'motorbike' };
    return 'a ' + colour + type;
}
console.log(vehicleType('blue ', 1));
console.log(vehicleType('red ', 2));

    //5. Can you write the following without the if statement, but with just as a single line with console.log(...);?

    //if (3 === 3) {
        //console.log("true")
    //} else {
        //console.log("false")
    //}

if (3 === 3) { console.log(true) } else { console.log("false") };    

    //6.Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints "a blue used car"

function vehicle(colour, code, age) {
    if (age === 5) { age = 'used' }
    if (code === 1) { code = 'car' }
    return 'This is a ' + colour + ' ' + age + ' ' + code + '.';
}
let n = vehicle('blue', 1, 5);
console.log(n);
    
    //7.Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
let vehicleList = ['motorbike', 'caravan', 'bike', 'car']

    //8.How do you get the third element from that list ?
console.log(vehicleList[2]);

    //9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new caravan".
function vehicle(colour, age, code) {
    if (age === 3) { age = 'new' }
    if (code === 1) { code = vehicleList[1] }
    return 'This is a ' + colour + ' ' + age + ' ' + code + '.';
}
let m = vehicle('green', 3, 1);
console.log(m);

    //10. Use the list of vehicles to write an advertisement.So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

console.log("Amazing Joe's Garage, we service "
    + vehicleList[0] + "s"
    + ", "
    + vehicleList[1] + "s"
    + ", "
    + vehicleList[2] + "s"
    + ", and "
    + vehicleList[3] + "s"
    + ".");

        //Hint, the output should be correct English with all the punctuation in place(that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.

for (let i = 0; i < vehicleList.length; i++) {
    console.log("Amazing Joe's Garage, we service " + vehicleList[i] + "s.");
}

    //11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10 ?

//Answer: if you use the "for" loop in part 2 of question 10, theoretically there shouldn't need to be a change to that code.
// However, it could get clunky because every iteration adds "Amazing Joe's Garag, we service " to the line.
// One way of de-cluttering is:- 
    // console.log("Amazing Joe's Garage, we service: ");
    //for (let i = 0; i < vehicleList.length; i++) {
        //console.log("Amazing Joe's Garage, we service " + vehicleList[i] + "s.");
    //}


    //12. Create an empty object.
let emptyObj = "";

    //13. Create an object that contains the teachers that you have had so far for the different modules.
let teachers = {
    first: "Philipp",
    second: "Ariadne",
    third: "Abdul",
    forth: "Unmesh"
}
console.log(teachers);

    //14. Add a property to the object you just created that contains the languages that they have taught you.

teachers.languages = "HTML/CSS; GIT; JS";
console.log(teachers);

    //15. Write some code to test two arrays for equality using == and ===.Test the following:

        //let x = [1, 2, 3];
        //let y = [1, 2, 3];
        //let z = y;


let x1 = [1, 2, 3];
let y1 = [1, 2, 3];
let z1 = y1;
console.log(x1 == y1); //false
console.log(x1 === y1);//false
console.log(z1 == y1);//true
console.log(z1 == x1);//false

    //What do you think will happen with x == y, x === y and z == y and z == x ? Prove it!

        //Don't cheat! Seriously - try it first.

        //Check out this Fiddle.You need to open your browser’s Developer Tools to see the console output.Press the Run button in the upper right corner to run the code.

        //More insights from this Stack Overflow question.

// Jason's Comment: I think the difference between == and === comes down to the former being values that match and
// the latter has to match both value AND type. But having said that, I'm not sure why the result is what it is.

    //16. Take a look at the following code:

        //let o1 = { foo: 'bar' };
        //let o2 = { foo: 'bar' };
        //let o3 = o2;

let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

        //Show that changing o2 changes o3(or not) and changing o1 changes o3(or not).

console.log(o1);
console.log(o2);
console.log(o3)

o2.foo = 'baz'

console.log(o1);
console.log(o2);
console.log(o3)

//Answer: yes it changes.

    //Does the order that you assign(o3 = o2 or o2 = o3) matter ?


if (o3 = o2) {
    console.log(o1);
    console.log(o2);
    console.log(o3);
}

o2.foo = 'baz'

if (o2 = o3) {
    console.log(o1);
    console.log(o2);
    console.log(o3);
}
//Answer: apparently not.

    //17. What does the following code return? (And why ?)

        //let bar = 42;
        //typeof typeof bar;
        //‘Coerce' means to try to change - so coercing var x = '6' to number means trying to change the type to number temporarily.

let bar = 42;
typeof typeof bar;
console.log(typeof bar);
console.log(typeof typeof bar);

//Answer: console logging "typeof bar" returns "number", which is expected because bar is defined as 42, a number. 
// console logging "typeof typeof bar" returns "string". The technical explanation is, 
//"The typeof operator returns a string indicating the type of the unevaluated operand."
//IE: typeof x returns a string representation of the type of x. So, naturally, typeof typeof x is string.
//IE: The typeof of a typeof is a string.