const arrMaker = require('./arrMaker')

// ----------------------------
//   ---- Reduce ----
// ---------------------------
// reduces all values in an array to a single value
//
// https://www.w3schools.com/jsref/jsref_reduce.asp

let myArr = arrMaker(1,5,1)

const reduceFunc = (array, callback, initialValue = 0) => {
     let accumulator = initialValue;
     for (let index = 0; index < array.length; index++) {
        const element = array[index];
        accumulator += callback(element)
     }
     return accumulator
}
console.log(reduceFunc(myArr,(element => element)));

const reduceArr = myArr.reduce((accumulator, element) => accumulator += element)
const reduceArrIntialValue = myArr.reduce(((accumulator, element) => accumulator += element),10)
console.log(reduceArr)
console.log(reduceArrIntialValue)


const cartArr = [
    {
        name: 'candy',
        quantity: 2,
        price: 3
    },
    {
        name: 'soda',
        quantity: 3,
        price: 5
    },
    {
        name: 'popcorn',
        quantity: 1,
        price: 10
    }
]

const reducePrice = cartArr.reduce(((accumulator, element) => accumulator += element.price),0)
console.log('!@-------reducePrice-------@!')
console.log(reducePrice)

const cartTotal = cartArr.reduce(((accumulator, element) => accumulator += element.price * element.quantity),0)
console.log('!@-------cartTotal-------@!')
console.log(cartTotal)

