//declaración
class User{

}
//instancia
//const newUser = new User()

class user{
    //constructor
    constructor(name){
        this.name = name
    }
    //métodos
    greeting(){
        return `${this.speak()} ${this.name}`
    }

    speak(){
        return "hello primito"
    }
}

const david = new user("david")
console.log(david.greeting())


//setter getter

class user {
    constructor(name, age){
        this.name = name
        this.age = age
    }

//métodos

    speak(){
        return "hello"
    }

    greeting(){
        return `${this.speak()} ${this.name}`
    }

//getter setter

    get uAge(){
        return this.age
    }

    set uAge(n){
        this.age=n
    }
}

const developer = new user("samu", 18)
console.log(developer.uAge)
console.log(developer.uAge = 20)