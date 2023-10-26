function darClick(){
    console.log("Haz dado click")
}

function mouseEncima(){
    console.log("Estas sobre el componente PrimerCompenente");
}

function PrimerComponente(props) {
    return (
      <p onClick={darClick} onMouseOver={mouseEncima}>Hola soy {props.nombre}
      <VistaPerfil name={props.nombre}></VistaPerfil>
      </p>
    );
}

function VistaPerfil(props){
    return (
    <div>
        <img src="" alt=""></img>
        <p>Hola soy {props.name} tengo x años desarrollando</p>
    </div>);
}

export {PrimerComponente, VistaPerfil};