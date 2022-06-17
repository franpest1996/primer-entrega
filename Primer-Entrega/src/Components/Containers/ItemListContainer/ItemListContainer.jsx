import { useEffect, useState } from "react"
import { getFetch } from "../../../Helpers/getFetch"
import ItemList from "../../ItemList.jsx/ItemList"
import './ItemListContainer.css'

const ItemListContainer = ()=>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    // const getFetch = async () => {
        //     try{
        //         const queryFetch = await fetch("https://pokeapi.co/api/v2/pokemon/")
        //         const queryFetchParse = await queryFetch.json()
        //         setProductos(queryFetchParse.results)
        //     }catch(error){
        //         console.log(error)
        //     }finally{
        //         setLoading(false)
        //     }
            
        // }

        // useEffect(()=>{
        //     getFetch()
        // },[])

    useEffect(()=>{
         getFetch()//Llamada a la Api
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