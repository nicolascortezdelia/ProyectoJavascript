class Personas{
    constructor(paramNombre, paramEdad, paramSexo, paramPeso, paramAltura, paramAñoNacimiento){
        this.nombrePersona = paramNombre;
        this.edadPersona = paramEdad;
        this.sexo = paramSexo;
        this.peso = paramPeso;
        this.altura = paramAltura;
        this.añoNacimiento = paramAñoNacimiento;
        this.dni = 0;
    }

    mostrarGeneracion(){
        if(this.añoNacimiento >= 1994){
            document.write("Sos de la Generación Z. Tu rasgo principal es ser irreverente")
        }
        if (this.añoNacimiento>= 1981 && this.añoNacimiento <=1993){
            document.write("Sos de la Generación Y. Sos un millenial.Tu rasgo principal es la frustación.")
        }
        if (this.añoNacimiento>=1969 && this.añoNacimiento <=1980){
            document.write("Sos de la Generación X. Tu rasgo principal es la Obsesión por el éxito")
        }
        if (this.añoNacimiento>=1949 && this.añoNacimiento <=1968){
            document.write("Sos un Baby Boom. Tu rasgo principal es la Ambición $$$")
        }
        if (this.añoNacimiento>=1930 && this.añoNacimiento <=1948){
            document.write("Sos un Silent Generation o niño de la Post Guerra. Tu rasgo principal es la austeridad")
        }
    }

    mostrarDatosPersona(){
        document.write(`<br> Nombre : ${this.nombrePersona}
        <br> Edad: ${this.edadPersona}
        <br> Sexo: ${this.sexo}
        <br> Peso: ${this.peso}
        <br> Altura: ${this.altura}
        <br> Año de Nacimiento: ${this.añoNacimiento}
         `)

    }

    generarDni(){
        this.dni= Math.floor(Math.random() * 99999999) + 1;

    }

    get mostrarDNI(){
        return this.dni
    }

    esMayordeEdad(){
        if(this.edadPersona >= 18){
            document.write("<br> Es mayor de edad")
        }
        else{
            document.write("<br> Es menor de edad")
        }
    }
}

let messi = new Personas("Lionel Andrés Messi",34, "H", "70 kg",1.69,1987)

messi.mostrarGeneracion()
messi.mostrarDatosPersona()
messi.generarDni()

document.write(`<br>DNI: ${messi.mostrarDNI}</br>`)
messi.esMayordeEdad();