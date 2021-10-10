import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="nav-header">
            <ul>
                <div className="nav-box-1">
                    <li><Link to="/category/racquets">Racquets</Link></li>
                    <li><Link to="/category/shoes">Shoes</Link></li>
                    <li><Link to="/category/strings">Strings</Link></li>
                    <li><Link to="/category/balls">Balls</Link></li>
                </div>
                <div className="nav-box-2">
                    <CartWidget/>
                </div>
            </ul>
        </nav>
    );
}

export default NavBar;