import Swal from "sweetalert2"
import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import ContactForm from "../ContactForm/ContactForm"

const Checkout = () => {
    const [orderId, setOrderId] = useState("")
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()

    const createOrder = async (userData) => {
        try {
            setLoading(true)

            const objOrder = {
                buyer: {
                    //Datos provenientes del formulario de contacto
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone
                },
                items: cart,
                total
            }

            const batch = writeBatch(db)
            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = query(collection(db, "products"), where(documentId(), "in", ids))

            const { docs } = await getDocs(productsRef)

            docs.forEach(async documentSnapshot => {
                const fields = documentSnapshot.data()
                const stockDb = fields.stock

                const productAddedToCart = cart.find(prod => prod.id === documentSnapshot.id)
                const prodQuantity = productAddedToCart.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(documentSnapshot.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: documentSnapshot.id, ...fields })
                }

                if (outOfStock.length === 0) {
                    const ordersRef = collection(db, "orders")

                    const { id } = await addDoc(ordersRef, objOrder)
                    batch.commit()
                    clearCart()
                    setOrderId(id)
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `El producto ${fields.name} no se encuentra en stock`,
                        footer: `Pruebe pedir menos de ${fields.stock} unidades o intente con otro producto`,
                    });
                }
            })

        } catch (error) {
            Swal.fire({
                title: "Algo anda mal",
                text: "Intente nuevamente por favor",
                icon: "error"
            });
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h1>Se está generando la orden de su pedido...</h1>
    }

    if (orderId) {
        //Generación de la identificaión de la orden de compra
        return (<h1>El id de su orden es: {orderId}</h1>)

    }

    return (
        <>
            <h1>Checkout</h1>
            <h2>Datos del comprador</h2>
            <ContactForm onCreate={createOrder} />
        </>
    )
}

export default Checkout