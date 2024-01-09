function sum(num1,num2){
    // console.log(num1+num2);

    return num1+ num2;
}

const result = sum(3,4);

// console.log(result);

function loginUserMessage(username){
    return `${username} just logged in`;
}

// console.log(loginUserMessage('rtr.ttl'));

function calculateCartPrice(n1,n2,...num1){
    return num1;
}

// console.log(calculateCartPrice(100,200,300,400));

const user={name:"hitesh",price:199};

function handleObject(anyObject){
 console.log(`User Name is ${anyObject.name} and price ${anyObject.price}`);
}

handleObject({name:"hitesh",price:199});