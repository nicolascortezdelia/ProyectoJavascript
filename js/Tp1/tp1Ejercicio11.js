let numero = parseInt (prompt("Ingrese un número"))

if ((numero % 2 )== 0 ){
    document.write("El número es divisible por 2");
} 
else
if((numero % 3 )== 0 ){
    document.write("el número es divisible por 3");
}
else
if((numero % 5)== 0 ){
    document.write("el número es divisible por 5");
}
else
if((numero % 7)== 0 ){
    document.write("el número es divisible por 7");
}
else{
    document.write("El número es no es divisible por ninguno");
}