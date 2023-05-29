// Objeto producto

let producto = {
  nombre: "Producto 1",
  precio: 100,
  cantidad: 2,
};

function calcularTotal(producto) {
  return producto.precio * producto.cantidad;
}

let total = calcularTotal(producto);

console.log("Total a pagar: " + total);

// Objeto persona

let persona = {
  nombre: "percy jackson",
  edad: 25,
  profesion: "medico",
};

function presentarPersona(persona) {
  console.log("Nombre: " + persona.nombre);
  console.log("Edad: " + persona.edad);
  console.log("Profesión: " + persona.profesion);
}

presentarPersona(persona);

// Objeto esMayorEdad

function esMayorEdad(persona) {
  let edad = persona.edad;
  return edad >= 18;
}

let persona1 = {
  nombre: "percy",
  edad: 20,
};

console.log(esMayorEdad(persona1));

let persona2 = {
  nombre: "nico",
  edad: 16,
};

console.log(esMayorEdad(persona2));
