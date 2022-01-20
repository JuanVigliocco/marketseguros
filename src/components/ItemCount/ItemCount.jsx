import "./ItemCount.css";
import React from "react";
import { useState } from "react";
import swal from "sweetalert";

const ItemCount = ({ initial, stock }) => {
  const [count, setCount] = useState(initial);

  function increaseItem() {
    if (count < stock) {
      setCount(count + 1);
    }
  }
  function decreaseItem() {
    if (count > initial) {
      setCount(count - 1);
    }
  }

  function onAdd() {
    swal(`Se han agregado ${count} Auto/s a la flota`);
  }

  return (
    <div className="counter">
      <div className= "img">
      <div className="counter-controls">
        <button className="btn-count" onClick={increaseItem}>
          +
        </button>
        <p style={{ color: "black" }}>{count}</p>
        <button className="btn-count" onClick={decreaseItem}>
          -
        </button>
      </div>
      <button className="btn-add" onClick={() => onAdd()}>
        Agregar a la Flota
      </button>
      </div>
    </div>
  );
};

export default ItemCount