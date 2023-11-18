import { createContext, useState, useContext } from "react";

const CartContext = createContext({
        cart: [],
        addItem: () => {},
        removeItem: () => {},
        isInCart: () => {},
        clearCart: () => {},
        totalQuantity: 0,
        total: 0
})

export const CartProvider = ({ children }) => {
        const [cart, setCart ] = useState([])

        const addItem = (item, quantity) => {
            if(!isInCart(item.id)) {
                setCart(prev => [...prev, {...item, quantity}])
            } else {
                console.error("El producto ya fue agregado")
            }
        }

        const isInCart = (itemId) => {
            return cart.some(prod => prod.id === itemId)
        }

        const removeItem = (itemId) => {
            const cartUpdated = cart.filter(prod => prod.id !== itemId)
            setCart(cartUpdated)
        }

        const clearCart = () => {
            setCart([])
        }

        const getTotalQuantity = () => {
            let totalQuantity = 0

            cart.forEach(prod => {
                totalQuantity += prod.quantity
            })

            return totalQuantity
        }

        const totalQuantity = getTotalQuantity()

        const getTotal = () => {
            let total = 0

            cart.forEach(prod => {
                total += prod.price * prod.quantity
            })

            return total
        }

        const total = getTotal()

        return (
            <CartContext.Provider value={{ cart, addItem, isInCart, removeItem, clearCart, totalQuantity, total}}>
                { children }
            </CartContext.Provider>
        )
}

export const useCart = () => {
    return useContext(CartContext)
}