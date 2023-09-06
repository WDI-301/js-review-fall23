// const arrMaker = (startNum=0, endNum=10, iterator=1) => {
//     let newArr = new Array
//     for (let index = startNum; index <= endNum; index = index + iterator) {
//         newArr.push(index)
//     }
//     return newArr
// }

// module.exports = arrMaker



module.exports = (startNum=0, endNum=10, iterator=1) => {
        let newArr = new Array
        for (let index = startNum; index <= endNum; index = index + iterator) {
            newArr.push(index)
        }
        return newArr
    }
    
