//declaración
class User{

}
//instancia
//const newUser = new User()

class user{
    //constructor
    constructor(){
        console.log("Nuevo usuario")
    }
    //métodos
    greeting(){
        return "hello"
    }
}

const gndx = new user()
console.log(gndx.greeting())