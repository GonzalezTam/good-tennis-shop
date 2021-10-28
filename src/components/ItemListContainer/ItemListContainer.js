import React, { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const ItemListContainer = () => {
    const [items,setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const { category } = useParams();

    const getProducts = () =>{
        return new Promise ((resolve,reject) => {
            setTimeout(()=> {resolve (fetch('../data.json'))},500)
        })
    }

    useEffect(() => {
        setIsLoading(true)
        getProducts()
        .then(res => res.json())
        .then(res => setItems(category ? res.filter(item => item.category === category) : res))
        .catch(err => console.error(err))
        .finally(() => setIsLoading(false))
    }, [category]);

    return (
        <div className="wrapper">
            <div className="container">
                {isLoading ? <Loader /> : <ItemList items={items}/>}
            </div>
        </div>
    )
}

export default ItemListContainer;