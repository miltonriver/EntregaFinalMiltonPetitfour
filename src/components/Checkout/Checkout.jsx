import "./Checkout.css"
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
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone //datos harcodeados, debo obtenerlos del formulario una vez creado e ingresados por el usuario {userData} importados desde el formulario
                },
                items: cart,
                total
            }

            const batch = writeBatch(db)
            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = query(collection(db, "products"), where(documentId(), "in", ids))

            //getDocs(productsRef).then(QuerySnapshot => {})
            //const QuerySnapshot = await getDocs(productsRef)

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
                    console.log(outOfStock)
                }

                if (outOfStock.length === 0) {
                    const ordersRef = collection(db, "orders")

                    const { id } = await addDoc(ordersRef, objOrder)
                    batch.commit()
                    clearCart()
                    setOrderId(id)
                } else {
                    console.log(`El producto ${fields.name} no se encuentra en stock`)
                    //<h2>`El producto ${fields.name} no se encuentra en stock`</h2>
                }
            })

        } catch (error) {
            console.error("Hubo un error generando su orden")
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Se está generando la orden de su pedido...</h1>
    }

    if(orderId) {
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