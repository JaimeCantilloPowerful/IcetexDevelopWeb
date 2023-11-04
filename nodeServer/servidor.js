/* const http  = require('http');
const server = http.createServer((req, res)=>{
    res.end("Hola soy el servidor, estoy realizando funciones nuevas, dame un momento");
});

server.listen(3000, "localhost", () =>{
    console.log("Servidor funcionando")
}); */

//Crear un servidor express

const express = require("express");
const path = require("path");
const fs = require("fs");

const server = express();
const PORT = 3000;

server.use(express.json());

let username = "pablo";
let password = "123";

server.get("/", (req, res) => {
  res.sendFile(path.resolve("./index.html"));
});
server.post("/file", (req, res) => {
  fs.writeFile(req.body.name + ".txt", req.body.content, (error) => {
    if (error) {
      console.log("No se pudo crear el archivo" + req.body.name);
      return;
    }
    console.log("Se creo");
  });
});
server.get("/home", (req, res) => {
  res.sendFile(path.resolve("./hola.html"));
});

server.listen(3000);