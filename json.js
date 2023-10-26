console.clear();

let usuario = {
    nombre: "juan",
    edad: 25,
    colegiatura:  "postgardo",
    imagen: new Image(),
}

usuario.imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Jxa9UUjegCbjcYUypl0DI32GV6Xti5sbbtmj7zYoeQ&s"
document.body.appendChild(usuario.imagen);
console.log(usuario);
let jsonValue = JSON.stringify(usuario);
console.log(jsonValue);


if (localStorage.getItem("nombre") && localStorage.getItem("nombre") != "null"){
    console.log(localStorage.getItem("nombre"));
}
else{
    let nombre = prompt("Ingrese su nombre");
    localStorage.setItem("nombre", nombre);
}

document.cookie = 'name = jaime; expire = none'