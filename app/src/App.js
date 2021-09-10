import { NavBar } from "./components/NavBar/NavBar";
import { Items } from "./components/Items/ItemListContainer";
import "./estilos/estilos.css";
import {BrowserRouter, Switch, Route}  from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <NavBar/>
    </div>

    <Switch> 
      <Route path="/nosotros">
        <h1>nosotros</h1>
      </Route>
  <Route path="/items">

      <Items greeting="aca va el contenido" />
  </Route>
  <Route exact path="/carrito">
   <h1>Proximamente carrito</h1>
  </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
