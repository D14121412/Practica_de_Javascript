//Funcion esMayorEdad

function esMayorEdad(edad) {
  let resultado;

  if (edad >= 18) {
    resultado = true;
  } else {
    resultado = false;
  }

  return resultado;
}

console.log(esMayorEdad(20));
console.log(esMayorEdad(16));
console.log(esMayorEdad(18));

//Funcion calcularAreaRectangulo

function calcularAreaRectangulo(base, altura) {
  let area = base * altura;
  return area;
}
let base = 3;
let altura = 2;
let areaRectangulo = calcularAreaRectangulo(base, altura);

console.log(areaRectangulo);

//Funcion esPalindromo

function esPalindromo(cadena) {
  let longitud = cadena.length;
  for (let i = 0; i < longitud / 2; i++) {
    if (cadena[i] !== cadena[longitud - 1 - i]) {
      return false;
    }
  }
  return true;
}
let cadena = "radar";
console.log(esPalindromo(cadena));

cadena = "Perro";
console.log(esPalindromo(cadena));

//Funcion generarNumeroAleatorio

function generarNumeroAleatorio() {
  let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  return numeroAleatorio;
}

let numero = generarNumeroAleatorio();
console.log(numero);
