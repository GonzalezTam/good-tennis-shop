import React, { useState, useEffect } from 'react'
import { getFirestore } from './../../firebase/config'
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        setIsLoading(true);

        const db = getFirestore();
        const productRef = db.collection('products').doc(id);
        const query = productRef.get();

    query
        .then((doc)=> {
            if (doc.exists) {
            setItem({id: doc.id, ...doc.data()});
            } else {
            console.log('Your product does not exist!');
            }
        })
        .finally(() => {
            setIsLoading(false);
            })

    }, [id, setIsLoading]);

    return (
        <div className="wrapper">
            <div className="container">
                {isLoading ? <Loader /> : <ItemDetail item={item} />}
            </div>
        </div>
    )
}

export default ItemDetailContainer