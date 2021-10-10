import React from 'react';
import ItemCount from "../ItemCount/ItemCount";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './item.css';

const Item = ({ id, imgUrl, title, price, stock, category}) => {
    return (
            <Col className="shadow-sm p-3 mb-5 bg-body rounded item-container animate">
                <Link className="item-link" to={'/item/'+id}>
                    <div className="justify-content-center">
                        <img className="img-fluid"
                            src={imgUrl}
                            alt={title}
                        />
                        <h6 className="">{title}</h6>
                        <p className="">${price}</p>
                    </div>
                </Link>
                    <div className="d-flex justify-content-center">
                        <ItemCount stock={stock} initial="1" />
                    </div>
            </Col>
    );
}

export default Item;