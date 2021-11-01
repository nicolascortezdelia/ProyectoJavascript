/*Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. 

Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. 

Se podrá crear de dos formas, indicándole nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar mas contactos indicar por pantalla.
existeContacto(Conctacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades.
*/ 

class Contactos {
    constructor(paramNombreContacto, paramNumeroTelContacto){
        
        this.nombreConctacto = paramNombreContacto;
        this.numeroTelContacto = paramNumeroTelContacto;

    }
    
    mostrarContacto(){
        document.write(`<br> Nombre del Contacto: ${this.nombreConctacto}
    <br> Número del Contacto: ${this.numeroTelContacto}`)

    }
}

let batistuta = new Contactos("El Bati", 123)

let spidey = new Contactos ("Spider-Man", 567)

agenda = [];

//crear clase agenda y con esto crear objetos agenda
//hacer método o función que diga que el método 


