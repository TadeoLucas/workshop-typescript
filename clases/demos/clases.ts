class Persona {
    nombre: string; //por defecto, son publicas
    private edad: number;
    protected email: string
    constructor(nombre: string, edad: number, email: string) {
        this.nombre = nombre;
        this.edad = edad
        this.email = email
    }
    getEdad () {
        return 'mi edad es ' + this.edad
    }
}

class Estudiante extends Persona {
    isActive: boolean
    constructor(nombre: string, edad: number, email: string) {
        super(nombre, edad, email)
        this.isActive = false
    }
    funcionPrueba() {
        this.email
    }
}


let mati = new Persona('matias', 29, 'mati@mail.com')
let fede = new Persona('fede', 29, 'fede@mail.com')
<<<<<<< HEAD
// fede.email
=======
fede.email
>>>>>>> d5c5865d5b3cc25baaccca69857ae31dcf8ca1da
mati.nombre //publico, lo puedo acceder desde fuera de la clase
mati.getEdad()
export {}