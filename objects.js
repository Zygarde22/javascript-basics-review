"use strict";

"use strict";

// Defining an object with properties
let person = {
    name: "Khriston",
    age: 29,
    isStudent: false
};

 
console.log(person.name);    
console.log(person.age);     
console.log(person.isStudent); 

 
person.age = 30;  
person.isStudent = true; 

console.log(person.age);     
console.log(person.isStudent);  


let propertyName = "name";
console.log(person[propertyName]);  

propertyName = "age";
console.log(person[propertyName]); 

propertyName = "isStudent";
console.log(person[propertyName]); 