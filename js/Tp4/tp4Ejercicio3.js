class CreadoraRectangulos{
    constructor(parambase, paramaltura){
        this.base = parambase
        this.altura= paramaltura
    }

    calculcarPerimetro(){
        console.log((this.base*2) + (this.altura*2))
    }

    calcularSuperficie(){
        console.log (this.base * this.altura)
    }

    get mostrarAltura(){
        return this.altura
    }

    set modificarAltura(nuevaAltura){
        this.altura = nuevaAltura

    }
}

let rectangulo1 = new CreadoraRectangulos(4,2)

rectangulo1.calculcarPerimetro()

rectangulo1.calcularSuperficie()


document.write(`<br> Altura: ${rectangulo1.mostrarAltura}`)

rectangulo1.modificarAltura = 4

document.write(`<br> Nueva altura: ${rectangulo1.mostrarAltura}</br>`)

