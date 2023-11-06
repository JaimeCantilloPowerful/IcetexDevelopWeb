import { CarritoCompras } from "./CarritoDeCompras/CarritoCompras";
import { SuperMercado } from "./Productos/Productos";  
import { useState } from "react";
import { ToDo } from "./ToDo/ToDo";

function App() {
  let primerNombre = "esteban";
  const [items, useItems] = useState([]);
  return (
    <div>
      <ToDo></ToDo>
    </div>
    );
  }

  export default App;