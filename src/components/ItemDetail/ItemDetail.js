import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import ItemCount  from '../ItemCount/ItemCount';
import {Col, Row} from 'react-bootstrap';
import './ItemDetail.css';

function ItemDetail ({data}) {
    const {addProduct, isInCart} = useContext(CartContext)
    const onAdd = (amount) => {
        addProduct(data,amount)
    }

    return (
        <>
        <Row xs={1} md={2} lg={2} className="mb-5 mt-5">
            <Col className="m-auto text-center">
                <img className="item-detail-img" src={data.thumbnail} alt={data.title} />
            </Col>
            <Col className="m-auto justify-content-center">
                <h2 className="item-detail-title">{data.title}</h2>
                <p className="item-detail-price">${data.price}</p>
                <br />
                <Link to={'#'}>
                    <Row className="justify-content-center">
                        {isInCart(data.id)
                        ? <Link to="/cart" className="btn btn-info view-cart">View Cart</Link>
                        : <ItemCount onAdd={onAdd} stock={data.stock} initial="1"/>
                        }
                    </Row>
                </Link>
                <hr/>
                <p className="">{data.description}</p>
            </Col>
        </Row>
        </>
    )
}

export default ItemDetail