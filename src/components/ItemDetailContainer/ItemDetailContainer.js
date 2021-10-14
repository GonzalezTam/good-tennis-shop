import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch('../data.json')
        .then(res => res.json())
        .then(data => setData(data[id - 1]))
        .catch(err => console.log(err))
    }, [id]);

    return (
        <div className="wrapper">
            <div className="container">
                <ItemDetail image={data.thumbnail} title={data.title} price={data.price} description={data.description} stock={data.stock} />
            </div>
        </div>
    )
}

export default ItemDetailContainer