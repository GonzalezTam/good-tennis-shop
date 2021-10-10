import React from 'react';
import Item from '../Item/Item';
import { Row } from "react-bootstrap";

const ItemList = ({ items }) => {
    return (
            <Row xs={1} md={3} lg={4} className="justify-content-center">
                {(items !== null) && items.map((itm,index) =>
                        <Item
                        key={index}
                            title={itm.title}
                            price={itm.price}
                            imgUrl={itm.thumbnail}
                            stock={itm.stock}
                            category={itm.category}
                        />
                )}
            </Row>
    )
}

export default ItemList;