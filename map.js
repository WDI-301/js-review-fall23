// -------------------------------------------
//          Map
// -------------------------------------------
// https://www.w3schools.com/jsref/jsref_map.asp
//
//basic for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index]; 
// }

const arrMaker = (startNum=0, endNum=10, iterator=1) => {
    let newArr = new Array
    for (let index = startNum; index <= endNum; index = index + iterator) {
        newArr.push(index)
    }
    return newArr
}
let  myArr = arrMaker(1,15,1)
 console.log(myArr)

// Map method
// let newArray = oldArray.map(element => element +1)
console.log(myArr.map(e => e + 1))
// console.log(myArr.map((element, index, array) => element + index))
// console.log(myArr.map((e,i,a)=> e + a[i]))
// console.log(myArr.map((apple, orange, banana)=> apple + banana[orange]))

// -------------------------------------------
//          ForEach
// -------------------------------------------
// https://www.w3schools.com/jsref/jsref_foreach.asp
// just like map, it essential is a for loop that runs a function on each element of the array
// but unlike map it does not return a value.

console.log(myArr.forEach(element => console.log(element + 1)))  //undefined

let accumulator = 0
myArr.forEach(element => accumulator += element + 1) //undefined
console.log(accumulator);
