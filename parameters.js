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

