import CarWidget from "../CartWidget/CardWidget";

const NavBar = () => {
    return (
        <nav>
            <h2>Mi Tienda de Juegos</h2>
            <div>
                <button>Juegos PC</button>
                <button>Juegos PS</button>
                <button>Juegos Xbox</button>
            </div>
            <CarWidget />
        </nav>
    )
}

export default NavBar