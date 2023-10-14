let titulo = document.getElementById("titulo");

titulo.innerHTML = "Titulo #1 desde Js";
titulo.style.background = "blue";

//Etiqueta -> p
//parrafo.innerHTML = "Hola soy hijo del titulo"

let parrafo = document.createElement("p");

let texto = "Texto #1";
parrafo.innerHTML = texto;

titulo.appendChild(parrafo);
texto = "Texto #2";
parrafo.innerHTML = texto;

function cambiarTexto(mensaje){
    texto = mensaje;
    parrafo.innerHTML = texto;
}

cambiarTexto("Texto #3");

let botonConsignar = document.createElement("button");
botonConsignar.value = "Click para consignar 10$";
botonConsignar.style.width = "200px";
botonConsignar.style.height = "200px";

titulo.appendChild(botonConsignar);

botonConsignar.className = "arcoiris";