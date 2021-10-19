//1.- funciones SIN parámetro!

function saludar(){
    //todo el código que quiero que tenga la función
    //puedo poner condicionales, bucles, etc, etc
    document.write("hola mundo");
}

// 2.- Funciones CON PARÁMETRO!!!
function saludo (nombre, apellido){
    document.write("<br>Hola mi nombre es: " + nombre + "y mi apellido es" + apellido)
}

//3.-¡¡Funciones que RETORNAN UN VALOR!!

/*function convertirDolaresAPesos(dolares){
    let pesosFinales = dolares * 185;
    console.log(pesosFinales);
    //el RETURN es LA ´ÚLTIMA línea de código de una función
    return pesosFinales



}*/

//Funciones EN FORMA DE FECHA =>
let  convertirDolaresAPesos = (dolares) => {
    let pesosFinales = dolares * 185;
    console.log(pesosFinales);
    //el RETURN es LA ´ÚLTIMA línea de código de una función
    return pesosFinales



}


// ¿Cómo INVOCAR o llamar una funcion???


//1.-INVOCAR Funciones sin parámetro!
saludar();

//2.- INVOCAR Funciones CON parámetro!
let nombreSolicitado = prompt("Ingrese un nombre");
let apellidoSolicitado = prompt ("Ingrese un apellido");

saludo(nombreSolicitado, apellidoSolicitado);
saludo("Lionel", "Messi");

//3.- INVOCAR Funciones que RETORNAN UN VALOR

let pesos = convertirDolaresAPesos(1000);

document.write("<br>Producto: Iphone X:" + pesos);
document.write("<br>Producto: xiaomi note:" + convertirDolaresAPesos(300));





