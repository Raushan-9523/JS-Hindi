// array specific loop

// for of

// const arr = [1,2,3,4,5,5,66]
// for (const val of arr){
//     console.log(val);
// }

//map

// The Map object holds key-value pairs and remembers the original insertion order of the keys. 
// Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map();

map.set("a",1);
map.set("b",2);

for (const [key,value] of map) {
    //  console.log(key,value);
}

// object loop through for in loop
const myObject = {gm1:"USA",gm2:"INDIA"};

for (const key in myObject) {
    // console.log(key,myObject[key]);
}

// for in loop Array

let arr2 =["JS","JAVA","CPP","PYTHON","C"];
for (const key in arr2) {
//    console.log(key,arr2[key]);
}

// foreach loop

const lang = ["JS","JAVA","CPP","PYTHON","C"];

lang.forEach(function(item){
    // console.log(item);
})
lang.forEach((item)=>{
    // console.log(item);
})

function printMe(item){
    // console.log(item);
}

lang.forEach(printMe);

lang.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
});

const myLang = [
    {
    lang:"Javascript",
    short:"JS"
   },
   {
    lang:"Java",
    short:"Java"
   },
   {
    lang:"Python",
    short:"PY"
   },
];

myLang.forEach((item)=>{
   // console.log(item);
})

//foreach loop return nhi krta kuch v
const val = lang.forEach((item)=>{
    return item;
})

// console.log(val);

//filter

const nums = [1,2,3,4,5,6,7,8,9,10];

const newNums = nums.filter((num)=> num<5);
// console.log(newNums);

// scope start krne pr return likhna hi hoga
// const newNums2 = nums.filter((num)=>{
//     return num >4;
// })
// console.log(newNums2);


// Array.reduce()

const arr = [1,2,3,4,5,6,7,8,9];
const result = arr.reduce((acc,currVal)=>(acc+currVal),0);

console.log(result);