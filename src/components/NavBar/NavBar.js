import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="nav-header">
            <ul>
                <div className="nav-box-1">
                <li><a href="#Racquets">Racquets</a></li>
                <li><a href="#Shoes">Shoes</a></li>
                <li><a href="#Strings">Strings</a></li>
                <li><a href="#Balls">Balls</a></li>
                </div>
                <div className="nav-box-2">
                <CartWidget/>
                </div>
            </ul>
        </nav>
    );
}

export default NavBar;