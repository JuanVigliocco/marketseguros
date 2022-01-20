import React from "react";
import "../ItemCount/ItemCount.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useEffect } from "react";
import ListaProductos from "../Productos/Productos.json"
import ItemList  from "../ItemList/ItemList";


const ItemListContainer = ({ titulo }) => {
    const [ productos, SetProductos ] = useState ([]);

    const arrayProductos = (data) =>
      new Promise ((resolve, reject)=> {
        setTimeout(()=>{
          if (data){
            resolve(data);
          } else {
            reject ("No se ha encontrado informacion disponible");
          }
        },2000);
      });


    useEffect (() => {
      arrayProductos (ListaProductos)
      .then((result) => SetProductos (result))
      .catch((err) => console.log(err));
      
    }, [])


  
    return (
      <section className="container">
        <h1 style={{ color: "white" }}>{titulo}</h1>
        <ItemList productos={productos} />
        <ItemCount initial={1} stock={5} />
      </section>
    );
  };
  

export default ItemListContainer