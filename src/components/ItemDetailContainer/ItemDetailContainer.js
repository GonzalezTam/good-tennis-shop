// import React, { useState, useEffect } from 'react';
// import ItemDetail  from "../ItemDetail/ItemDetail";


// function ItemDetailContainer({id}) {
//     const [data, setData] = useState({});

//     const getData=()=>{
//         fetch('data.json'
//         ,{
//             headers : {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }
//         }
//         )
//         .then(function(response){
//             console.log(response)
//             return response.json();
//         })
//         .then(function(myJson) {
//             console.log(myJson);
//         });
//     }

//     useEffect(() => {
//         setTimeout(()=> {getData()}, 2000)
//     }, []);

//     return (
//         <div className="wrapper">
//             <div className="detail__container">
//                 <ItemDetail image={data.image} title={data.title} price={data.price} description={data.description} />
//             </div>
//         </div>
//         )
//     }

// export default ItemDetailContainer;