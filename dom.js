let inventario = [
    {
        name: "Guayos Adidas X0",
        imgUrl: "",
        precio: 201000
    },
    {
    name: "Guayos Adidas X1", 
    imgUrl: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/368957e98dc3483ba557398d0d1aaace_9366/Guayos_X_Crazyfast.3_Terreno_Firme_Negro_GY7429_22_model.jpg",
    price: 200000,  
    },
    {
    name: "Guayos Adidas X2", 
    imgUrl: "https://cdnx.jumpseller.com/portel1te/imagX0e/22748824/zapatos-adidas-x-speedflow-fg-negro-tinta-amarillo__2_.jpg?1657726006",
    price: 210000,  
    },
    {
    name: "Guayos Adidas X3", 
    imgUrl: "https://cdnx.jumpseller.com/portel1te/image/22393043/f1984917.jpeg?1657377059",
    price: 212000,  
    },
];

for(i=0 ; i>inventario.length; i++){
    let divPadre = document.createElement("div");
    let titulo = document.createElement("p");
    let imagen = document.createElement("img"); 
    let precio = document.createElement("p"); 
    
    titulo.innerHTML = inventario[i].name; 
    precio.innerHTML = inventario[i].price;  
    imagen.src = inventario[i].imgUrl;

    let cardBody = document.createElement("div");
    cardBody.className = "cart body";
    cardBody.appendChild(titulo,precio);

    divPadre.appendChild(imagen);
    divPadre.appendChild(cardBody);

    divPadre.className = "card";
    divPadre.style.width = "18rem"; 
    img.className = "card-img-top";
    titulo. className = "card-tittle";

    document.body.appendChild(divPadre);
} 

