// ------------------------
//       Parameters 
//--------------------------
// https://www.w3schools.com/js/js_function_parameters.asp

const paramFunc = (param1, param2) => { // parameters
    return param1 + ' ' + param2
}
const paramHelloFunc = (world, hello) => { // parameters
    return world + ' ' + hello
}

//  --- parameters are all about placement order, not name
console.log(paramFunc("Hello", "World"))  // arguments
console.log(paramHelloFunc("Hello", "World"))  // arguments

const paramFunc3 = (param1="Hello", param2="Your", param3="World") => {
    return `${param1} ${param2} ${param3}`
}

// console.log(paramFunc3("Hello", undefined, "World"));
// console.log(paramFunc3("Hello", undefined, "World"));
// console.log(paramFunc3(undefined, undefined, "World"));
// console.log(paramFunc3(undefined, undefined, undefined));

console.log(paramFunc3());

// ----------------------------
//   ---- Rest Operator ----
// ---------------------------
// looks like the spread operator but in the parameters
// it will take any amount of passed arguements into the parameters and puts them in an array.

// const restOperator = (...params) => {
//     return params.join(' ')
// }

const restOperator2 = (param1, param2, ...params) => {
    return param1 + ' ' + param2 + ' ' + params.join(' ')
}

// console.log('!@-------2 params-------@!')
// console.log(restOperator("Hello", "World"))
// console.log('!@-------3 params-------@!')
// console.log(restOperator("Hello", "Your", "World"))
console.log('!@-------3 params-------@!')
console.log(restOperator2("Hello", "Your", "World", "Is", "Really", "Awesome"))





