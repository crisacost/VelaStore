import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css"; 
import CartWidget from "./components/CartWidget";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a VelaStore!" />
    </div>
  );
}

export default App;