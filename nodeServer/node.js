/* let saludo  = "Hola mundo";

for (i=1; i<5; i++){
    console.log(`contador : ${i}`);
}

function multiplicar(a, b){
    return a*b;
}

class Persona{
    constructor(){}
    saludar(){
        console.log("Hola")
    }
}

let persona1 = new Persona();
persona1.saludar();
console.log(multiplicar(2, 5));
console.log(saludo); */

//Leer un archivo

//Imprimir sistema operativo
/* 
const os = require('node:os'); 

console.log(os.cpus());
console.log(os.platform()); */

const { error } = require("console");
const fs = require("fs");
const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readLine.question("Escribe tu informe de ventas", (text) => {
    console.log(text);

    fs.writeFile("./nodeServer/hola.text", text, (error) => {
        if(error){
            return;
        }
        console.log("Se ha guardado exitosamente");
    });
})

fs.readFile("./nodeServer/archivo.txt","utf-8", (error, data) => {
   //console.log(data);
});

let text = "Hola soy un archivo nuevo creado desde javascript";

