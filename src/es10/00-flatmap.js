const array = [1,2,[3,4,5],6]
console.log(array.flat(2))

//flatmap

const array2 = [1,2,3,4,5,6,7]
console.log(array2.flatMap(v=>[v, v*2]))


