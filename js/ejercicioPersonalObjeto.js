//CREO LA CLASE

class JugadorBoca {
    constructor(paramNombre, paramApellido, paramDorsal){
        this.nombre = paramNombre;
        this.apellido = paramApellido;
        this.dorsal = paramDorsal;
    }

    mostrarDatosJugador(){
        document.write(`<br> Nombre del Jugador: ${this.nombre}
        <br> Apellido del Jugador: ${this.apellido}
        <br> Dorsal: ${this.dorsal} `)
    }

    get mostrarNombreJugador(){
        return this.nombre
    }

    set modificarNombreJugador(nuevoNombreJugador){
        this.nombre = nuevoNombreJugador

    }
}

//CREO LOS OBJETOS (O INSTANCIAR)

let schiavi = new JugadorBoca("Rolando", "Schiavi", 2);

console.log(schiavi);

schiavi.mostrarDatosJugador()

let palermo = new JugadorBoca("Martín", "Palermo", 9);

console.log(palermo);

palermo.mostrarDatosJugador()//INVOCAR AL MÉTOO PARA QUE LO MUESTRE POR PANTALLA CON EL DOCUMENT WRITE

//guardar objetos{} DENTRO de un Array[]

//1º Crear el Array[]
listaJugadoresBoca = [];

//2º Hacemos un push para cargar los objetos{} dentro del Array[]

listaJugadoresBoca.push(schiavi);
listaJugadoresBoca.push(palermo);

console.log(listaJugadoresBoca);

//CREAR UN BUCLE PARA RECORRER UN ARRAY [] en el cual pusimos un objeto{}

for (let i=0; i<listaJugadoresBoca.lenght;i++){
    console.log(listaJugadoresBoca[i]);
    listaJugadoresBoca[i].mostrarDatosJugador()

}

//MODIFICAR una propiedad de UN OBJETO{} creado a partir de una Clase

//get!!!! es para mostrar
document.write(`<h6>Nombre incompleto con get: ${schiavi.mostrarNombreJugador} </h6>`)

//set!!! es para MODIFICAR  propiedad de UN OBJETO{} creado a partir de una Clase

schiavi.modificarNombreJugador = "Rolando Carlos"

document.write(`<h6>Nombre modificado con set: ${schiavi.mostrarNombreJugador} </h6>`)


//¡¡¡¡¡¡HERENCIA!!!!!!

class ExJugadorBoca extends JugadorBoca{
    constructor(paramNombre, paramApellido, paramDorsal, paramEdadretiro, paramTitulos){
        super(paramNombre, paramApellido, paramDorsal, paramEdadretiro, paramTitulos);

        //agrego las NUEVAS propiedades
        this.edadRetiro = paramEdadretiro
        this.titulos = paramTitulos

        
    }

    mostrarDatosJugador(){
        document.write(`<br> Nombre del Jugador: ${this.nombre}
        <br> Apellido del Jugador: ${this.apellido}
        <br> Dorsal: ${this.dorsal} `)
    }


    mostrarDatosExJugador(){
        document.write(`<br> Edad de Retiro: ${this.edadRetiro} <br>Titulos: ${this.titulos}`)
    }
}

let battaglia = new ExJugadorBoca("Sebastián", "Battaglia", 5,34,20);

console.log(battaglia)

battaglia.mostrarDatosJugador()

battaglia.mostrarDatosExJugador()


