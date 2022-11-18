<<<<<<< HEAD
/*  interface vs class
--Si, por ejemplo, tuviéramos la clase Pato y la clase Pez, 
y quisiéramos tratarlos a ambos como Animales,
 podríamos definir la interfaz Animal...........

Definir una interfece es muy similar a como se define una clase, 
con la diferencia de que las interfaces, a diferencia de las clases, 
solo se declaran atributos y métodos sin su implementación.
*/


=======
>>>>>>> d5c5865d5b3cc25baaccca69857ae31dcf8ca1da
//tipado inferido
let mati = {
    nombre: 'Matias',
    edad: 29
}

//tipado explicito?

interface Persona {
    nombre: string;
    edad: number
<<<<<<< HEAD
}   
=======
}
>>>>>>> d5c5865d5b3cc25baaccca69857ae31dcf8ca1da

let franco: Persona = {
    nombre: "Franco",
    edad: 27
}

interface Estudiante extends Persona {
    esActivo: boolean
}

let diego: Estudiante = {
    nombre: "Diego",
    edad: 29,
    esActivo: false //que pasa si comento alguno?
}

<<<<<<< HEAD
/* ----Investiga la palabra reservada implements----
 
What's the difference between extends and implements in TypeScript?
When a subclass extends a class, it allows the subclass to inherit (reuse) 
and override code defined in the supertype. When a class implements an interface, 
it allows an object created from the class to be used in any context 
that expects a value of the interface
*/
=======
// Investiga la palabra reservada implements
>>>>>>> d5c5865d5b3cc25baaccca69857ae31dcf8ca1da

// Existe otra alternativa para realizar lo mismo?
// Si, types.


type Person = {
    name: string,
    age: number
}

type Student = Person & {
    isActive: boolean;
}

let Fede: Student = {
    name: 'Fede',
    age: 29,
    isActive: false
}

<<<<<<< HEAD
/* ----Investiga sus diferencias----

Básicamente son lo mismo :P, pero Typescript recomienda usar interfaces
 para definir tipos de clases y usar type para definir tipos de datos. 

Tranquilamente, una clase puede implementar tanto una “interfaz” como un “tipo”,
 pero conceptualmente eso no sería correcto,
 ya que las clases implementan interfaces, y las variables tienen tipos de datos.
*/
export {}

// info mas detallada en la sig page
// https://gustavodohara.com/blogangular/interfaces-en-typescript/
=======
//Investiga sus diferencias

export {}
>>>>>>> d5c5865d5b3cc25baaccca69857ae31dcf8ca1da
