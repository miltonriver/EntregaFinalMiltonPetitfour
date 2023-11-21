import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"

const ItemDetail = ({id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useCart()

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        alertcommi(`se agregaron ${quantity} unidades de ${name}`)

        const item = {
            id, name, price, img, quantity
        }

        addItem(item, quantity)
    }
    return (
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} style={{width:150}}/>
            </picture>
            <section className="seccionItemDetail">
                <p>
                    Categoria: <b>{category}</b>
                </p>
                <p>
                    Stock disponible: <b>{stock} unidades</b>
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: <b>${price}</b>
                </p>
            </section>
            <footer>
                {
                    quantityAdded > 0 ? (
                        <Link to="/cart" className="linkTerminarCompra">Terminar compra</Link>
                    ) : (<ItemCount inicial={1} stock={stock} onAdd={ handleOnAdd } />)
                }
            </footer>
        </article>
    )
}

export default ItemDetail