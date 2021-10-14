import React, { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [items,setItems] = useState([]);
    const { categoryId } = useParams()


    useEffect(() => {
        fetch('../data.json')
        .then(res => res.json())
        .then(data => setItems(categoryId ? data.filter(item => item.category === categoryId) : data))
        .catch(err => console.error(err))
    }, [categoryId]);


    return (
            <ItemList items={items}/>
    )
}

export default ItemListContainer;