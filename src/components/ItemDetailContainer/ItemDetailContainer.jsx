import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getProductById } from "../../services/firebase/firestore/products"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    if(loading){
        //Mensaje de carga entre pantallas para un solo producto seleccionado
        return <h2>Buscando producto seleccionado</h2>
    }

    if(!product){
        //Mensaje en caso de no existir ningún producto para esa categoría 
        return <h1>No existe ningún producto en esta categoría</h1>
    }

    return (
        <div>
            <h1>
                Detalle del producto
            </h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer