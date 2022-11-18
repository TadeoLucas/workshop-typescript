<<<<<<< HEAD
// Intenta tipar una pluck function!
// TIP! Buscar la palabra reservada keyof y usar extends!

class Persona {
  nombre: string;
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
  doActiveOrInactive() {
    this.isActive = !this.isActive
  }
}


let mati = new Persona('matias', 29, 'mati@mail.com')
let fede = new Persona('fede', 29, 'fede@mail.com')

let arry: any[] = [{mati}, {fede}]



function pluckService(arreglo: Array<Estudiante | Persona>, prop: keyof Persona) {
    return arreglo.map((object) => {
        return object[prop]
    }) 
}

// ----real soluction----

// function getProperty<T extends object, K extends keyof T>(
//   obj: T, key: K
// ) {
//   return obj[key];
// }

function getProperty<T extends Array<T>, K extends keyof T>(
  arreglo: T, prop: K
) {
  return arreglo.map((object) => {
    return object[prop]
}) 
}

export {
  Persona,
  Estudiante,
  pluckService,
  getProperty
=======
//Intenta tipar una pluck function!
//TIP! Buscar la palabra reservada keyof y usar extends!
function pluck(arreglo, prop) {
    return arreglo.map((object) => {
        return object[prop]
    }) 
>>>>>>> d5c5865d5b3cc25baaccca69857ae31dcf8ca1da
}