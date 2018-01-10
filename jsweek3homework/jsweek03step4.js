"use strict";

    //1. Strings!
    //1.1 Let's consider the following string: let myString = "hello,this,is,a,difficult,to,read,sentence"
    //1.2 Add the string to your file and console.log it.
let myString = "hello,this,is,a,difficult,to,read,sentence"
console.log(myString);
    //1.4 Console.log the length of myString.
console.log(myString.length);
    //1.5 The commas make that the sentence is quite hard to read.Find a way to remove the comma's from the sting and replace them with a spaces
let result = myString.replace(/,/g, " ");
    //1.6 Console.log myString to see if you succeeded.
console.log(result);

    ///For future reference:
    ///var res = str.replace("Microsoft", "W3Schools"); // changes only 1st instance
    ///var res = str.replace(/blue/g, "red"); // changes globally.
    ///var res = str.replace(/blue/gi, "red"); // changes globally, case insensitive.
    /// Using a function to return replacement text:

    //var str = "Mr Blue has a blue house and a blue car";
    //var res = str.replace(/blue|house|car/gi, function myFunction(x) { return x.toUpperCase(); });

    //Consider the following array:

    //let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
    //2.1 Add a statement that adds Mauro's favorite animal ('turtle') to the existing array
favoriteAnimals.push("turtle");
    //2.2 Log your new array!
console.log(favoriteAnimals);
    //2.3 Now add Jim's favorite animal to the array, its a 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.
favoriteAnimals.splice(1, 0, "meerkat");
    //2.4 Write a console.log statement that explains in words you think the new value of the array is.
console.log("I think the new array will be ['blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle']");
    //2.5 Log your new new array!
console.log(favoriteAnimals);
    //2.6 Log the length of the array, add a message: "The array has a length of: "(here you should show the length of the array)
console.log("The array has a length of: " + favoriteAnimals.length);
    //2.7 Jason does not like giraffes, delete this animal from the array
favoriteAnimals.splice(3);
    //2.8 Again log your new array.
console.log(favoriteAnimals);
    //2.9 Now if unlike Jim, you don't like meerkats and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it ?

//Answer: you can find it using this code: favoriteAnimals.indexOf("meerkat");

    //2.10 Log the index of meerkat to the console.Add a message so it says: "The item you are looking for is at index: "(here you should show the index of the item)

console.log("The item you are looking for is at index: " + favoriteAnimals.indexOf("meerkat"));