import cart from "./assets/shoppingcart.svg"

const CartWidget = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={cart} style={{width:35, height:35 }} alt="carrito de compras" />
            <h3>0</h3>
        </div>
    )
}

export default CartWidget