import "./styles.css";

function ProductoUnitario(props) {

    function click(){
        props.cambio ((arrayViejo)=>[...arrayViejo, {Nombre: props.name, precio: props.precio}]);
    }
    return (
        <div className="producto" onClick={click}>
            <p>{props.name}</p>
            <img src={props.img}></img>
            <p>{props.precio}</p>
        </div>
    );
}

function SuperMercado(props){
    let listaProductos = [
        {name: "Arroz", img:"", precio: "2700"}, 
        {name: "Papa", img:"", precio: "2800"},
        {name: "Tomate", img:"", precio: "1500"}
    ];

    return (
        <div>
            {
                listaProductos.map((item)=>{
                    return (<ProductoUnitario name={item.name} precio={item.precio} cambio = {props.cambio} ></ProductoUnitario>);
                })
            }
        </div>
    );
}

export {SuperMercado};