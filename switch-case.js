const arrMaker = require('./arrMaker')

let myArr = arrMaker(1,20,1)

// if the number is divisible by 3 return Fizz, by 5 return Buzz, if both FizzBuzz.
// and neither return the original number

const fizzBuzzIfStatement = (arr) => {
    return arr.map(element => {
        // if number divisible by 3&5
        if ( (element % 5 === 0) && (element % 3 === 0)) {
            return 'FizzBuzz'
        }
        // if number divisible by 5
        if (element % 5 === 0) {
            return 'Buzz'
        }

        // if number divisible by 3
        if (element % 3 === 0) {
            return 'Fizz'
        }

        return element
    })
}

// console.log(fizzBuzzIfStatement(myArr))

// const fizzBuzzSwitch = (arr) => {
//     return arr.map(element => {
//         switch (true) {
//             case (element % 5 === 0) && (element % 3 === 0):
//                 return 'FizzBuzz'
//             case element % 5 === 0:
//                 return 'Buzz'
//             case element % 3 === 0:
//                 return 'Fizz'
//             default:
//                 return element

//         }
//     })
// }
const fizzBuzzSwitch = (arr) => {
    return arr.map(element => {
        switch (0) {
            case element % 5 + element % 3 :
                return 'FizzBuzz'
            case element % 5:
                return 'Buzz'
            case element % 3:
                return 'Fizz'
            default:
                return element

        }
    })
}


console.log(fizzBuzzSwitch(myArr))

// ---- Fruit Challenge ----

let fruitArr = ["Banana", "Orange", "Avacado","Pear","Apple", "Mango", "Kiwi"]; 
// make a switch statement that returns four, five or six for number of letters in the word,
// or the original element if it does not match these lengths
// ['Six', 'Six', 'Avacado', 'Four', 'Five, 'Five', 'Four']

// let fruitSwitch = (arr) => {
//     return arr.map( e => {
//         switch (true) {
//             case e.length === 4:
//                 return 'Four'
//             case e.length === 5: 
//                 return 'Five'
//             case e.length === 6:
//                 return 'Six'
//             default:
//                 return e    
//         }
//     })
// }

// console.log(fruitSwitch(fruitArr));

let fruitSwitch2 = (arr) => {
    return arr.map( e => {
        switch (e.length) {
            case 4:
                return 'Four'
            case 5: 
                return 'Five'
            case 6:
                return 'Six'
            default:
                return e    
        }
    })
}
console.log(fruitSwitch2(fruitArr));