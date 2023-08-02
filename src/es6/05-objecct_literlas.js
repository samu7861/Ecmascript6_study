//enhaced onject literals

function newUser(user, age, country, uid){
    return{
        user,
        age,
        country,
        id: uid
    }
}

console.log(newUser("samu", 18, "COL", 1))