import React, { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import { getFirestore } from './../../firebase/config'
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const ItemListContainer = () => {
    const [items,setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const { category } = useParams();

    useEffect(() => {
        setIsLoading(true)

        const db = getFirestore();
        const products = category
                            ? db.collection('products').where('category', '==', category)
                            : db.collection('products').orderBy('index', 'asc');

        products.get()
            .then((response) => {
                const items = response.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}
                })
                setItems(items)
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))}
    , [category])

    return (
        <div className="wrapper">
            <div className="container">
                {isLoading ? <Loader /> : <ItemList items={items} />}
            </div>
        </div>
    )
}

export default ItemListContainer;