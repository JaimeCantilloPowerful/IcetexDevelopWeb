import logo from './logo.svg';
import './App.css';
import {PrimerComponente, VistaPerfil} from "./PrimerComponente/componente";
import {Cuenta} from "./CuentaBanco/Cuenta";
import {CarritoCompras} from './CarritoDeCompras/CarritoCompras';
import {SuperMercado} from './Productos/Productos';
import {useState} from 'react';
import { ToDo } from './ToDo/ToDo';

function App() {
  /* let primerNombre = "Esteban"; */
  const [itemSeleccionado, useItems] = useState([]);
  return (
/*     <div>
      <Cuenta nombre = "Cantillo" saldo = {10000}></Cuenta>
      <SuperMercado cambio={useItems}></SuperMercado>
      <CarritoCompras productoSeleccionado={itemSeleccionado}></CarritoCompras> 
    </div> */

    <ToDo></ToDo>
  );

  
/*   return (
    
    <div>
      <PrimerComponente nombre = "Jaime" edad = "25"></PrimerComponente>
      <PrimerComponente nombre = "Juan"></PrimerComponente>
      <PrimerComponente nombre = {primerNombre}></PrimerComponente>
      <VistaPerfil></VistaPerfil>
      <Cuenta nombre = "Cantillo" saldo = {10000}></Cuenta>
    </div>

  ); */
}


export default App;
