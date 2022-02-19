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

//impure function
//for same value of b we may get different value from the function if a varies

let a = 4
function addNum(b)
{
    console.log('the sum is', a+b)
}
addNum(2)

//Pure function
//for same value of the argument the pure function always return the same answer
//i.e the answer does not depens on any external factor like a in the perious case
function addNum1(a, b)
{
    console.log('The sum is ', a + b)// we are addding console.log to get our answer so it a side effect
}
addNum1(2, 3)


function addNum2(a, b)
{
    return a+b; // we remove the die 
}

console.log(addNum2(2, 3))