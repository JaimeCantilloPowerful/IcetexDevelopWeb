import { useState } from "react";

function CarritoCompras (props){
    console.log(props.productoSeleccionado);
    /* const [productos, setProductos] = useState([]);  */
    return (
        <div>
            <h3> Productos añadidos a tu carrito </h3>
            <p>{props.productoSeleccionado.map((item =>{
                return item.Nombre;
            }))}</p>
        </div>
    );
}

export {CarritoCompras};