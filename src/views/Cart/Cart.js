import React, { useContext,useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { BsTrash } from 'react-icons/bs';
import OrderForm from '../../components/OrderForm/OrderForm';
import './Cart.css'

const Cart = () => {
    const {cart, removeProduct, clear, getTotal, total, saveOrder} = useContext(CartContext);

    const pxq = (price, quantity) => {
        const calculate = price * quantity;
        return calculate.toFixed(2);
    }

    useEffect(() => {
        getTotal()
    },);

    return (
        <div className="cart-container">
            {cart.length === 0 ?
                <div className="cart-banner mt-5">
                    <h2 className="">No products added</h2>
                    <Link to={'/'} className=""><h5 className="to-home">Go to home page</h5></Link>
                </div>
            :
                <>
                <h2 className="cart-banner mt-5">My Cart</h2>
                <Container className="text-center">
                    <hr></hr>

                        {cart.map(function (product, index) {
                            return (
                                    <Row className="text-center product-row" key={index}>
                                        <Col md={4} xs={12} className="m-auto"><Link className="item-link" to={'/item/'+product.id}><img className="cart-image m-auto" src={product.thumbnail} alt="thumbnail" /></Link></Col>
                                        <Col md={3} xs={12} className="m-auto"><h6 className="m-auto">{product.title}</h6></Col>
                                        <Col md={1} xs={4} className="m-auto"><p className="m-auto">{product.amount} x</p></Col>
                                        <Col md={2} xs={4} className="m-auto"><p className="m-auto">${pxq(product.price, product.amount)}</p></Col>
                                        <Col md={2} xs={4} className="m-auto"><Button variant="outline-danger" className="m-auto" onClick={() => {removeProduct(index)}}><BsTrash/></Button></Col>
                                    </Row>
                            )
                        })}
                <hr></hr>
                <Row className="text-end clean-cart">
                        <Col className="text-right">
                            <Button variant="danger" className="m-1" onClick={clear}>Clean cart</Button>
                        </Col>
                </Row>
                </Container>

                <Row className="subtotal-container m-0">
                    <Col xs={12} md={4} lg={12} className="m-auto text-center mt-4 mb-4">
                        <h3>Total</h3>
                        <p>${total}</p>
                    </Col>
                    <Col xs={12} md={8} lg={12} className="m-auto mt-4 mb-4">
                        <OrderForm saveOrder={saveOrder}/>
                    </Col>
                </Row>
                </>
            }
        </div>
    )
}

export default Cart