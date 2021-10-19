// Cómo crear un arreglo con datos?
let series = ["Juego del Calamar", "Loki", "Frozen", 2, true];

//Cómo crear un Arreglo vacío
let temporadas = [];

//cómo mostrar un valor de un arreglo

document.write (series[0]);

//cómo saber cuántos elementos tiene el Arreglo?

console.log (series.length);

//cómo recorrer elemento por elemento un Arreglo
for(let posicion = 0; posicion < series.length ; posicion++){
    document.write("<br>" +series[posicion]);
}

// cómo agregar un elemento al Final de un arreglo

series.push("Breaking Bad");

document.write("<br><b>Arreglo series con nuevo Elemento</b><br><hr>");

for(let posicion = 0; posicion < series.length ; posicion++){
    document.write("<br>" +series[posicion]);
}


//Cómo agregar un Elemento en una posición particular

series.splice(1, 0, "GOT");// (posición elemento, cantidad de elementos a borrar, el elemento a agregar)

document.write("<br><b>Arreglo series con nuevo Elemento en una Posición particular</b><br><hr>");

for(let posicion = 0; posicion < series.length ; posicion++){
    document.write("<br>" +series[posicion]);
}



//Cómo eliminar un elemento de un Arreglo?

series.splice (5,1,); //(posición del elemento, cantidad de elementos a borrar)
// si pongo: series.splice (5) BORRO TODO desde el elemento 5

document.write("<br><b>ELIMINAR un elemento de una Posición particular</b><br><hr>");

for(let posicion = 0; posicion < series.length ; posicion++){
    document.write("<br>" +series[posicion]);
}

//Cómo cambiar el valor de un Arreglo

series[4] = "Friends";
mostrarArreglo("Cambiar el valor de un elemento de un Arreglo");
for(let posicion = 0; posicion < series.length ; posicion++){
    document.write("<br>" +series[posicion]);
}


function mostrarArreglo(titulo){
    document.write("<br><b>"+titulo+"</b><br><hr>");

for(let posicion = 0; posicion < series.length ; posicion++){
    document.write("<br>" +series[posicion]);
}

}
