import { useEffect, useState } from "react"
import { getFetch } from "../../../Helpers/getFetch"
import ItemList from "../../ItemList.jsx/ItemList"
import './ItemListContainer.css'

const ItemListContainer = ()=>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
         getFetch()
         .then((resp)=>setProductos(resp))
         .catch(error=>console.log(error)) 
         .finally(()=>setLoading(false))
    }, [])

    return(
        <div className="itemList">
            {loading ?
                    <p>Cargando...</p>
            :    
                    <ItemList productos={productos}/> 
                
            }
        </div>
    )
}

export default ItemListContainer