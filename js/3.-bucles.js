//document.write ("Elemento 1<br>");

/*Existen 3 bucles: 
1.- while

2.- do-while

3.- for
*/



/*1.-while*/ 


/*while(condicion logica) {
    todas las lineas de codigo que quiero que se repitan
}
PENSAR Condición lógica y ver CÓMO HACER QUE SE DETENGA.

*/


//CÓMO MOSTRAR UN ELEMENTO 50 VECES
//let contador = 1;

 //while (contador <= 50){
   // document.write ("Elemento " + contador + "<br>");
    //contador++; //= contador + 1;
//}


/*2.-do-while*/


/*hacer ... mientras (se cumpla la condición lógica)*/
/*

do{
    todas las lineas de código a ejecutar
    cambiar la condición
} while (condición lógica)

*/  

/*let cont = 20;

do {
    document.write ("Elemento " + cont + "<br>");
    cont--;//cont = cont -1
}while (cont >=1)
*/


/*3.-for*/ 

/*funciona igual que el While, solo tiene una diferencia de sintaxis*/

/*for (inicializar una variable; condición lógica; el cambio que quiero que tenga esa condición lógica -incrementar o decrementar el contenido de la variable-) 
{....

}

*/

for (let indice = 200; indice <= 100; indice++){
    document.write ("Elemento " + indice + "<br>");

}


