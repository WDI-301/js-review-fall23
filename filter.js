const arrMaker = require('./arrMaker')

// -------------------------------------------
//         Filter
// -------------------------------------------
// https://www.w3schools.com/jsref/jsref_filter.asp

// filter iterates through every element in the array, like map, 
// however it only returns the element to the new array if it passes the conditional statement


let myArr = arrMaker(1,15,1)
console.log(myArr)

//Filter: manual version
// let newArr = new Array
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     if (element === 5 ) {
//         newArr.push(element)
//     }
// }
// console.log(newArr);

// Filter: Callback Version
const filterFunc = (array, callback) => {
    let returnArr = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (callback) {
            returnArr.push(element)
        }
    }
    return returnArr
}

