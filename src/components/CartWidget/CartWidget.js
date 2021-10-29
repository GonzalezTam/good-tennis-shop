import React, { useContext } from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import '../NavBar/NavBar.css';

const CartWidget = () => {
    const { totalProducts } = useContext(CartContext);
    return (
        <li><Link to="/cart" className="cart-link"><span>{totalProducts()}</span> <CgShoppingCart className="cart-icon"/></Link></li>
    );
}

export default CartWidget;