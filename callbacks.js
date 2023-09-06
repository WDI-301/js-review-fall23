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
const multiply = (param0, param1) => {
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