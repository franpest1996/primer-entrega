import Contador from "../ItemCount/ItemCount"


const Item = ({producto}) =>{
    return(
        <div className="item" >
            <img src="../../../Assets/images/boca.jpg" alt="" />
            <h2>{producto.Producto}</h2>
            <p>{producto.Talle}</p>
            <p>{producto.Precio}</p>
            <button className="info">Información del Prodcuto</button>
            <Contador className="contador" stock={producto.Stock} initial={1}/>
        </div>
    )
}

export default Item