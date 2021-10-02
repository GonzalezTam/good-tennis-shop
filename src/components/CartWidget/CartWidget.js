import { CgShoppingCart } from 'react-icons/cg';

const CartWidget = () => {
    return (
        <li><a className="cart-icon" href="#cart">Buy <CgShoppingCart/></a></li>
    );
}

export default CartWidget;