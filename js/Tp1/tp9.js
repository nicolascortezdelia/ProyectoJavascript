let frase = prompt ("Ingrese una Frase");

console.log (frase);
console.log (frase.length);
console.log (frase.charAt(1));
console.log (frase.toLowerCase)

frase = frase.toLowerCase();

// recorrer la "frase" con un bucle (while o for)
// recorrer hasta el fin del bucle---> frase.length
//if ----> preguntar si cada caracter es una vocal (frase.charAt (x)) == "a" || (frase.charAt (x)) == "e"

//mostrar con un document.write (X)


for (let i=0; i<(frase.length); i = i + 1){ //for (declaro variable i, asigno valor 0; condición lógica: programa va a funcionar MIENTRAS i sea menor que el número de caracteres; cuánto quiero que se vaya incrementando el valor de i)
    if(frase.charAt(i) == "a" || frase.charAt(i) == "e" || frase.charAt(i) == "i" || frase.charAt(i) == "o" || frase.charAt(i) == "u" || frase.charAt(i) == "á" || frase.charAt(i) == "é" || frase.charAt(i) == "í" ||  frase.charAt(i) == "ó" || frase.charAt(i) == "ú"){
        document.write (frase.charAt(i));
    }
}