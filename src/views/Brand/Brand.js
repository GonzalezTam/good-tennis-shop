import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router'
// import './Category.css';

const Brand = () => {
    const {brand} = useParams()
    const capitalize = (word) =>{
        return word.toUpperCase();
    }

    const brandUpper = capitalize(brand);

    return (
        <div>
            <h2 className="banner">{brandUpper}</h2>
            <br/>
            <ItemListContainer />
        </div>
    )
}

export default Brand