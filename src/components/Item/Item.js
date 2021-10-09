import React from 'react';
import ItemCount from "../ItemCount/ItemCount";
import './item.css'

const Item = (props) => {
    return (
            <div className="col-3 shadow-sm p-3 mb-5 bg-body rounded item-container">
                <div className="justify-content-center">
                    <img className="img-fluid"
                        src={props.imgUrl}
                        alt={props.title}
                    />
                    <h6 className="">{props.title}</h6>
                    <p className="">${props.price}</p>
                </div>
                <div className="d-flex justify-content-center">
                    <ItemCount stock={props.stock} initial="1" />
                </div>
            </div>
    );
}

export default Item;