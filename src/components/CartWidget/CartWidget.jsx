import "./CartWidget.css"
import cart from "./assets/shoppingcart.svg"
import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { totalQuantity } = useCart()
    console.log(totalQuantity + " Productos agregados")
    return (
        <Link to="/cart" className="CartWidget"/*  style={{display: totalQuantity > 0 ? "block" : "none"}} */>
            <img className="carritoImagen" src={cart} alt="carrito de compras" />
            { totalQuantity } productos
            
        </Link>
    )
}

export default CartWidget