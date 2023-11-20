import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navBar">
            <Link to="/">
                <h2 className="tituloBarraNavegacion">Mi Tienda de Juegos</h2>
            </Link>
            <div className="navContenedor">
                <div className="navCategorias">
                    <NavLink to={`/category/Playstation`} className="navegadorPorCategoria" >Juegos PS</NavLink>
                    <NavLink to={`/category/PC`} className="navegadorPorCategoria">Juegos PC</NavLink>
                    <NavLink to={`/category/Xbox`} className="navegadorPorCategoria">Juegos Xbox</NavLink>
                    <NavLink to={`/category/Nintendo Switch`} className="navegadorPorCategoria">Juegos Switch</NavLink>
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar