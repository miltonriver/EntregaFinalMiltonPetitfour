import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firestore/products"

const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const asyncFunction = () => getProducts(categoryId) 

        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if(loading){
        //Mensaje de espera al cargar los productos
        return <h2>Cargando productos...</h2>
    }

    if(products.length === 0) {
        //Mensaje para mostrar si no existen productos en esa categoría
        return <h1>No existen productos para esta categoría</h1>
    }

    return(
        <div>
            <h1 style={{paddingLeft:30, paddingRight:30}}>
                {!categoryId ? greetings : (greetings + categoryId)}
            </h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer