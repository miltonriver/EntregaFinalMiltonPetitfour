import { useEffect, useState } from "react"
import { getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firestore/products"

const ItemListContainer = ({greetings}) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

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