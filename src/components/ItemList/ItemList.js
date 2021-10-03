import React, {useState,useEffect} from 'react';
import Item from '../Item/Item';

const DB_TENNIS_CATALOGUE =[
    {
        title: 'Babolat Gold Championship Ball 24 Can Case',
        price: 59.95,
        thumbnail:'https://img.tennis-warehouse.com/watermark/rs.php?path=BGCBC-1.jpg&nw=540',
        id: 1,
        stock: 6,
        category: 'balls',
    },
    {
        title: 'Wilson US Open High Altitude Tennis Balls 24 Can Case',
        price: 99.90,
        thumbnail:'https://img.tennis-warehouse.com/watermark/rs.php?path=USHA-1.jpg&nw=540',
        id: 2,
        stock: 4,
        category: 'balls',
    },
    {
        title: 'Wilson Triniti All Court Tennis Ball 24 Can Case',
        price: 109.99,
        thumbnail: 'https://img.tennis-warehouse.com/watermark/rs.php?path=WTRINBC-1.jpg&nw=540',
        id: 3,
        stock: 5,
        category: 'balls',
    },
    {
        title: 'Dunlop Australian Open XD Tennis Ball 24 Can Case',
        price: 89.90,
        thumbnail:'https://img.tennis-warehouse.com/watermark/rs.php?path=DPAOBALLC-1.jpg&nw=540',
        id: 4,
        stock: 9,
        category: 'balls',
    },
    {
        title: 'Penn Tour Extra Duty Tennis Balls 24 Can Case',
        price: 79.95,
        thumbnail:'https://img.tennis-warehouse.com/watermark/rs.php?path=TOUXDC-1.jpg&nw=540',
        id: 5,
        stock: 0,
        category: 'balls',
    },
    {
        title: 'Pro Penn Marathon Regular Duty Tennis Balls 24 Can Case',
        price: 89.95,
        thumbnail:'https://img.tennis-warehouse.com/watermark/rs.php?path=PPMRD-1.jpg&nw=540',
        id: 6,
        stock: 5,
        category: 'balls',
    },
];

function createPromise() {
    return new Promise((resolve, reject) => {
    setTimeout(
            () => resolve(DB_TENNIS_CATALOGUE)
        ,2000);
    });
}

const ItemList = () => {
    const [items,setItems] = React.useState(null);
    const [state,setState] = useState('Loading items...');


    useEffect(() => {
        let requestData = createPromise();
        requestData
        .then( function(items_promise){
            setItems(items_promise);
            setState('Done!');
            console.log(items_promise);
        })
        .catch( function(err){
            console.log(err);
            setState('Error');
        })
        .finally( ()=>{
                console.log('Promise ended.');
            }
        )
    }, []);

    return (
        <section className="">
            <div className="">
                {console.log(state)}
                {(items !== null) && items.map((itm,index) =>
                        <Item
                            key={index}
                            title={itm.title}
                            price={itm.price}
                            imgUrl={itm.thumbnail}
                            stock={itm.stock}
                            category={itm.category}
                        />
                )}
            </div>
        </section>
    )
}

export default ItemList;