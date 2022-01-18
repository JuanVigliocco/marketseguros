import React from "react";
import "../ItemCount/ItemCount.css";
import {ItemCount} from "../ItemCount/ItemCount";


export const ItemListContainer = ({ titulo }) => {
    return (
      <div>
        <h1 style={{ color: "white" }}>{titulo}</h1>
  
        <ItemCount initial={1} stock={5} />
      </div>
    );
  };
  

export default ItemListContainer