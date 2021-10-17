import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router'

function Category() {
    const {category} = useParams()
    // console.log(category)

    function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
    }

    const categoryUpper = capitalize(category);


    return (
        <div className="wrapper">
            <h2 className="text-center">{categoryUpper}</h2>
            <br/>
            <ItemListContainer />
        </div>
    )
}

export default Category