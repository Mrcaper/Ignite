//there are three types of fuction
// 1. Name function
// 2. Anonymous function
// 3. Arrow function

// 1. Name function

//function to find even and odd number
function evenodd(a){
    if(a%a==0){
      return('number is even');
    }else{
        return('number is odd');
    }
}
console.log(evenodd(2));

// function to find square
function square(a){
    return(a*a);
}
console.log(square(3));

//function to do square root
function squareroot(number){
    let guess=number/2;
    for(let i=0;i<10;i++){
        guess=0.5*(guess+number/guess);
    }
    return guess;
}
console.log(squareroot(4));

// 2. Anonynomus function
// A function without name is called anonynomus function
let a=function(p1,p2){
    return p1+p2;
}
console.log(a(23,42));

// 3.Arrow function ( In this we can not use this keyword and argunment )
// A function without any name and function keyword is called arrow function
let b=()=>{
    return 30+67;
}
console.log(b());

