const body = document.getElementsByTagName("body");


function sumAll(from, to){
    let sum = 0;
    for(let i = from; i <= to; i++){
        sum += i;
    }
    newP = document.createElement("p");
    newP.textContent = "El resultado de la suma de todos los números entre "+from+" y "+to+" es "+sum;
    body[0].appendChild(newP);
    return sum;
}

const botonCalcular = document.getElementById("calcular");
botonCalcular.addEventListener("click", () => {
    const from = parseInt(document.getElementById("primerNum").value, 10);
    const to = parseInt(document.getElementById("segundoNum").value, 10);
    sumAll(from, to);
});


function convertToCelsius(fahrenheit){
    const celsius = ((fahrenheit - 32) * 5/9).toFixed(1);
    newP = document.createElement("p");
    newP.textContent = fahrenheit+" grados Fahrenheit son "+celsius+" grados Celsius";
    body[0].appendChild(newP);
    return celsius;
}

const botonConvertir = document.getElementById("convertir");
botonConvertir.addEventListener("click", () => {
    const fahrenheit = parseInt(document.getElementById("fahrenheit").value, 10);
    convertToCelsius(fahrenheit);
});

function convertToFahrenheit(celsius){
    const fahrenheit = (celsius * 9/5 + 32).toFixed(1);
    newP = document.createElement("p");
    newP.textContent = celsius+" grados Celsius son "+fahrenheit+" grados Fahrenheit";
    body[0].appendChild(newP);
    return fahrenheit;
}

const botonConvertir2 = document.getElementById("convertir2");
botonConvertir2.addEventListener("click", () => {
    const celsius = parseInt(document.getElementById("celsius").value, 10);
    convertToFahrenheit(celsius);
});

function leapYear(año){
    if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0){
        newP = document.createElement("p");
        newP.textContent = año+" es un año bisiesto";
        body[0].appendChild(newP);
        return true;
    } else {
        newP = document.createElement("p");
        newP.textContent = año+" no es un año bisiesto";
        body[0].appendChild(newP);
        return false;
    }
}

const botonBisiesto = document.getElementById("bisiestoBoton");
botonBisiesto.addEventListener("click", () => {
    const año = parseInt(document.getElementById("bisiesto").value, 10);
    leapYear(año);
});

function getSum(nums){
    let sum = 0;
    for (let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    console.log("La suma de los números en el arreglo es "+sum);
    return sum;
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
getSum(nums);
