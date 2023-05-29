// Ejercicio 1:

function determinarSigno(numero) {
  if (numero > 0) {
    return "El número es positivo.";
  } else if (numero < 0) {
    return "El número es negativo.";
  } else {
    return "El número es 0.";
  }
}

let numero = parseFloat(prompt("Ingresa un número:"));
let mensaje = determinarSigno(numero);

console.log(mensaje);

// Ejercicio 2:

function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

let numeroUsuario = parseInt(prompt("Ingrese un número:"));

if (esPrimo(numeroUsuario)) {
  console.log(numeroUsuario + " es un número primo.");
} else {
  console.log(numeroUsuario + " no es un número primo.");
}

// Ejercicio 3:

function celsiusToFahrenheit(temperatura) {
  return (temperatura * 9) / 5 + 32;
}

function fahrenheitToCelsius(temperatura) {
  return ((temperatura - 32) * 5) / 9;
}

let unidades = {
  celsius: {
    fahrenheit: celsiusToFahrenheit,
  },
  fahrenheit: {
    celsius: fahrenheitToCelsius,
  },
};

const temperatura = parseFloat(prompt("Ingrese la temperatura:"));
const unidadOrigen = prompt(
  "Ingrese la unidad de temperatura (celsius o fahrenheit):"
);
const unidadDestino = prompt(
  "Ingrese la unidad a la que desea convertir (celsius o fahrenheit):"
);

// Ejercicio 4:

function calcularTotal() {
  let productos = [];

  while (true) {
    let precio = prompt(
      "Ingrese el precio del producto (o escriba 'total' para finalizar):"
    );

    if (precio.toLowerCase() === "total") {
      break;
    }

    productos.push(parseFloat(precio));
  }

  function sumarPrecios(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }

  let totalCompra = sumarPrecios(productos);
  return totalCompra;
}

let totalFinal = calcularTotal();
console.log("El total de la compra es: " + totalFinal);
