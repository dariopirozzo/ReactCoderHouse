import { NavBar } from "./components/NavBar/NavBar";
import { Items } from "./components/Items/ItemListContainer";
import "./estilos/estilos.css";
import { ItemDetailContainer } from "./components/Items/ItemDetailContainer";
import {BrowserRouter, Switch, Route}  from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { CartProvider } from "./context/unContext";
import {CartScreen} from "./components/CartScreen"
import { UIContextProvider } from "./context/UIContext";
import { Checkout } from "./components/Checkout";

function App() {


  return (
       <UIContextProvider>  

        <CartProvider> 

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

    <Route exact path="/carrito"> 
    <CartScreen/>

    </Route>
   

    <Route exact path="/checkout"> 
<Checkout/>
 </Route>
  </Switch>
  
  </BrowserRouter>
   </CartProvider>

       </UIContextProvider>
    
  );
}

export default App;
