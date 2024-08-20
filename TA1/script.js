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