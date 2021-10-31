class Personas{
    constructor(paramNombre, paramEdad, paramSexo, paramPeso, paramAltura, paramAñoNacimiento){
        this.nombrePersona = paramNombre;
        this.edadPersona = paramEdad;
        this.sexo = paramSexo;
        this.peso = paramPeso;
        this.altura = paramAltura;
        this.añoNacimiento = paramAñoNacimiento;
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

    generarDni(){
        Math.floor(Math.random() * 5) + 1;

    }
}

let messi = new Personas("Lionel Andrés", "Messi", "H", "70 kg",1.69,1987)

messi.mostrarGeneracion()