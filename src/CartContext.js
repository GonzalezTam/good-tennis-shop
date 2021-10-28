import React, { createContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addProduct = (data, amount) => {
    console.log("Added to cart!")

    const product = {
      title: data.title,
      thumbnail: data.thumbnail,
      price: data.price,
      amount: amount,
      stock: data.stock,
      id: data.id
    }

    const temp = cart;
    temp.push(product);
    setCart(temp);

    console.log(product);
  }

  const removeProduct = (index) => {
    console.log("Removed from cart!")

    const temp = cart;
    temp.splice(index, 1);
    setCart(temp);
    getTotal()
    console.log(temp)
  }

  const clear = () => {
    console.log("Cart empty!")
    setCart([]);
    setTotal(0)
  }

  const getTotal = () => {
    let tot = 0;
    cart.forEach((item) => {tot = tot + (item.price * item.amount)});
    let totalFixed = tot.toFixed(2)
    setTotal(totalFixed);
  }

  const verify = () => {
    console.log("Go to payments!")
  }

  const context_value = {
    cart,
    addProduct,
    removeProduct,
    clear,
    getTotal,
    total,
    verify
  }


  return (
    <CartContext.Provider value={context_value}>
      {props.children}
    </CartContext.Provider>
  )
}