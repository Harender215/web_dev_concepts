// Mutability vs Immutability
// Functional programming always suggest us the use the immutable code as mutability is vulnerable to errors 
const person1 = {
    name: 'Adam',
    Age : 25
}

const person2 = person1
console.log(person1)
console.log(person2)

person2.name = Object.assign({}, person1)
person2.name = 'Steve'

//object.assign() takes two objects as argument, the first is empy object and the second is source object
