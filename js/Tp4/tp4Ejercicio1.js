let auto = {
    color: "rojo",
    marca: "Ford",
    modelo: "Fiesta",
    encendido: false,

    arranca: ()=>{
        if(auto.encendido == false){
            document.write("<br>no arranca");
        }else{
            document.write("arranca");
        } 
        

    }

}

console.log(auto);
auto.arranca();
//document.write("Arranca? "+ auto.encendido);

//auto.encendido = "5000"
//document.write("<br>Localidad: "+ usuarioJony.localidad);
