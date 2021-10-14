import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount  from '../ItemCount/ItemCount';
import {Col, Row} from 'react-bootstrap';
import './itemDetail.css';

const ItemDetail = ({image, title, price, description, stock, brand}) => {
    return (
        <>
        <Row xs={1} md={2} lg={2} className="mb-5 mt-5">
            <Col className="m-auto text-center">
                <img className="item-detail-img" src={image} alt={title} />
            </Col>
            <Col className="m-auto justify-content-center">
                <h2 className="item-detail-title">{title}</h2>
                <p className="item-detail-price">${price}</p>
                <br />
                <Link to={'/cart'}>
                    <Row className="justify-content-center">
                        <ItemCount stock={stock} initial="1"/>
                    </Row>
                </Link>
                <hr/>
                <p className="">{description}</p>
            </Col>
        </Row>
        </>
    )
}

export default ItemDetail