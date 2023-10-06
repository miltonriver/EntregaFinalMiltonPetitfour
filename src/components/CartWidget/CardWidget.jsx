import cart from "./assets/shoppingcart.svg"

const CarWidget = () => {
    return (
        <div>
            <img src={cart} style={{width:35, height:35 }} alt="carrito de compras" />
            0
        </div>
    )
}

export default CarWidget