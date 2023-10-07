import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h1>Shimmer Bags</h1>
            <div>
                <button>Mochilas</button>
                <button>Carteras</button>
                <button>Riñoneras</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar