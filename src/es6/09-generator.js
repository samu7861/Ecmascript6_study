function* iterate(array){
    for(let value of array){
        yield value
    }
}

const it = iterate(["samui", "juan", "pedrito", "jen"])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)