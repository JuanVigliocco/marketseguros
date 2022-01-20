import Item from "../Item/Item"


function ItemList ({ productos }) {
    return (
        <>
            {productos.lenght ? (
                productos.map ((producto) => <Item item = {producto} key={producto.id} />)
            ) : (
                <h3 style= {{ color: "white"}}> Cargando Cotizaciones</h3>
            )}




        </>
    );
}

export default ItemList