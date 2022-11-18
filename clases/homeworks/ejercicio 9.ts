<<<<<<< HEAD
// function suma(a: number, b: string): string;
// function suma(a: string, b: string): string;
// function suma(a: string, b: number): string;
function suma(a: number, b: string): string {
  let string:string = String(a)
    return string + b;
}

let resultado = suma(2, 'hola') //cambien los parametros para ver su comportamiento
//haciendo hover sobre resultado

//Aplicar lo mismo para el resto de las operaciones matematicas!

function sumo(a: number, b: string): number {
  let s: number = parseInt(b)
    return a + s;
}

let result = sumo(2, '3')
=======
function suma(a: number, b: string): string;
function suma(a: string, b: string): string;
function suma(a: string, b: number): string;
function suma(a: number, b: number): number {
    return a + b;
}

let resultado = suma(2, 2) //cambien los parametros para ver su comportamiento
//haciendo hover sobre resultado

//Aplicar lo mismo para el resto de las operaciones matematicas!
>>>>>>> d5c5865d5b3cc25baaccca69857ae31dcf8ca1da
