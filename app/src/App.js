import { NavBar } from "./components/NavBar/NavBar";
import { Items } from "./components/Items/ItemList";
import "./estilos/estilos.css";

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Items greeting="aca va el contenido" />
    </div>
  );
}

export default App;
