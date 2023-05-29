// Arreglo obtenerSuma

function obtenerSuma(arreglo) {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  return suma;
}

let numero = [1, 2, 3, 4];
let resultado = obtenerSuma(numeros);

console.log(resultado);

// Arreglo obtenerPares

function obtenerPares(numeros) {
  let pares = [];

  for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if (numero % 2 === 0) {
      pares.push(numero);
    }
  }
  return pares;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let pares = obtenerPares(numeros);

console.log(pares);

// Arreglo obtenerPromedioPonderado

function obtenerPromedioPonderado(notas, pesos) {
  let sumaNotas = 0;
  let sumaPesos = 0;

  for (let i = 0; i < notas.length; i++) {
    sumaNotas += notas[i] * pesos[i];
    sumaPesos += pesos[i];
  }
  const promedioPonderado = sumaNotas / sumaPesos;
  return promedioPonderado;
}

// Ejemplo de uso
let notas = [90, 85, 95, 70];
let pesos = [0.3, 0.3, 0.2, 0.2];
let promedio = obtenerPromedioPonderado(notas, pesos);

console.log("Promedio ponderado: ", promedio);

// Arreglo obtenerMaximo

function obtenerMaximo(arreglo) {
  let maximo = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > maximo) {
      maximo = arreglo[i];
    }
  }
  return maximo;
}

let numeross = [3, 7, 2, 9, 1, 5];
let maximoNumero = obtenerMaximo(numeros);

console.log(maximoNumero);
