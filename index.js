//importar celular
const celular = require("./celular");

// Desestructuración del objeto
const { marca, modelo, almacenamiento, camara, bateria, fechaCompra } = celular;
// Función que muestra la descripción del celular
const mostrarDescripcion = () => {
  console.log(
    `Mi celular es un ${marca} ${modelo} con ${almacenamiento}, una cámara de ${camara}, y una batería de ${bateria}. Fue comprado el ${fechaCompra}.`
  );
};

// Llamar a la función para mostrar la descripción
mostrarDescripcion();

// Crear una copia del objeto y actualizar propiedades
const nuevoCelular = {
  ...celular,
  almacenamiento: "512GB",
  bateria: "4500mAh",
};

console.log("Detalles del nuevo celular:", nuevoCelular);

// Ejemplo de función de callback utilizando función de flecha
const procesarCelular = (celular, callback) => {
  callback(celular);
};

// Llamar a la función de callback
procesarCelular(nuevoCelular, (celular) => {
  console.log(`Procesando celular: ${celular.marca} ${celular.modelo}`);
});
