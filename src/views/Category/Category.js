import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router'
import './Category.css';

const Category = () => {
    const {category} = useParams()
    const capitalize = (word) =>{
        return word.toUpperCase();
    }

    const categoryUpper = capitalize(category);

    return (
        <div>
            <h2 className="banner">{categoryUpper}</h2>
            <br/>
            <ItemListContainer />
        </div>
    )
}

export default Category