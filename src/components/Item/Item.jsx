import classes from "./Item.module.css"
import { Link } from "react-router-dom"

const Item = ({id, name, img, price, stock}) => {

    return (
        <article className={classes.items} >
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className={classes.imagenes} />
            </picture>
            <section>
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className={classes.itemFooter} >
                <Link to={`/item/${id}`}>
                    Ver detalle
                </Link>
            </footer>
        </article>
    )
}

export default Item