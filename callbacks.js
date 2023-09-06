// ----------------------------
//   ---- Callbacks ----
// ---------------------------
// a function that is passed as an argument to another function.
// https://www.w3schools.com/js/js_callback.asp


let total = 0

function add(param0, param1=1) {
    let total = param0 + param1
    return total
}
// console.log(add(5,5))
function subtract(param0, param1) {
    return param0 - param1
}
// console.log(subtract(10,5))
const multiply = (param0, param1=param0) => {
    return param0 * param1
}
// console.log(multiply(5,5))

const calculate = (param0, param1, callbackFunc) => {
    return callbackFunc(param0, param1)
}

console.log(calculate(5,5,multiply))
console.log(calculate(5,5,add))
console.log(total = calculate(total,undefined,add))
console.log(total = calculate(total,undefined,add))
console.log(total = calculate(total,undefined,add))

// double, multiply by 2
const doubler = (param) => {
   return calculate(param, 2, multiply)
}
console.log(doubler(6))

// ---------------------exercise--------------------
// recreate the map method using callbacks.
// the only array method you should use is push
// map takes and array, performs a function on each element of the array, and returns the result to a new array
let myArr = [1,2,3,4,5]

//create map function

const myMapper = (array, callback, unicorn) => {  //fill in the params

    let returnArr = new Array  // = []

    //For loop
    // 1) iterate through the original Array passed in the params
    // 2) apply a callback to each element of the array
    for (let index = 0; index < array.length; index++) {
        const element = array[index]; 
        returnArr.push(callback(element, unicorn))
    }

    //retrun the new Array
    return returnArr
}

// const myNewArr = myMapper(myArr, (
//     (element) => {
//     return element + 1
// }))

const myNewArr = myMapper(myArr, (element => element + 1))
console.log('!@-------MyMapper-------@!')
console.log(myNewArr) // [2,3,4,5,6]

// bonus
// can you modify your functino so that the folowing works
// const myBonusArr = myMapper(myArr, add)
// console.log('!@-------BonusArr-------@!')
// console.log(myBonusArr) // [2,3,4,5,6]
const myBonusArr = myMapper(myArr, add, 2)
console.log('!@-------BonusArr-------@!')
console.log(myBonusArr) // [3,4,5,6,7]



