import "./Cart.css"
import eliminar from "../../assets/eliminar.png"
import { useCart } from "../../context/CartContext"
import { Link } from"react-router-dom"
//import Item from "../Item/Item"

export const Cart = () => {
    const { cart, clearCart, removeItem, totalQuantity, total } = useCart()

    if(totalQuantity === 0) {
        return (
            <div className="carritoVacio">
                <h2>No hay items en el carrito</h2>
                <Link to="/" className="cartLinkProductos">Página principal</Link>
            </div>
        )
    } else {
        return (
            <div className="carritoConProductos">
                {/* { cart.map(p => <CardItem key={p.id} {...p} />)} */}
                <h2 className="tituloPrincipalPrecioUnitario">Detalle del pedido</h2>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id} className="productContainer">
                                <h3 className="tituloPrincipalPrecioUnitario">{prod.quantity} unidades de {prod.name} juego físico</h3>
                                <h4 className="tituloPrecioUnitario">Precio unitario ${prod.price}</h4>
                                <img src={prod.img} className="imagenProductoEncarrito" />
                                <button onClick={() => removeItem(prod.id)} className="botonEliminarDelCarrito">
                                    <img src={eliminar} className="imagenCestoBasura" alt="cesto de basura" />
                                </button>
                            </div>
                        )
                    })
                }
                <h3>Total: ${total}</h3>
                <button onClick={() => clearCart()} className="definirLaClase">Limpiar carrito</button>
                <Link to="/checkout" className="definirLaClase">Checkout</Link>
            </div>
        )
    }
}