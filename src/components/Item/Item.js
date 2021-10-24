import React from 'react';
import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Item.css';

const Item = ({ id, imgUrl, title, price, stock, category}) => {
    return (
            <Col className="shadow-sm p-3 mb-5 bg-body rounded item-container animate">
                    <div className="justify-content-center">
                        <img className="img-fluid"
                            src={imgUrl}
                            alt={title}
                        />
                        <h6 className="">{title}</h6>
                        <p className="">${price}</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link className="item-link" to={'/item/'+id}>
                            <Button variant='outline-dark btn-block mt-1 mb-4'>See More</Button>
                        </Link>
                    </div>
            </Col>
    );
}

export default Item;