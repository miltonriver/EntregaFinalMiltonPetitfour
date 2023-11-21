import "./ContactForm.css"
import { useState } from "react"

const ContactForm = ({ onCreate }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !email || !phone){
            alert("Por favor completa todos los campos requeridos")
            return;
        }

        const phoneRegex = /^[0-9]+$/;
        if (!phoneRegex.test(phone)) {
            alert('El teléfono solo puede contener números.');
            return;
        }
        
        onCreate({ name, email, phone })
    }

    return (
        <div className="contenedorFormulario">
            <form onSubmit={handleSubmit} className="formularioCompra">
                <h3>Nombre y Apellido</h3>
                <input value={name} placeholder="Nombre y Apellido" onChange={(e) => setName(e.target.value)} />
                <h3>Dirección de email</h3>
                <input value={email} placeholder="ejemplo@mail.com" onChange={(e) => setEmail(e.target.value)} />
                <h3>Número de teléfono</h3>
                <input value={phone} placeholder="solo números sin espacios ni guiones" onChange={(e) => setPhone(e.target.value)} />
                <button>Generar orden</button>
            </form>
        </div>
    )
}

export default ContactForm