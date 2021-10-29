// cómo CREAR una CLASE???


//nombre, apellido, email, edad, domicilio
class Persona {
    //primer método a crear= MÉTODO CONSTRUCTOR, 
    //su misión es CREAR objetos
    constructor(paramNombre, apellido, email, edad, direccion, fotoPerfil, dni)//estos son los PARÁMETROS de la función "Método constructor"
    {
        //construir las propiedades
        //this: ESTE objeto . "nombre de la clave" = el valor de esa clave va a ser el parámetro "nombre"""
        this.nombre = paramNombre;
        this.fotoPerfil = fotoPerfil;
        this.apellido = apellido;
        this.email = email;
        this.edad = edad;
        this.direccion = direccion;
        this.dni= dni;
        this.estado= true;//parametro por defecto. el resto de los datos se completan por parámetro


    }

    //agregar los métodos
    mostrarDatos(){//un método sin parámetro porque, en este caso, no recibirá datos de afuera
        
        //la forma vieja que hacíamos siempre ---->document.write("<br>Nombre: "+ this.nombre + "<br>Apellido: "+ this.apellido)
        document.write(`<br>Nombre: ${this.nombre} 
        <br>Apellido: ${this.apellido}
        <br>Email: ${this.email}
        
        <br>Dirección: ${this.direcion}
        <br>DNI: ${this.dni}`)
    }


    //crear las propiedades conmutadas get y set

    //get

    get mostrarNombre (){
        return this.nombre;
    }

    get mostrarApellido (){
        return this.apellido;
    }

    //set!!!!!
    set modificarNombre (nuevoNombre){
        this.nombre = nuevoNombre;

    }

    set modificarApellido (nuevoApellido){
        this.apellido = nuevoApellido;
    }

}

/////!!!!!!HERENCIA!!!!!!!!!

class Alumno extends Persona {
    //método constructor de la Clase "Alumno"
    //crea objeto
    //asigna valor a las propiedades
    constructor(paramNombre, apellido, email, edad, direccion, fotoPerfil, dni, curso, legajo){
    //invoco al constructor de la clase Persona
    super(paramNombre, apellido, email, edad, direccion, fotoPerfil, dni, curso, legajo);
    
    //agregar NUEVAS propiedades
    this.curso = curso;
    this.legajo = legajo;
    this.calificaciones = [];
}

get mostrarLegajo(){
    return this.legajo;
}

mostrarDatos(){//un método sin parámetro porque, en este caso, no recibirá datos de afuera
        
    
    document.write(`<br>Nombre: ${this.nombre} 
    <br>Apellido: ${this.apellido}
    <br>Email: ${this.email}
    
    <br>Dirección: ${this.direcion}
    <br>DNI: ${this.dni}`)
}

mostrarDatosAlumno(){//un método sin parámetro porque, en este caso, no recibirá datos de afuera
        
   
    document.write(`<br>Curso:${this.curso} 
    <br>Legajo: ${this.legajo}`)
}








}

//Cómo crear un objeto o crear una INSTANCIA/INSTANCIAR
let luciana = new Persona("Nicolás", "Cortez", "nicocdelia@gmail.com", "28", "La Rioja 1055", "url", 37454545);
console.log(luciana);

let axel = new Persona("Axel", "Campo", "acampo@gmail.com", "salta 123", "url", 45454545);
console.log(axel);

//crear arreglo

let listaPersonas = [];

//luciana.mostrarDatos();
//axel.mostrarDatos();

//guardar objtetos{} DENTRO de un Array[]

listaPersonas.push(luciana);
listaPersonas.push(axel);

console.log(listaPersonas);

//UN BUCLE para recorrer el Array[]

for (let i=0; i<listaPersonas.length; i++){
    console.log(listaPersonas[i])//mostrame el array[] por la consola
    listaPersonas[i].mostrarDatos()//mostrame cada uno de los elemenos que tiene el array[] en la pantalla con un document.write;
}


//Modificar una propiedad de un objeto{} creado con una clase

//ESTA ES UNA MALA PRÁCTICA:
//luciana.nombre = "Messi";
//luciana.mostrarDatos();



//ESTA ES UNA BUENA PRÁCTICA: 

//GETTERS Y SETTERS

//get
document.write(`<h6>Apellido: ${axel.mostrarApellido} </h6>`)

//set
luciana.modificarNombre = "Lu";

document.write(`<h6>Nombre: ${luciana.mostrarNombre} </h6>`)


//crear un objeto{} de la Clase Alumno QUE ES LA HERENCIA de la Clase Persona

let ramiro = new Alumno("Ramiro","Pérez","gordoperez@gmail",28,"casa del gordo perez","url",37373737,"FullStack",123);

document.write("<br>"+ ramiro.mostrarLegajo)

ramiro.mostrarDatos() 
ramiro.mostrarDatosAlumno()