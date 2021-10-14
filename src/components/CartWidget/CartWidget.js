import { CgShoppingCart } from 'react-icons/cg';
import '../NavBar/NavBar.css'

const CartWidget = () => {
    return (
        <li><a className="cart-icon" href="#cart">Buy <CgShoppingCart/></a></li>
    );
}

export default CartWidget;