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

const fizzBuzzSwitch = (arr) => {
    return arr.map(element => {
        switch (true) {
            case (element % 5 === 0) && (element % 3 === 0):
                return 'FizzBuzz'
            case element % 5 === 0:
                return 'Buzz'
            case element % 3 === 0:
                return 'Fizz'
            default:
                return element

        }
    })
}

console.log(fizzBuzzSwitch(myArr))