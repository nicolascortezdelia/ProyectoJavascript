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

class Contacto {
    constructor(paramNombreContacto, paramNumeroTelContacto){
        
        this.nombreConctacto = paramNombreContacto;
        this.numeroTelContacto = paramNumeroTelContacto;

    }
    
    mostrarContacto(){
        document.write(`<br> Nombre del Contacto: ${this.nombreConctacto}
    <br> Número del Contacto: ${this.numeroTelContacto}`)

    }

    get obtenerNombreContacto(){
        return this.nombreConctacto;
    }

    get obtenerTelContacto(){
        return this.numeroTelContacto;
    }

    set modificarNombreContacto(nuevoNombreContacto){
        this.nombreConctacto = nuevoNombreContacto
    }

    set modificarTelContacto(nuevoTelContacto){
        this.numeroTelContacto = nuevoTelContacto
    }

}


class Agenda {

//Se podrá crear de dos formas, indicándole nosotros el tamaño o con un tamaño por defecto (10).
    constructor(paramTamanio){
        this.contactos = [];//Una agenda de contactos está formada por un conjunto de contactos. 
        this.tamanio = paramTamanio

    }

    set modificarTamanio(cantidad){
        this.tamanio = cantidad;
    }

    aniadirContacto(contacto){
        //1.- ver si el contacto existe
        if (this.existeContacto(contacto)){
            console.log("Este contacto ya existe. No se puede agregar")
        }else {
            if(!this.agendaLlena()){
                this.contactos.push(contacto);
                console.log("Contacto añadido");
                this.listarContactos();
            }
        }

    }

    existeContacto(contacto){
        const exist = this.contactos.find((contactoExistente) => contactoExistente.nombreConctacto === contacto.nombreConctacto);

        if (exist){
            return true;
        } else {
            return false
        }
    }

    listarContactos(){
        for (let i = 0; i< this.contactos.length; i++){
            console.log(`Contacto: ${this.contactos[i].obtenerNombreContacto} Telefono: ${this.contactos[i].obtenerTelContacto}`)
        }
    }

    buscarContacto(contacto){
        const encontrado = this.contactos.find
        ((existentes) => existentes.nombreConctacto === contacto);

        if(encontrado){
            console.log("contacto encontrado");
        } else {
            console.log("Este contacto no existe")
        }

    }

    eliminarContacto(contacto){
        let contactosFiltrados = this.contactos.filter(
            (contactoExistente) => contactoExistente.nombreConctacto != contacto.nombreConctacto
        )
        console.log("contactos que deberían quedar" + contactosFiltrados);
    }

    agendaLlena(){
        if (this.contactos.length === this.tamanio){
            console.log("Agenda Llena")
        } else {
            console.log("Aún queda espacio en la Agenda");
            return false;
        }

        
    }

    huecosLibres(){
        let cantidadEspacios = this.tamanio - this.contactos.length;
        console.log("Cantidad de espacio disponible:" + cantidadEspacios);
            
    }

    


}

let agendaPrueba = new Agenda (10);

do {
    let opcion = parseInt(
        prompt("Seleccione una opción: 1.- Agregar contacto, 2.- cambiar tamañno de agenda 3.- Listar contactos 4.- Buscar contacto")
    );

    switch(opcion){
        case 1:
            //agregar contacto solo si la agenda tiene huecos libres
        agendaPrueba.huecosLibres();

        let nombre = prompt("Ingrese un nombre");
        let telefono = prompt("Ingrese un telefono");
        let nuevoContacto = new Contacto(nombre, telefono);

        agendaPrueba.aniadirContacto(nuevoContacto);
        break;

        case 2:
            //cambiar tamaño
            let nuevoTamanio = parseInt(
                prompt("Ingrese la cantidad de contactos que desea tener")
            );

            agendaPrueba.modificarTamanio = nuevoTamanio;
            console.log("Tamaño de la agenda modificado, cantidad actual:" + nuevoTamanio);
        break;

        case 3: 
        //listar contactos
        agendaPrueba.listarContactos();
        break;

        case 4:
            //buscar contacto
            let contactoBuscado = prompt("Ingrese el nombre que busca");
            agendaPrueba.buscarContacto(contactoBuscado);



    }
} while (confirm("¿Quiere realizar otra operación?"));


//let batistuta = new Contacto("El Bati", 123)

//let spidey = new Contacto ("Spider-Man", 567)

//agenda = [];




