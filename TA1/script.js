const elTexto = document.getElementById("blabla");
const elNumero = document.getElementById("repeticiones");
const body = document.getElementsByTagName("body");
const button = document.getElementById("buton");

function repeatString(texto, repeticiones){
    for (let i = 0; i < repeticiones; i++){
        //console.log(texto);
        
        const newp = document.createElement("p");

        newp.textContent = texto;
        document.body.appendChild(newp);
        //body[0].appendChild(newp);
    }
}


button.addEventListener("click", () => {
    const ahorasieltexto = elTexto.value;
    const ahorasielnumero = parseInt(elNumero.value, 10);

    repeatString(ahorasieltexto, ahorasielnumero);
});

function removeFromArray(arreglo, item){
    for (let i = 0; i < arreglo.length; i++){
        if (arreglo[i] === item){
            arreglo.splice(i, 1);
        }
    }
    console.log(arreglo);
    return arreglo;
}

let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let item = 5;
removeFromArray(arreglo, item);


let books = [
    {
        title: 'Habia una vez',
        author: 'Desconocido',
        date : 2000,
    },
    {
        title: 'Truz',
        author: 'Coso',
        date : 2002,
    },
    {
        title: 'Cosa',
        author: 'Amigos',
        date : 2005,
    }
];


function getTheTitles(books){
    let titles = [];
    for (let i = 0; i < books.length; i++){
        titles.push(books[i].title);
        newHeader = document.createElement("h1");
        newHeader.textContent = books[i].title;
        body[0].appendChild(newHeader);
    }
    return titles;
}
getTheTitles(books);

function getOdds(nums){
    let oddNumbers = [];
    for (let i = 0; i < nums.length; i++){
        if (nums[i] % 2 !== 0){
            oddNumbers.push(nums[i]);
            newp = document.createElement("p");
            newp.textContent = nums[i];
            newp.style.color = "violet";
            newp.style.fontSize = "16px";
            body[0].appendChild(newp);
        
        }
    }
    return oddNumbers;
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
getOdds(nums);

function duplicates(nums){
    let duplicates = [];
    let count = 0;
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] === nums[j]){
                duplicates.push(nums[i]);
                count++;
            }
        }
    }
    newh4 = document.createElement("h4");
    newh4.textContent = duplicates;
    body[0].appendChild(newh4);

    newp = document.createElement("p");
    newp.textContent = count;
    body[0].appendChild(newp);
}

let nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
duplicates(nums2);