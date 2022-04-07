const fs = require("fs");

class Contenedor {
  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;
  }

  async getAll() {
    try {
      let products = await fs.promises.readFile(
        `${this.nombreArchivo}`,
        "utf-8"
      );
      console.log(products);
      return JSON.parse(products);
    } catch (err) {
      console.log(`Error al leer los productos: ${err}`);
      return [];
    }
  }

  async getRandom() {
    try {
      const elements = await this.getAll();
      let randomProduct = elements[Math.floor(Math.random() * elements.length)];
      console.log(randomProduct);
    } catch {
      console.log("Error al buscar elemento por ID");
    }
  }
}

module.exports = Contenedor;
