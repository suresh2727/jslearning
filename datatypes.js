// Datatypes  in js

let name = "suresh"; //string
let age = 5; // number
let istrue = true; // boolean value

let s = null; // standalone value

let city; // type of undefined

const num = 9007199254740991n; // type of bigint

const suresh_details = {
  fname: "suresh",
  fage: 12,
  flastname: "mistry",
};

console.table([
  typeof name,
  typeof age,
  typeof istrue,
  typeof s,
  typeof city,
  typeof num,
  typeof suresh_details,
]);

//Number
//string
//boolean
//null  => null typeof will return object
// undefined  => undefined will return undefined
// bigint => a very large number.
// Symbol => unqiue k liye

//object
