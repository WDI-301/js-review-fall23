const arrMaker = require('./arrMaker')

let first, second, third;
[first, second, third] = ["Who's", "What's", "I don't know"]

// console.log('!@-------first, second, third-------@!')
// console.log(first, second, third)

let myArr = arrMaker(1,5,1)

let alpha, beta, charlie, delta, foxtrot;
[alpha, beta, charlie, delta, foxtrot] = myArr
// console.log('!@-------alpha, beta, charlie, delta, foxtrot-------@!')
// console.log(alpha, beta, charlie, delta, foxtrot)
[alpha, beta, charlie, delta, foxtrot] = myArr.map(element => {
    return {
        type: "Integer",
        value: element}
    })
// console.log('!@-------alpha, beta, charlie, delta, foxtrot-------@!')
// console.log(alpha, beta, charlie, delta, foxtrot)
// let newObj = {
//     name: 'alpha',
//     ...alpha
// }
// console.log(newObj);

const nameAdder = (name, obj) => {
    return {
        name: name,
        ...obj
    }

}
// console.log(nameAdder('Alpha', alpha))

//----- API Examnples --------
let username = {
    userId: 1,
    firstname: "Violet",
    lastname: "Dwyer"
}

let post = {
    userId: 1,
    postId: 1,
    title: "I'm baby affogato",
    post: "Narwhal slow-carb intelligentsia polaroid fingerstache. Art party flannel pug salvia roof party grailed tofu fanny pack. Cardigan thundercats poutine ugh. Lomo banh mi subway tile adaptogen quinoa fashion axe kogi chartreuse paleo, twee retro affogato blog blackbird spyplane. Franzen gentrify offal wolf, kale chips shaman cred cray pickled tacos."

}

const combineAPI = (username, post) => {
    return {
        ...username,
        ...post
    }
}
// console.log('!@-------combineAPI-------@!')
// console.log(combineAPI(username, post))

const makePost = (username, post) => {
    return {
        author: username.firstname + ' ' + username.lastname,
        title: post.title,
        post: post.post
    }
}

// console.log('!@-------makePost-------@!')
// console.log(makePost(username, post))


// ----- Creating Objects from Arrays


let pets = [
    'Mr. Bigglesworth','Cat',3,
    'Raphael','Turtle',15,
    'Dug','Dog',5,
    'Nymeria','Direwolf',7,
    'Toothless','Dragon',21  
]
let things = [
    'Herbie','VW Bug',50,
    'Hubble','Telescope',30,
    'GPS','Satellite',45,
    'Titan','Moon',4000000000,
    'Empire State Building','Skyscraper',70
]
let movies = [  
    'Everything, Everywhere, All at Once', 'The Daniels', 2022, 10,
    'Dune', 'Denis Villeneuve', 2021, 8,
    'Blade Runner 2049', 'Denis Villeneuve', 2019, 9
]

// Make a function that creates ojects out of the Arrays pets and things
// turns: 
//    'Mr. Bigglesworth','Cat',3
// into:
// {
//     name:'Mr. Bigglesworth',
//     type: 'Cat',
//     age: 3
// }

const objMaker = (arr) => {

    let returnArr = new Array
    
    // loop to break up the array into lengths of 3
    for (let index = 0; index < arr.length; index= index+3) {

        // create a new object out of the parts of the array
        returnArr.push({
            name: arr[index],
            type: arr[index+1],
            age: arr[index+2]
        })
        
    }  
    // return the new array of objects 
    return returnArr
}


// // both should work
// console.log(objMaker(pets)) //works
// console.log(objMaker(things)) //works
// console.log(objMaker(movies)) //doesn't work

const thingMaker = (name, type, age) => {
    // returns object for pets and things
    return {
        name: name,
        type: type,
        age: age
    }

}

const movieMaker = (title, director, year, rating) => {
    // returns object for movies
    return {
        title: title,
        director: director,
        year: year,
        rating: rating
    }
}

const breakerFunc = (arr, indexLength, callback) => {
    // function is for breaking up the array into defined lengths (from the params)
    // and uses the Maker callbacks to create an object out of that

    let returnArr = []

    // loop to break up the array into lengths of parameter indexLength
    for (let index = 0; index < arr.length; index = index + indexLength) {

        // create a new object, using the callback, out of the parts of the array 
        returnArr.push(callback(...arr.slice(index, index+indexLength)))  
    }

     //return the array of objects
     return returnArr
}

// console.log(breakerFunc(pets, 3, thingMaker));
// console.log(breakerFunc(things, 3, thingMaker));
// console.log(breakerFunc(movies, 4, movieMaker));

//----CSV-----

let petsCSV = [
    'Name','Species', 'Age', null, 
    'Mr. Bigglesworth','Cat',3,
    'Raphael','Turtle',15,
    'Dug','Dog',5,
    'Nymeria','Direwolf',7,
    'Toothless','Dragon',21  
]
let thingsCSV = [
    'Name','Type', 'Age', null, 
    'Herbie','VW Bug',50,
    'Hubble','Telescope',30,
    'GPS','Satellite',45,
    'Titan','Moon',4000000000,
    'Empire State Building','Skyscraper',70
]
let moviesCSV = [ 
    'Title', 'Director', 'Year',  'Rating', null, 
    'Everything, Everywhere, All at Once', 'The Daniels', 2022, 10,
    'Dune', 'Denis Villeneuve', 2021, 8,
    'Blade Runner 2049', 'Denis Villeneuve', 2019, 9
]


const objectMaker = (keyNames, values) => {
    // parameters:
    // keyNames = ['Name','Species', 'Age']
    // values=['Mr. Bigglesworth','Cat',3,]
    let returnObj = new Object
    // loop version
    // for (let index = 0; index < keyNames.length; index++) {
    //     returnObj = {
    //         ...returnObj,
    //         [keyNames[index]]: values[index]
    //        }
    // }

    // method version
    keyNames.forEach((element, index) => {
        returnObj = {
            ...returnObj,
            [element]: values[index]
        }
    })

    return returnObj

}

const breakerArrayFunc = (arr, callback) => {
    let returnArr = new Array
    
    // //find the indexLength using null
    let indexLength = arr.indexOf(null)
    // // console.log(indexLength)

    // //-------------Version 1------------------
    // // Array of Keynames
    // let keyNames = arr.slice(0, indexLength)
    // // console.log(keyNames)

    // // Array of Values
    // let valuesArr = arr.slice(indexLength+1)
    // // console.log(valuesArr);

    // // loop through the values array iterating by indexLength, and send to the callback
    // // sends both:
    // // 1) keyNames
    // // 2) section of array from index to indexLength

    // // if not using valueArr
    // // for (let index = indexLength+1; index < arr.length; index+=indexLength) {

    // for (let index = 0; index < valuesArr.length; index+=indexLength) {
    //     returnArr.push(callback(keyNames, valuesArr.slice(index, index+indexLength)))
    // }

    // ----------------Version 2-----------------
    // same results with just a single loop
    for (let index = indexLength + 1; index < arr.length; index+=indexLength) {
        returnArr.push(callback(arr.slice(0, indexLength), arr.slice(index, index+indexLength)))
    }


    return returnArr

}


console.log(breakerArrayFunc(petsCSV, objectMaker))
console.log(breakerArrayFunc(thingsCSV, objectMaker))
console.log(breakerArrayFunc(moviesCSV, objectMaker))