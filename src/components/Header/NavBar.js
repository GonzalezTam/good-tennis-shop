import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <nav className="nav-header">
            <ul>
                <div className="pri-caja">
                <li><a href="#Racquets">Racquets</a></li>
                <li><a href="#Shoes">Shoes</a></li>
                <li><a href="#Strings">Strings</a></li>
                <li><a href="#Balls">Balls</a></li>
                </div>
                <div className="seg-caja">
                <CartWidget/>
                </div>
            </ul>
        </nav>
    );
}

export default NavBar;