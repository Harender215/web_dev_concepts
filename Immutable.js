// Mutability vs Immutability
// Functional programming always suggest us the use the immutable code as mutability is vulnerable to errors 
const person1 = {
    name: 'Adam',
    Age : 25
}

const person2 = person1
console.log(person1)
console.log(person2)

person2.name = 'Steve'
//now when we try to chage the name of person2, it is also get changed at the person1
// so thats the problem our data it mutate