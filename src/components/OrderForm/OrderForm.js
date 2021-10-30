import React, { useState, useContext } from 'react';
// import Message from '../Message/Message';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext'
import './OrderForm.css';

function OrderForm({saveOrder}) {
    let {confirmText, clearConfirmText} = useContext(CartContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
    }

    const validateAndSaveOrder = () => {
        if (name === '') {
            setNameError('Invalid.');
        } else {
            setNameError('');
        }

        if (!validateEmail(email)) {
            setEmailError('Invalid.');
        } else {
            setEmailError('');
        }

        if (phone === '') {
            setPhoneError('Invalid');
        } else {
            setPhone('');
        }

        if (name !== '' && validateEmail(email) && phone !== '') {
            saveOrder({name, email, phone});
        }
}

    return (
        <div className="form">

            <h3 className="mb-4 ">Contact information:</h3>

            <div className="mb-4">
                <label htmlFor="name">Name:</label>
                <input className={nameError ? "invalid-input order-inputs" : "order-inputs"} type="text" name="name" id="name" placeholder="John Connor" onChange={ e => setName(e.target.value)} required maxLength="50"/>
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="email">Email:</label>
                <input className={emailError ? "invalid-input order-inputs" : "order-inputs"} type="email" name="email" id="email" placeholder="abc@mail.com" onChange={ e => setEmail(e.target.value)} required maxLength="50"/>
            </div>

            <div className="mb-4">
                <label htmlFor="phone">Phone:</label>
                <input className={phoneError ? "invalid-input order-inputs" : "order-inputs"} type="text" name="phone" id="phone" placeholder="1234567890" onChange={ e => setPhone(e.target.value)}  required maxLength="15"/>
            </div>

            { confirmText === ''
                    ?
                    <Button variant="success" className="btn-primary m-1" onClick={validateAndSaveOrder}>Order now ✅</Button>
                    :
                    <Link to={"/cart/confirmation"} >
                        <Button variant="light" className="btn-primary m-1" onClick={clearConfirmText}>Click to finish</Button>
                    </Link>
            }
        </div>
)}

export default OrderForm