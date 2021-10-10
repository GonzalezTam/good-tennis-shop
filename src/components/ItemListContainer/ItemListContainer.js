import React, { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import axios from 'axios';
// import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [items,setItems] = useState([]);
    // const result = useParams();

    console.log('Se ejecuto la busqueda');

    const getItems = () => {
        axios.get('data.json')
        .then(res => {
            setItems(res.data)
        })
    }

    useEffect(() => {
        getItems();
    }, []);

    return (
            <ItemList items={items}/>
    )
}

export default ItemListContainer;