const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(()=>resolve("AsynC!!"), 2000)
        : reject(new Error("Error!"))
    })
}

const anotherFunction = async () => {
    const something = await fnAsync()
    console.log(something)
    console.log("hello")
}

console.log("before")

anotherFunction()

console.log("after")