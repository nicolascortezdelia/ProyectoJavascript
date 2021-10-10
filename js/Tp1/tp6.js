let numero1 = parseInt(prompt ("Ingrese un primer número")) 
let numero2 = parseInt(prompt ("Ingrese un segundo número")) 

console.log(numero1)
console.log(numero2)

if(numero1>numero2){
    document.write ("El primer número es el mayor" + numero1);
}else
if(numero1 == numero2){
    document.write("Los números son iguales");
}
else{
    document.write("El segundo número es el mayor" + numero2);
}