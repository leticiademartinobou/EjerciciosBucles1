
//Crea una variable con una cesta de la compra que contenga al menos 5 elementos (invéntalos. Ej: lentejas).

let cestaCompra = ["arroz", "judias", "lentejas", "pollo", "atún"];

 //Utilizando un bucle, muestra por pantalla un mensaje por cada elemento de la cesta de la compra, con la siguiente estructura: La cesta de la compra contiene: ___________

for(let i=0; i<cestaCompra.length; i++) {
    console.log("La cesta de la compra contiene: " + cestaCompra[i]);
}



function arbol(asteriscos) {
    for(let i=0; i <= asteriscos; i++) {
        let piso = '';
        for(j = 0; j <= i; j++) {
            piso = piso + "*";
        }
        console.log(piso);
    }
}

arbol(5);

//Con prompt

let asteriscos = Number(prompt("¿Cuántas filas tendrá el árbol"))

function arbol(asteriscos) {
    
    for(let i=0; i <= asteriscos; i++) {
        let piso = '';
        for(j = 0; j <= i; j++) {
            piso = piso + "*";
        }
        console.log(piso);
    }
}


arbol(asteriscos);



//Consigue que, en lugar de medio árbol, se pinte el árbol entero:


function arbol(asteriscos) 
{
    for (let i = 0; i < asteriscos; i++) {
        let piso = '';
        for(let j = 0; j < asteriscos - i; j++) {
            piso = piso + ' ';}
        for(let k = 0; k <= i; k++) {
            piso = piso + '* ';}
        console.log(piso);
    }
}
arbol(5);































