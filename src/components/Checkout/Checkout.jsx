import { useCart } from "../../context/CartContext"

const Checkout = () => {
    const { cart, total } = useCart()

    const createOrder = (userData) => {
        const objOrder = {
            buyer: {
                name: "milton Petitfour",
                email: "mio@gmail.com",
                phone: "12365465" //datos harcodeados, debo obtenerlos del formulario una vez creado e ingresados por el usuario {userData} importados desde el formulario
            },
            items: cart,
            total
        }

    }
    return (
        <>
            <h1>Checkout</h1>
            <h2>Realizar formulario para obtener los datos del usuario, este va a ser un componente orientado a evento</h2>

            <button onClick={createOrder}>Crear orden</button> {/* este boton estaría dentro del formulario, el evento onClick debe ser un evento onSubmit porque está adentro del formulario */}
        </>
    )
}

export default Checkout