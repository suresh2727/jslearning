let cars = ["suzuki" , "honda ", "skoda"];
let german_cars = ["bmw" , "audi" , "mercedes"];

// cars.push(german_cars);

console.log(cars);

let newarray = cars.concat(german_cars)
console.log(newarray);
let arraymap = [1 ,3 ,4 ,5]
let newarraymap = arraymap.map(cars => cars*2);
console.log(newarraymap);
console.log("\n");

let botharray =[...cars , ...german_cars];
console.log(botharray);


console.log("\n");

let flat_array = [1 ,3 ,4 ,34 ,[3 ,5 ,7 ,8 ] , [5 ,7 ,8 ,6,[5,3,2,1]] , 25,45 , 43];
console.log(flat_array.flat(3));

console.log("\n");

console.log(Array.isArray("Suresh"));
console.log(Array.from("Suresh"));


let fname = "suresh";
let mname = "devaram";
let lname = "mistry";

console.log(Array.of(fname , mname , lname));



