function newUser(name, age, country){
    var name = name || "samu"
    var age = age || 18
    var country = country || "COL"
    console.log(name, age, country)
}

newUser()
newUser("juan", 34,"mx")


function newAdmin(name = "samu", age = 18, country = "COL"){
    console.log(name, age, country)
}

newAdmin()
newAdmin("juan", 17, "MX")