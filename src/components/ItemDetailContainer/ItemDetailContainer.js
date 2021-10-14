import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        setIsLoading(true)
        fetch('../data.json')
        .then(res => res.json())
        .then(data => setData(data[id - 1]))
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
    }, [id]);

    return (
        <div className="wrapper">
            <div className="container">
                {isLoading ? <Loader /> : <ItemDetail image={data.thumbnail} title={data.title} price={data.price} description={data.description} stock={data.stock} />}
            </div>
        </div>
    )
}

export default ItemDetailContainer