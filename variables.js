"use strict";

// Using var
var a = 23;
var b = 33;
var c = a + b;
console.log(c);  

// Using let
let d = 23;
let e = 33;
let f = d + e;
console.log(f);  
// Using const
const g = 99;
const h = 40;
const i = g - h;
console.log(i);  


//Strings//
let myString= "Daisybell";
console.log(myString);
console.log(typeof myString);

//number//
let myNumber = 42;
let myFloat = 3.14;
console.log(myNumber, myFloat); 
console.log(typeof myNumber); 

//boolean//
let isCodingFun = true;
let isBoring = false;
console.log(isCodingFun, isBoring);  
console.log(typeof isCodingFun);  

//objects//

let myObject = {
    name: "Khriston",
    age: 29,
    isBirthday: false  
};

console.log(myObject);

//null//
let myNullValue = null;
console.log(myNullValue); 
console.log(typeof myNullValue);

//array//
let myArray = ["Playstation", "Switch", "Xbox Series X"];
console.log(myArray);
console.log(typeof myArray);

//undefined//
let myUndefined;
console.log(myUndefined);  
console.log(typeof myUndefined); 

//Logical Operators

let condition1 = true;
let condition2 = false;

console.log(condition1 && condition2);

console.log(condition1 || condition2); 

console.log(!condition1);

///Comparison Operators//

console.log(10 == "10");  
console.log(10 === "10"); 
console.log(10 != "10"); 
console.log(10 !== "10"); 
console.log(10 > 5);  
console.log(10 < 5);   
console.log(10 >= 10);    
console.log(10 <= 9);     