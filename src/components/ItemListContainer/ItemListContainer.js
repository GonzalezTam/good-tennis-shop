import React, { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const ItemListContainer = () => {
    const [items,setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const { categoryId } = useParams()

    useEffect(() => {
        setIsLoading(true)
        fetch('../data.json')
        .then(res => res.json())
        .then(data => setItems(categoryId ? data.filter(item => item.category === categoryId) : data))
        .catch(err => console.error(err))
        .finally(() => setIsLoading(false))
    }, [categoryId]);

    return (
        <div className="wrapper">
            <div className="container">
                {isLoading ? <Loader /> : <ItemList items={items}/>}
            </div>
        </div>
    )
}

export default ItemListContainer;