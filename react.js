let raiz = document.getElementById('raiz');

let nodoPrincipal = ReactDOM.createRoot(raiz); 

nodoPrincipal.render(boton);

function boton(){
    return <p> Hello world </p>;
}