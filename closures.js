// ----------------------------
//   ---- Closures ----
// ---------------------------
// how scope works for enclosing functions
// https://www.w3schools.com/js/js_function_closures.asp

let globalVar = "Global"


console.log('-----------------------Local Scope------------------------------');
// variable a is local for each scope
const closureFuncLocal = () => {
    let a = 'initial'

    const innerFunc = () => {
        let a = 'inner'
        console.log('!@-------innerLocal-------@!')
        console.log(a)
    }
    innerFunc()
    // console.log(globalVar);
    console.log('!@-------outerLocal-------@!')
    console.log(a);
}

closureFuncLocal()

console.log('--------------------------Parameters-------------------------------------');
// a is not being modified by scope, the value is passed as an arguement when the function is invoked, 
// and is then available as a parameter in the inner function
const paramFunc = () => {
    let a = 'initial'
    const innerFunc = (a) => {
        // a = 'inner'
        console.log('!@-------innerLocal-------@!')
        console.log(a)
    }
    innerFunc(a)
    a = 'outer'
    // console.log(globalVar);
    console.log('!@-------outerLocal-------@!')
    console.log(a);
}

paramFunc()

console.log('--------------------------Closures-------------------------------------');
const closureFunc = () => {
    let a = 'initial'
    
    const innerFunc = () => {
        a = 'inner'
        console.log('!@-------innerScope-------@!')
        console.log(a)
    }
    innerFunc()

    console.log('!@-------outerScope-------@!')
    console.log(a);
}
closureFunc()
