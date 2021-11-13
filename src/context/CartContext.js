import React, { createContext, useState, useEffect } from "react";
import firebase from "firebase";
import { getFirestore } from  "../firebase/config";

const init = JSON.parse(localStorage.getItem("cart")) || [];

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState((init));
  const [total, setTotal] = useState(0);
  const [confirmText, setConfirmText] = useState('');

  const addProduct = (item, amount) => {
    const product = {
      title: item.title,
      thumbnail: item.thumbnail,
      price: item.price,
      amount: amount,
      stock: item.stock,
      id: item.id
    }

    setCart([...cart, product]);
  }

  const removeProduct = (index) => {

    const temp = cart;
    temp.splice(index, 1);
    setCart(temp);
    getTotal()
  }

  const totalProducts = () => {
    return cart.reduce( (acc, products) => acc + products.amount, 0)
  }

  const clear = () => {
    setCart([]);
    setTotal(0)
  }

  const isInCart = (itemId) => {
    return cart.some( (product) => product.id === itemId)
  }

  const getTotal = () => {
    let tot = 0;
    cart.forEach((item) => {tot = tot + (item.price * item.amount)});
    let totalFixed = tot.toFixed(2)
    setTotal(totalFixed);
  }

  const saveOrder = (buyer) => {
    const order = {
        buyer: buyer,
        items: cart,
        date: firebase.firestore.Timestamp.now(),
        total: total
    }

    const db = getFirestore();
    const orders = db.collection('orders');

    orders.add(order)
    .then((res) => {
      setConfirmText(`Great! Your order has been processed! Save this confirmation id: ${res.id}`);
    })
    .catch((err) => {
      setConfirmText(`Sorry, we couldnt process your order. Error: ${err}`);
    })
  }

  const clearConfirmText = () => {
    setConfirmText('');
  }

  const context_value = {
    cart,
    addProduct,
    removeProduct,
    totalProducts,
    clear,
    isInCart,
    getTotal,
    total,
    clearConfirmText,
    confirmText,
    saveOrder
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider value={context_value}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;