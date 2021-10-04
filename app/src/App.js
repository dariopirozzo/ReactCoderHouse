import { NavBar } from "./components/NavBar/NavBar";
import { Items } from "./components/Items/ItemListContainer";
import "./estilos/estilos.css";
import { ItemDetailContainer } from "./components/Items/ItemDetailContainer";
import {BrowserRouter, Switch, Route}  from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { unContext } from "./context/unContext";
import { useEffect, useState, useContext } from "react";
import {CartScreen} from "./components/CartScreen"

function App() {

 const [carrito, setCarrito] = useState([])
const agregarAlCarrito=(prod)=> {
  setCarrito([
    ...carrito,
    prod
  ])
}
const eliminarDelCarrito = (id) => {

setCarrito(carrito.filter(prod=> prod.id !==id))
}
const cantidadCarrito = ()=>{
  return carrito.reduce((acc, prod)=> acc + prod.cantidad,0)
}

const vaciarCarrito = () => {
  setCarrito([])
}

  return (
    <unContext.Provider value={{carrito, agregarAlCarrito,eliminarDelCarrito,cantidadCarrito,vaciarCarrito}}>  

  <BrowserRouter> 
  <NavBar/>
  <Switch>
    <Route exact path="/"> 
  <Items/>
    </Route>
  <Route path="/category/:catId"> 
  <Items/>
    </Route>
    <Route path="/detail/:itemId"> 
    <ItemDetailContainer/>
    </Route>
    <Route exact path="/nosotros"> 
<h1>nosotros</h1>

    </Route>
    <Route exact path="/carrito"> 
    <CartScreen/>

    </Route>
    <Route path="*"> 
<h1> 404</h1>

    </Route>
  </Switch>
  
  </BrowserRouter>

    </unContext.Provider>
  );
}

export default App;
