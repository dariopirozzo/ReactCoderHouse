import { NavBar } from "./components/NavBar/NavBar";
import { Items } from "./components/Items/ItemListContainer";
import "./estilos/estilos.css";
import { ItemDetailContainer } from "./components/Items/ItemDetailContainer";
import {BrowserRouter, Switch, Route}  from 'react-router-dom';

function App() {
  return (
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
<h1>  carrito de compras </h1>

    </Route>
    <Route path="*"> 
<h1> 404</h1>

    </Route>
  </Switch>
  
  </BrowserRouter>
  );
}

export default App;
