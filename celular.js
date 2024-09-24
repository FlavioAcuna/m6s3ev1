const moment = require("moment");

const celular = {
  marca: "Apple",
  modelo: "iPhone 15 Pro Max",
  almacenamiento: "256GB",
  camara: "48MP",
  bateria: "4422mAh",
  fechaCompra: moment().format("YYYY-MM-DD"), // Fecha generada por moment
};
// Exportar el objeto
module.exports = celular;
