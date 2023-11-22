import "./Cart.css"
import Swal from "sweetalert2"
import eliminar from "../../assets/eliminar.png"
import { useCart } from "../../context/CartContext"
import { Link } from"react-router-dom"

export const Cart = () => {
    const { cart, clearCart, removeItem, totalQuantity, total } = useCart()

    const showRemoveConfirmation = (productId) => {
        //función necesaria para poder implementar SweetAlert en el código al momento de eliminar un producto del carrito
        Swal.fire({
            title: '¿Estás seguro qué deseas eliminar este producto?',
            text: '¡No podrás revertir esto!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro',
        }).then((result) => {
            if (result.isConfirmed) {
                // Ejecuta la lógica para eliminar el producto
                removeItem(productId);
            }
        });
    };

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
                <h2 className="tituloPrincipalPrecioUnitario">Detalle del pedido</h2>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id} className="productContainer">
                                <h3 className="tituloPrincipalPrecioUnitario">{prod.quantity} unidades de {prod.name} juego físico</h3>
                                <h4 className="tituloPrecioUnitario">Precio unitario ${prod.price}</h4>
                                <img src={prod.img} className="imagenProductoEncarrito" />
                                <button onClick={() => showRemoveConfirmation(prod.id)} className="botonEliminarDelCarrito">
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