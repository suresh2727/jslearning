// Datatypes conversion

let score = "33";

// let c = parseInt(score);
let d = Number(score); //it will convert a string to a number
console.log(typeof d);
console.log(d); // it will give output as NaN (not a number)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let islogged = "";
let booleanIsloggedIn = Boolean(islogged);
console.log(booleanIsloggedIn);
console.log(typeof booleanIsloggedIn);
