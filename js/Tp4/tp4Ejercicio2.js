/*Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.

Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/ 

let cuenta = {
    
        titular:"Alex",
        saldo: 0,
    
    ingresar:(cantidad)=>{  
        cuenta.saldo = cuenta.saldo + cantidad;

    },

    extraer: (montoExtraer)=>{
        cuenta.saldo = cuenta.saldo - montoExtraer;
    },

    informar:()=>{
        document.write('<br>Saldo actualizado: '+cuenta.saldo+'<br>');
    },

    descripcion: ()=>{
        document.write(`<br>Titular: ${cuenta.titular}  
        <br>Saldo: ${cuenta.saldo}`)
    }


}

 

console.log(cuenta);

cuenta.descripcion();

let cantidad = parseInt(prompt("Ingrese el valor a depositar"));

let montoExtraer = parseInt(prompt("Ingrese el monto a extraer"));

cuenta.ingresar(cantidad);

cuenta.extraer(montoExtraer);
cuenta.informar();


