// Datatypes summary in JS
// There are two types of datatypes.
//primitive and non-primitive

//Primitive types
// string , number , null , undefined , symbol , bigint , boolean

//Non primitive types or reference type
// Arrays , Objects , Functions

let name = "suresh"; //string
let age = 24; // number
let decimalvalue = 24.5; // number
let nulltype = null; //null
let undefinedvalue = undefined; // undefined
let booleanValue = true; // boolean

let specialValue = Symbol("123");
let specialValue2 = Symbol("123");
console.log(specialValue == specialValue2);

// Non-primitive datatypes

//Array

let Names = ["suresh", "mistry", "xyz"]; //Array example

console.log(Names);

//object

let details = {
  name: "suresh",
  age: 32,
}; // Objects example

console.log(details);

function myfunction() {
  console.log("hello world");
}

myfunction(); // function example

// All the primitive types store in STACK(gives copy)
// All the non-primitive types store in Heap(provides reference value)

let fname = "suresh";
let lname = fname;
lname = "mistry";
// example of stack
console.log(fname);
console.log(lname);

let user1 = {
  email: "coolsuru123",
  otp: 2,
};

let user2 = user1;

user2.email = "suresh";

console.log(user1);
console.log(user2);
