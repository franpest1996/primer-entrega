import { useEffect, useState } from "react"
import { getFetch, getFetchDetails } from "../../../Helpers/getFetch"
import { useParams } from 'react-router-dom'
import ItemDetail from "../../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    getFetchDetails()
    .then((resp) => setProducto(resp))
    .catch(error => console.log(error)) 
  }, [id])
  return <ItemDetail producto={producto}/>
  
}

export default ItemDetailContainer

