// Number and math
const score = 100;

console.log(score);

const newNumber = new Number(120);
console.log(newNumber);

console.log(newNumber.toString().length);
console.log(newNumber.toFixed(2));
console.log(newNumber.toLocaleString());

//toLocaleString example how to convert values in currency order

let indianlakh = 25000;

let options = {
  style: "currency",
  currency: "INR",
};
console.log(indianlakh.toLocaleString("en-IN", options));


//Math

console.log("absolute function", Math.abs(-101.08));
console.log("Round of " , Math.round(101.08));
console.log("to find the floor value ",Math.floor(101.08));
console.log("To find the ceil value",Math.ceil(101.08));
console.log("To find min  value",Math.max(12, 10 ,3, 4 ,1 ,4 ));  
console.log("To find min  value",Math.min(12, 10 ,3, 4 ,1 ,4 ));  
console.log("Power  ",Math.pow(2,2));  
console.log("Exponent " , Math.exp(2));
console.log("square root " ,Math.sqrt(25));


// Random value

console.log("Random value ", Math.floor((Math.random() * 10)*30));