import "./CartWidget.css"
import Swal from "sweetalert2"
import cart from "./assets/shoppingcart.svg"
import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { totalQuantity } = useCart()
    //Lógica necesaria para una notificación al momento de agregar más de un producto al carrito
    if(totalQuantity > 1) {
        Swal.fire({
            position: "center",
            icon: "success",
            title: `Has agregado ${totalQuantity} unidades al carrito`,
            showConfirmButton: false,
            timer: 5000
        })
    } else if (totalQuantity === 1) {
        //si agrego un solo producto al carrito
        Swal.fire({
            position: "center",
            icon: "success",
            title: `Has agregado ${totalQuantity} unidad al carrito`,
            showConfirmButton: false,
            timer: 5000
        })
    }    
    
    return (
        <Link to="/cart" className="CartWidget" >
            <img className="carritoImagen" src={cart} alt="carrito de compras" />
            {totalQuantity} productos

        </Link>
    )
}

export default CartWidget