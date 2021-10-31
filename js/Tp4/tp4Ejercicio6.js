/*Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. 

Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/ 

class Libros { 
    constructor(paramISBN, paramTituloLibro, paramAutorLibro, paramNumeroPaginas){
        
        this.isbn = paramISBN;
        this.tituloLibro = paramTituloLibro;
        this.autorLibro = paramAutorLibro;
        this.numeroPaginas = paramNumeroPaginas;

    }

    mostrarDatosLibro(){
    document.write(`El libro ${this.tituloLibro} con ISBN ${this.isbn} creado por el autor ${this.autorLibro} tiene ${this.numeroPaginas} páginas <br>`)
    }

    mayorNumerodePaginas(){ if (señorDeLosAnillos.numeroPaginas > harryPotter.numeroPaginas){
        document.write("El Señor de los Anillos tiene más páginas")
    }else
    {
        document.write("Harry Potter tiene más páginas")
    }

    }

    //LOS GET

    get mostrarIsbn(){
        return this.isbn
    }

    get mostrarTituloLibro(){
        return this.tituloLibro
    }

    get mostrarAutorLibro(){
        return this.autorLibro
    }

    get mostrarNumeroPaginas(){
        return this.numeroPaginas
    }

    //LOS SET

    set modificarIsbn(nuevoIsbn){
        this.isbn = nuevoIsbn
    }

    set modificarTituloLibro(nuevoTituloLibro){
        this.tituloLibro = nuevoTituloLibro
    }

    
    set modificarAutorLibro(nuevoAutorLibro){
        this.autorLibro = nuevoAutorLibro
    }

    set modificarNumeroPaginas(nuevoNumeroPaginas){
        this.numeroPaginas = nuevoNumeroPaginas
    }

}

let señorDeLosAnillos = new Libros(9780395647394, "El Señor de los Anillos", "Tolkien", 150);

let harryPotter = new Libros(9788478884452, "Harry Potter", "J K Rolking", 100);

señorDeLosAnillos.mostrarDatosLibro();

harryPotter.mostrarDatosLibro();



harryPotter.modificarNumeroPaginas = 600;

harryPotter.mayorNumerodePaginas();
