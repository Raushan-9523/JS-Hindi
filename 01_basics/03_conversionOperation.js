let score = "10abc";

console.log(typeof(score));
console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);

// "33"=> 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn  = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1=> true; 0=>false
// ""=> false; "Raushan"=> true;

let someNumber = 22;
let stringNumber = String(someNumber);
console.log( typeof stringNumber);
