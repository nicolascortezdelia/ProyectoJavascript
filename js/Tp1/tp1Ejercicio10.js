let numero = parseInt (prompt("Ingrese un número"))

if ((numero % 2 )== 0 ||(numero % 3 )== 0 || (numero % 5 )== 0 || (numero % 7 )== 0  ){
    document.write("El número es divisible");
} 
else{
    document.write("El número no es divisible");
}