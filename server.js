const express = require("express");

const app = express();

const products = [
  {
    id: 1,
    name: "Escuadra",
    price: 323.45,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  },
  {
    id: 2,
    name: "Calculadora",
    price: 234.56,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
  },
  {
    id: 3,
    name: "Globo Terráqueo",
    price: 45.67,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
  },
  { id: 4, name: "Paleta Pintura", price: 456.78 },
  { id: 5, name: "Reloj", price: 67.89 },
  { id: 6, name: "Agenda", price: 78.9 },
];

function getNames(products) {
  const names = products.map((product) => product.name);
  return names;
}

function getRandomProduct(products) {
  const names = getNames(products);
  const randomProduct = names[Math.floor(Math.random() * names.length)];
  return randomProduct;
}

app.get("/productos", (req, res) => {
  res.send(`Los productos son ${getNames(products)}`);
});

app.get("/productoRandom", (req, res) => {
  res.send(`El producto elegido al azar es ${getRandomProduct(products)}`);
});

const server = app.listen(8080, () => {
  console.log("servidor http en el puerto 8080");
});

server.on("error", (error) => console.log(`Error en el servidor ${error}`));
