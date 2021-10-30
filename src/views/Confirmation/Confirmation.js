import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import './Confirmation.css';

const Confirmation = () => {
    const {clear} = useContext(CartContext);

    return (
        <Row className="confirmation-banner">
            <Col md={6} xs={12} className="m-auto" >
                <h2 className="">Success!</h2>
                <h5 className="confirmation-text">We will contact you to inform you about your order and follow up after your order has been delivered to ensure maximum satisfaction.</h5>
                <Link to={'/'} className="caption" onClick={clear}>
                    <h6 className="to-home">Go to home page</h6>
                </Link>
            </Col>
        </Row>
    )
}

export default Confirmation