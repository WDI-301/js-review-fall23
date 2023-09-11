const promiseFunc = () => {
    console.log("Not a Promise");
    new Promise((resolve, reject) => {
        let success = true
        if (success) {
            resolve('This is a fulfilled Promise')
        }
        reject('This is an Error / Rejection')
    }).then(resolve => console.log(resolve))
    .catch(error => console.log(error))
}

const promiseFunc2 = () => {
    console.log("Not a Promise2");
    new Promise((resolve, reject) => {
        let success = false
        if (success) {
            resolve('This is a fulfilled Promise2')
        }
        reject('This is an Error / Rejection2')
    }).then(res => console.log(res))
    .catch(err => console.log(err))
}

const asyncFunc = async () => {
    try {
        console.log('Not an  Async');
        let success = true
        if (success) {
            await console.log('This is an async/await success')
        } else {
            throw 'This is an async error'
        }
    } catch (err) {
        console.log(err);
    }
}


const promiseTryCatch = () =>
    new Promise((resolve, reject) => {
        setTimeout(()=> {
            try {
                resolve('This is a fulfilled Promise - Try/Catch')
            } catch (error) {
                reject('This is an Error / Rejection - Try/Catch')
            }  
            }, 1000)
        })




promiseFunc()
asyncFunc()
promiseFunc2()
promiseTryCatch()    
    .then(res => console.log(res))
    .catch(err=> console.log(err))
    .finally(console.log("Finally!!"))
