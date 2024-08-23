const body = document.getElementsByTagName("body");

function generatePassword(length){
    const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minus = "abcdefghijklmnopqrstuvwxyz";
    const nums = "0123456789";
    const symbols = "!@#$%^&*()_+";
    let password = "";
    while (password.length < length || password.length < 8){
        password += mayus.charAt(Math.floor(Math.random() * mayus.length));
        password += minus.charAt(Math.floor(Math.random() * minus.length));
        password += nums.charAt(Math.floor(Math.random() * nums.length));
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    newP = document.createElement("p");
    newP.textContent = "Su contraseña es "+password;
    body[0].appendChild(newP);
    return password;
}

const botonPassword = document.getElementById("generar");
botonPassword.addEventListener("click", () => {
    const length = parseInt(document.getElementById("largoContra").value, 10);
    generatePassword(length);
});


function findTheOldest(people){
    let oldestPerson = people[0];
    for (let i = 0; i < people.length; i++){
        const person = people[i];
        const age = person.age;
        if (age > oldestPerson.age){
            oldestPerson = person;
        }
    }
    newP = document.createElement("p");
    newP.textContent = "La persona más vieja es "+oldestPerson.name;
    body[0].appendChild(newP);
    return oldestPerson;
}

window.onload = function() {
    let people = [
        {
            name : 'Carolina',
            age : 32,
        },
        {
            name : 'Juan',
            age : 25,
        },
        {
            name : 'Pedro',
            age : 45,
        }
        ,{
            name : 'Maria',
            age : 55,
        }
        ,{
            name : 'Jose',
            age : 65,
        }
        ,{
            name : 'Luis',
            age : 75,
        }
    ];
    findTheOldest(people);
};

