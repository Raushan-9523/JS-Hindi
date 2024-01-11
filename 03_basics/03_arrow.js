const user = {name:"rtr.ttl",price:199,welcomeMessage:function(){
    // console.log(`${this.name} welcome to website`);
    // console.log(this);
}}


user.welcomeMessage();

user.name = "Sam";
user.welcomeMessage();

// console.log(this);

// function chai(){
//     let user = "Ram";
//     console.log(this.user);
// }
// chai();

// let  chai = function(){
//     let user = "Ram";
//   console.log(this.user);
// }
// chai();

let chai=()=>{
    let user = "Ram";
    console.log(this);
}

// chai();

// let sum = (n1,n2)=>{
//     return n1+n2;
// }

// let sum =(n1,n2)=>n1+n2;
 let sum =(n1,n2)=>({god:"Ram"});

 // Immediately Invoked Function Expressions (IIFE)

 //--> jo function Immediately execute ho jaye 
// --> Global scope ke poulation se problem hoti hai kai baar 
// isliye global scope variable ya declarion ke poulation ko htane ke liye IIFE ka use kiya

(function(){
    console.log(`DB Connected`);
})();

((name)=>{
    console.log(`DB connected ${name}`);
})("Ram");

(function chai(){
    //Named IIFE
    console.log("named iife");
})();