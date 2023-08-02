//arrays destructuring

let fruits = ["apple", "kiwi"]
let [a, b] = fruits
console.log(a, b)

//object destructuring

let user = {username: "samu", age: 34}
let {username, age} = user
console.log(username, age)

// spread operator

let person = {name: "samu", age:18}
let country = "COL"

let data = {id:1, ...person, country}
console.log(data)

//reto
let json1 = {
    name: "Mr. Michi",
    food: "Pescado"
}

let json2 = {
    age: 12,
    color: "Blanco"
}

function solution(json1 = {name: "Mr. Michi",
food: "Pescado"} , json2 = {age: 12,
color: "Blanco"}){

    return {...json1, ...json2}
    
}

console.log(solution(json1,json2))

