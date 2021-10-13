let estacion = prompt("Ingrese su estación del año preferida: 1.- Verano, 2.-Otoño, 3.-Invierno, 4.-Primavera");

/*if (estacion == "1"){
    document.write("helado");
}else if (estacion == "2"){
    document.write("churros");
}else if (estacion == "3"){
    document.write("Pastas");
}else if (estacion == "4"){
    document.write("Torta");
}else{
    alert("la opción ingresada es errónea")
}*/

/*switch(opción que eligirá el usuario, ej: 1=Verano){
    case: puede ser número o palabra ""en caso de que la opción sea uno...":
        las líneas de código
        break; 
        case 2:
            líneas de código
            break;
    default:
        las líneas de código que quiero ejecutar si es una 
        opción diferente a los case anteriores

}*/ 

switch(estacion){
    case "1":
    case "verano":
        document.write("helado");
        break;
    case "2":
        document.write("churros");
        break;
    case "3":
        document.write("Pastas");
        break;
    case "4":
        document.write("Torta");
        break;
    default:
        alert ("Opción errónea");
}