// // console.log("hello world");

// // let edad = prompt("¿Cuántos años tienes?");

// // if(Number(edad) == edad) {
// //         if (edad > 18) {
// //             document.write("Puedes conducir");
// //         } 
    
// //     } else {
// //         alert("No puedes conducir");
// //     }


// // // PIDE POR TECLADO LA EDAD
// // var edad = prompt("Introduce tu edad");
// // // COMPRUEBA QUE LO INTRODUCIDO ES UN NÚMERO
// // if (Number(edad) == edad) {
// //     // SI ES MAYOR DE 18
// //     if (edad > 18) {
// //         // IMPRIME EN PANTALLA EL MENSAJE
// //         document.write("Puedes conducir");
// //     }
// // }
// // // SI NÓ    
// // else {
// //     // MUESTRA UN MENSAJE
// //     alert("Introduce un numero válido");
// // }

// // do {
// //     let nota = prompt("qué nota tienes?");
// //     if(Number(nota) == nota) {
// //     if (nota > 0 && nota <= 10){
// //         if (nota < 3) {
// //             alert("muy deficiente");
// //         } else if (nota < 5) {
// //             alert("insuficiente");
// //         } else if (nota < 6) {
// //             alert("suficiente");
// //         } else if (nota < 9) {
// //             alert("Notable");
// //         }
// //     }

// //     } else {
// //         alert("número erróneo");
// //     }

// // } while (nota != undefined);


// // let resultado = "";

// // do {
// //     let cadena = prompt("introduce una cadena");
// //     if(resultado= "") {
// //         resultado = resultado + cadena;
// //     } else {
// //         resultado = resultado + "-" + cadena;
// //     }
// // } while (confirm("desea seguir?"));



// // let suma = 0;

// // do {
// //     let numero = prompt("suma de números");
// //     if (Number(numero) = numero) {
// //         numero = Number(numero);
// //         suma = suma + numero;
// //     }
// //     else {
// //         if (numero != undefined) {
// //             alert(numero + "No es un número");
// //         }
// //     }
// // } while (numero != undefined);
// // document.write(suma);


// // let = rep,i;

// // for (i = 1; i <=30 ; i++ ){
// //     for (rep=0; rep <i; rep++)
// // }


// // for (let i=1; i <= 500; i++) {
// //     if(i % 4 == 0) {
// //         document.write("múltiplo de 4");
// //     }
// //     if(i % 9 == 0) {
// //         document.write("múltiplo de 9");
// //     }
// //     if(i % 5 == 0) {
// // //         document.write("<hr>")
// // //     }
// // // }

// // let nombre1 = prompt("Nombre 1:");
// // let edad1 = Number(prompt("edad1:"));

// // let nombre2 = prompt("nombre2");
// // let edad2 = Number(prompt("edad2"));

// // let nombre3 = prompt("nombre3");
// // let edad3 = Number(prompt("edad3"));

// // let maximo = Math.max(edad1, edad2, edad3);

// // if (maximo == edad1) {

// //     document.write("el mayor es" + nombre1);
// // }
// // if (maximo == edad2) {
// //     document.write("el mayor es" + nombre2);
// // }
// // if (maximo == edad3) {
// //     document.write("el mayor es" + nombre3);
// // }




// // let num = Math.floor((Math.random() * 99) + 1);




// var cadena = prompt("Introduce una cadena de texto");

// for(i=0; cadena.length; i++) {
//     let caracter = cadena.charAt(i):
//     if(i == cadena.length -1) {
//         document.write(caracter);
//     }
//     else {
//         document.write(caracter + "-");
//     }
// }




// for(let i=1; i<=30; i++) {
//     for(rep = 0; rep <i; rep++) {
//         document.write(i);
//     }
//     document.write("<br>");
// }



// let numrep = prompt("introduce un número");

// if (Number(numrep) = numrep) {
//     if(numrep>0 && numrep <=50) {
//         for(let i= numrep; i >=1; i--) {
//             for(let rep =1; rep >= 1; rep--) {
//                 document.write(i);
//             }
//         }
//     }
//     else{
//         alert("el número no es válido");
//     }

// }else("no has introducido un número");

// for(let i=1; i<=500; i++) {
//     document.write(i);
//     if(i % 4 == 0) {
//         document.write("múltiplo de 4");
//     }
//     if(i % 9 == 0) {
//         document.write("múltiplo de 9");
//     }
// }

// let nombre1 = prompt("nombre 1");
// let edad1 = prompt("edad1");

// let nombre2 = prompt("nombre 2");
// let edad2 = prompt("edad2");

// let maximo= Math.max(edad1,edad2);

// if (maximo == edad1) {
//     document.write("el mayor es " + nombre1);
// }
// if (maximo == edad2) {
//     document.write("el mayor es" + nombre2);
// }

// let num = Math.floor((Math.random()* 99) + 1);

// let texto = prompt("introduce un texto");

// document.write("TEXTO; " texto.toUpperCase() + ".");


// let cadena = prompt("introduce una cadena de texto");

// for(let i=0; i< cadena.length; i++); {
//     let caracter = cadena.charAt(i);
//     if(i == cadena.length -1) {
//         document.write caracter
//     }
//     else {
//         document.write(caracter +"-");
//     }
// }


// let cadena = prompt("introduce una cadena de texto");

// for(let i =0; i< cadena.length; i++) {
//     let vocales = cadena.charAt;
//     if((vocales =="A") || (vocales == "E") || (vocales =="I") ||) {
//         let contador++
//     }

// }

// function reverseString (rev) {
//     let separateWord = rev.split("");
//     let reverseWord = separateWord.reverse();
//     let joinWord = reverseWord.join("");
//     return joinWord;
// };
// joinWord = "Hola";

// console.log(joinWord);

// function devuelvePi() {
//     let devolver = (Math.PI).toFixed(2);
//     return devolver;
// }
// document.write(devuelvePi());

// function letraDNI(numero) {
//     if((numero > 9999999) && (numero > 100000000)) {
//         let indice = numero % 23;
// //         let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
// //         let letra = letras.charAt(indice);
// //     }
// //     return letra;
// // }





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































