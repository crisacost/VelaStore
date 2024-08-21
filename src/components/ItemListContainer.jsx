import React from "react";

function ItemListContainer({ greeting }) {
  return (
    <div>
      <h2>{greeting}</h2>
      <ul>
        <li>Vela de Lavanda - $00</li>
        <li>Vela de Vainilla - $00</li>
        <li>Vela de Canela - $00</li>
      </ul>
    </div>
  );
}

export default ItemListContainer;