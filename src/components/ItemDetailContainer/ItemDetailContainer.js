import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const { id } = useParams();

    const getProducts = () =>{
        return new Promise ((resolve,reject) => {
            setTimeout(()=> {resolve (fetch('../data.json'))},500)
        })
    }

    useEffect(() => {
        setIsLoading(true)
        getProducts()
        .then(res => res.json())
        // .then(res => setData(res[id - 1]))
        .then(res => setData(res.find(item => item.id === Number(id))))
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