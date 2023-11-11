import "./CartWidget.css"
import cart from "./assets/shoppingcart.svg"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    console.log(totalQuantity)
    return (
        <Link to="/cart" className="CartWidget"/*  style={{display: totalQuantity > 0 ? "block" : "none"}} */>
            <img className="carritoImagen" src={cart} alt="carrito de compras" />
            { totalQuantity }
        </Link>
    )
}

export default CartWidget