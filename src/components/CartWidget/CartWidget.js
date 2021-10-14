import { CgShoppingCart } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css';

const CartWidget = () => {
    return (
        <li><Link to="/" className="cart-icon">Buy <CgShoppingCart/></Link></li>
    );
}

export default CartWidget;