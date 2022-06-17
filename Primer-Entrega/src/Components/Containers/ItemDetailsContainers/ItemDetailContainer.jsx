import { useEffect, useState } from "react"
import { getFetchDetails } from "../../../Helpers/getFetch"
import ItemDetail from "../../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  useEffect(() => {
    getFetchDetails()
    .then((resp) => setProducto(resp))
    .catch(error => console.log(error))
  }, [])
  return <ItemDetail producto={producto} />
  
}

export default ItemDetailContainer

