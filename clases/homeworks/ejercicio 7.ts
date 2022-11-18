<<<<<<< HEAD
function sume(a: number | string, b: number | string): number {
  if(typeof a === "string") {
    a = parseInt(a)
  }
  if(typeof b === "string") {
    b = parseInt(b)
  }  
  return a + b
=======
function suma(a: number, b: number): number {
    return a + b
>>>>>>> d5c5865d5b3cc25baaccca69857ae31dcf8ca1da
}
// Logra que esta funcion tambien concatene strings