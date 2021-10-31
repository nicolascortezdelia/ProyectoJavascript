class Productos{
    constructor(paramCodigoProd, paramNombreProd, paraPrecioProd){
        this.codigoProd = paramCodigoProd;
        this.nombreProd = paramNombreProd;
        this.PrecioProd = paraPrecioProd;

    }

    mostrarDatosProd(){
        document.write(`<br> Código del Producto: ${this.codigoProd}
        <br> Nombre del Producto: ${this.nombreProd}
        <br> Precio del Producto: ${this.PrecioProd}`)
    }

}


let remera = new Productos(001,"Remera Nike Running", "$5000");

let short = new Productos(002, "Short running Adidas", "$3400");

let zapatillas = new Productos(003, "Zapatillas Asiscs Running", "$10000");

let listaPrecioProductos = []

listaPrecioProductos.push(remera);

listaPrecioProductos.push(short);

listaPrecioProductos.push(zapatillas);

console.log(listaPrecioProductos)

remera.mostrarDatosProd();

short.mostrarDatosProd();

zapatillas.mostrarDatosProd();
