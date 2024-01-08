// array

const myArray = [0,2,3,4,5,6,7,88,9];

const myHeros = ["shaktiman","nagraj"];

const myArr2=new Array(1,2,3,4,5,6);
// console.log(myArr2[2]);

// Array Methods

// myArr2.push(10);
// myArr2.pop();

// myArr2.unshift(9);  //insert 1st position
// myArr2.shift();   // pop from 1st position
// console.log(myArr2);

// console.log(myArr2.includes(5));
// console.log(myArr2.indexOf(5));

// const mewArr = myArr2.join();

// console.log(myArr2);
// console.log(typeof mewArr);

// slice , splice

// console.log("A",myArr2);

// const myn1 = myArr2.slice(1,3);

// console.log(myArr2);
// console.log(myn1);

// const myn2 = myArr2.splice(1,3);
// console.log("B",myArr2);
// console.log(myn2);

const marvelHeros =["thor","IronMan","Spiderman"];

const dcHeros = ["Superman","flash","Batman"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);

// const newHeros = marvelHeros.concat(dcHeros);
// console.log(newHeros);

const newHeros = [...marvelHeros,...dcHeros];
// console.log(newHeros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const realArray = anotherArray.flat(Infinity);
// console.log(realArray);

// console.log(Array.isArray("Raushan"));
// console.log(Array.from("Raushan")); // convert array

// console.log(Array.from({name:"rtr.ttl"})); // intereting

const num1 = 100;
const num2 = 200;
const num3 = 300;
console.log(Array.of(num1,num2,num3));

