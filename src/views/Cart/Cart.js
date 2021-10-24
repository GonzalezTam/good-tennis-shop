import React, { useContext,useEffect } from 'react'
import { CartContext } from '../../CartContext'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Cart = () => {
    const {cart, removeProduct, clear, getTotal, total, verify} = useContext(CartContext);

    const pxq = (price, quantity) => {
        const calculate = price * quantity;
        calculate.toFixed(2);
        return calculate;
    }

    useEffect(() => {
        getTotal()
    },);

    return (
        <div className="wrapper">
            <h2 className="headline-1">Cart</h2>
            <p className="body">These are the products you have selected:</p>

            {cart.map(function (product, index) {
                return (
                <div className="" key={index}>
                    <div className="">
                        <img className="" src={product.thumbnail} alt="thumbnail" />
                        <h3 className="">{product.title}</h3>
                        <p className="">{product.amount} x</p>
                        <p className="">${pxq(product.price, product.amount)}</p>
                        <button className="" onClick={() => {removeProduct(index)}}>X</button>
                    </div>
                </div>
                )
            })}

                <div className="">
                    <div className="d-flex">
                        <h3 className="">Sub-Total</h3>
                        <p className="">${total}</p>
                    </div>
                    <div className="">
                        <Button className="m-1" onClick={clear}>Clean cart</Button>
                        <Link to={``}>
                            <Button className="btn-primary m-1" onClick={verify}>Checkout</Button>
                        </Link>
                    </div>
                </div>
        </div>
    )
}

export default Cart