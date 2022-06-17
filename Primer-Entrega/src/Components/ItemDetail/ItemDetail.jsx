const ItemDetail = ({producto}) => {
    return(
      <div>
        <h2>Detalle</h2>
        <p>{producto.Producto}</p>
        <p>Talle: {producto.Talle}</p>
        <p>Precio: {producto.Precio}</p>
        <p>{producto.imagen}</p>
      </div>
    )
  }

  export default ItemDetail