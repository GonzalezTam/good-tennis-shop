import React from 'react';
import ItemCount from "../ItemCount/ItemCount";

const Item = (props) => {
    return (
        <div className="">
            <div className="">
                <img className=""
                    src={props.imgUrl}
                    alt={props.title}
                />
                <h3 className="">
                    {props.title}
                </h3>
                <h2 className="">
                    ${props.price}
                </h2>
                <ItemCount stock={props.stock} initial="1" />
            </div>
         </div>
    );
}

export default Item;