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

botonConsignar.addEventListener("click", ()=>{
    console.log("Haz hecho click");
})

let saldo = 500;

let boton1 = document.getElementById("add"); //Aumentar
let boton2 = document.getElementById("minus"); //Disminuir
let saldoText = document.getElementById("Saldo");
let transaciones = document.getElementById("transacciones");

function actualizarSaldo(){
    saldoText.innerHTML = `saldo : $${saldo}` 
};

boton1.addEventListener("click", ()=>{
    saldo += 10;
    let p = document.createElement("p");
    p.innerText = "Se ha agregado $10 al saldo.";
    transaciones.appendChild(p);
    actualizarSaldo(); 
});

boton2.addEventListener("click", ()=>{
    saldo -= 10;
    let p = document.createElement("p");
    p.innerText = "Se ha quitado $10 del saldo.";
    transaciones.appendChild(p);
    actualizarSaldo();
});

//Nueva funcionalidad
let realizarConsignacion = document.getElementById("consignar");

realizarConsignacion.addEventListener("click", ()=>{
    event.preventDefault();
    let cuentaConsignacion = document.getElementById("cuentaConsignar");
    saldo -= 10;
    let p = document.createElement("p");
    p.innerHTML =`Consignaste $10 a la cuenta ${cuentaConsignacion.value}`;

    transaciones.appendChild(p);
    actualizarSaldo ();
});
