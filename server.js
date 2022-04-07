const express = require("express");
const Contenedor = require("./Contenedor.js");

const app = express();
const contenedor = new Contenedor("productos.txt");

app.get("/productos", (req, res) => {
  const products = contenedor.getAll();
  res.send(`Los productos son ${products}`);
});

app.get("/productoRandom", (req, res) => {
  const prod = contenedor.getRandom();
  res.send(`El producto elegido al azar es ${prod}`);
});

const server = app.listen(8080, () => {
  console.log("servidor http en el puerto 8080");
});

server.on("error", (error) => console.log(`Error en el servidor ${error}`));
