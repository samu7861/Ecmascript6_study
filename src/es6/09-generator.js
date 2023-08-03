function* iterate(array){
    for(let value of array){
        yield value
    }
}

const it = iterate(["samui", "juan", "pedrito", "jen"])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)


//ejercicio
function* getId() {
    // Tu código aquí 👈
    let catID = 0
    while (true) {
      yield catID++
    }
  }