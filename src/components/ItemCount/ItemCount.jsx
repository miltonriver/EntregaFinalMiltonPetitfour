import "./ItemCount.css"
import { useState } from "react"

const ItemCount = ({stock, inicial, onAdd}) => {
    const [cantidad, setCantidad] = useState (inicial)

    const incremento = () => {
        if(cantidad < stock) {
            setCantidad(cantidad+1)
        }
    }

    const decremento = () => {
        if(cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return(
        <div className="contadorPadre">
            <h5 className="tituloContador">Cantidad</h5>
            <h2 className="tituloContador">{cantidad}</h2>
            <div>
                <button onClick={decremento} className="botonContador">-</button>
                <button onClick={incremento} className="botonContador">+</button>
            </div>
            <div>
                <button  className="botonContador" onClick={() => onAdd(cantidad)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount