import React, {useState, useEffect} from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaCartPlus } from 'react-icons/fa';
import { BiMinus, BiPlus } from 'react-icons/bi';
import './ItemCount.css'

    const ItemCount = ({ initial, stock, onAdd}) => {
    const [counter, setCounter] = useState(Number(initial));

    const addToCounter = () => {
        counter < Number(stock) && setCounter(counter + 1)
    };

    const substractCounter = () => {
        counter > 1 && setCounter(counter - 1)
    };

    const addToCart = () => {
        counter > 0 && counter <= Number(stock) && onAdd(counter)
    }

    useEffect(() => {
        Number(stock) > 0 ? setCounter(Number(initial)) : setCounter(0);
    }, [stock, initial]);

    return (
            <Col className = 'col-6'>
                <Row className='text-center'>
                    <Col className='btn btn-light' id='minusBtn' onClick={substractCounter}>
                        <BiMinus/>
                    </Col>
                    <Col className='align-center m-auto'>
                        {counter}
                    </Col>
                    <Col className='btn btn-light' id='plusBtn' onClick={addToCounter}>
                        <BiPlus/>
                    </Col>
                </Row>
                <Row>
                    <Button variant='outline-dark btn-block mt-1 mb-4' onClick={addToCart}>
                        Add To <FaCartPlus/>
                    </Button>
                </Row>
            </Col>
    );
}

export default ItemCount;