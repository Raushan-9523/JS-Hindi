//singleton
// Object.create

const tinderuser = new Object();

tinderuser.id = 1;
tinderuser.name = "Sam";
// console.log(tinderuser);

const regularUser = {
    email:"rtr.ttl",
    fullName:{
        firstName:"Raushan",
        lastname:"Tiwari"
    }
};

// console.log(regularUser.fullName['lastname']);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};

// const obj3 = {...obj1,...obj2};

const obj3 = Object.assign({},obj1,obj2);

// console.log(obj3);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty("name"));

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name:"rtr.ttl",
    age:22,
    [mySym]:"myKey1",
    location:"Tata",
    isLoggedIn:false,
    lastLoginDays:["Monday","Friday"]
};

// console.log(JsUser[mySym]);
// console.log(JsUser['age']);

JsUser.age=24;
// console.log(JsUser);

// Object.freeze(JsUser); //freez the object

JsUser.age=28;

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

// console.log(JsUser.greetingTwo());

// Destructure

const course = {
    name:"JS in Hindi",
    price:999,
    Instructor:"Hitesh"
};

const {Instructor:Ins} = course;

console.log(Ins);

//API

// {
//     "name":"rtr.ttl",
//    " age":22,
// }

[
    {},{},{}
]