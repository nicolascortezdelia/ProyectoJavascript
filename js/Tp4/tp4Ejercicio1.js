let auto = {
    color: "rojo",
    marca: "Ford",
    modelo: "Fiesta",
    encendido: false,

arrancarAuto:(estado)=> { if (estado == "on"){
    auto.encendido = true
} else {
  if  (estado == "off"){auto.encendido = false}
  else {alert("Ingrese on o OFF")}
} 


}

        
        
} 




let estado = prompt("Ingrese on / off");

console.log(auto)
document.write(auto.encendido)
    /*arranca: ()=>{
        if(auto.encendido == false){
            document.write("<br>no arranca");
        }else{
            document.write("arranca");
        } 
    }*/

