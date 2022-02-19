// fuctional programming
// 1. Imperative & declarative writing
// 2. pure functions & their side effects
// 3. Mutability and Immutability
// 4. Higher order funtion->Map, filter, reduce and their polyfills
// ---------------------------------------
// 

// is the square of the number is even

//this is the  imperative way of writing the code
const x = 4
const xSquared = x* x;

let isEven;

if(xSquared % 2 ==0){
    isEven = true
}
else{
    isEven=false
}
console.log(isEven);


// now let us see the declarative way of writing the same
const isSquareEven = (x) =>((x*x) % 2 == 0? true: false)
console.log(isSquareEven(4))