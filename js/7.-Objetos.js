/*let email = "jonyplo@gmail.com";
let nombre = "jony plodzien";
let domicilio = "Dirección de Jony";
let localidad = "4000";
let password = "A123$456";*/

//1.-crear un Objeto con NOTACIÓN LITERAL

let usuarioJony = {
    //propiedades---> clave:valor
    email: "jonyplo@gmail.com", 
    nombre: "Jony Plodzien",
    domicilio: "domicilio de Jony",
    localidad: "4000",
    estado: true,

    //métodos o funciones//ACCIONES
    /*login: function () {
        document.write("<br>Usuario logueado");
    } */
    login: ()=>{
        document.write("<br>Usuario logueado");

    }



}

//¿Cómo MOSTRAR un objeto?

console.log(usuarioJony);

//FORMA Nº1
document.write("Email: "+ usuarioJony.email);
document.write("<br>Localidad: "+ usuarioJony.localidad);

//FORMA Nº2

document.write("<br>Nombre: "+ usuarioJony["nombre"]);

//¿cómo MODIFICAR una propiedad del objeto???

usuarioJony.localidad = "5000"
document.write("<br>Localidad: "+ usuarioJony.localidad);

//¿¿¿¿¿CÓMO AGREGAR UNA NUEVA Propiedad al OBJETO???

usuarioJony.nivel = 1;
document.write("<br>Nivel: "+ usuarioJony.nivel);

//¿¿cómo BORRAR una Propiedad de un Objeto????
delete usuarioJony.estado;

//CÓMO LLAMAR UN MÉTODO

usuarioJony.login()

//CÓMO MOSTRAR//recorrer LAS PROPIEDADES DEL OBJETO

let claves = Object.keys(usuarioJony)//------>esto nos devuelve un ARREGLO [] con las claves---->["localidad", "mail"]

console.log(claves)
//Bucle para RECORRER el Arreglo[] ""claves"". cuando no sé cuántas claves tiene mi objeto.
for(let posicion=0 ;posicion< claves.length ; posicion++){
    //document.write("<br>" + claves[posicion] )
    document.write("<br>" + claves[posicion] +":" + usuarioJony[claves[posicion]])
}





