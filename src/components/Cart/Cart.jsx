import "/Cart.css"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from"react-router-dom"

export const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="definirLaClase">Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CardItem key={p.id} {...p} />)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="definirLaClase">Limpiar carrito</button>
            <Link to="/checkout" className="definirLaClase">Checkout</Link>
        </div>
    )
}
