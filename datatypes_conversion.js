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

// ***************Operation***************************

let str1 = "suresh";
let str2 = " mistry";
let str3 = str1 + str2;
// console.log(str3);
// console.log("3" + 3);
// console.log(3 + "3");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

let x = 3;
let y = x++; //postfix increment
console.log(x, y);

let a = 3;
let b = ++a; //prefix increment
console.log(a, b);



