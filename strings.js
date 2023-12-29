// String interpolation in JS
let name = "suresh";
let lastname = "mistry";
let age = 24;
console.log(`My name is ${name} ${lastname} and my age is ${age}`);

// Another way to declare string

let namevalue = "suresh";
let newstring = new String("Sureshmistry");

console.log(namevalue.__proto__);
console.log(namevalue.toUpperCase());
console.log(namevalue.charAt(2));
console.log(namevalue.indexOf("r"));

console.log(namevalue.substring(0, 4));
console.log(namevalue.slice(-2, 3));

let newword = "   suresh   ";
console.log(newword.trim()); // trim functions removes the whitespaces

// replace

let newpara = " I love to have good bikes and car ";
console.log(newpara.replace("good", "great"));

// split

let splitexmple = "hi suresh how are you";
let splitresult = splitexmple.split(" ");
let charatex = splitexmple.charAt(8);

console.log(typeof splitexmple);
console.log(splitresult);
console.log(typeof splitresult);
console.log(charatex);



