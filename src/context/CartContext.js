import React, { createContext, useState, useEffect } from "react";

const init = JSON.parse(localStorage.getItem("cart")) || [];

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState((init));
  const [total, setTotal] = useState(0);

  // console.log(cart);

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

    setCart([...cart, product]);
    // const temp = cart;
    // temp.push(product);
    // setCart(temp);
  }

  const removeProduct = (index) => {
    console.log("Removed from cart!")

    const temp = cart;
    temp.splice(index, 1);
    setCart(temp);
    getTotal()
  }

  const totalProducts = () => {
    return cart.reduce( (acc, products) => acc + products.amount, 0)
  }

  const clear = () => {
    console.log("Cart empty!")
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

  const verify = () => {
    console.log("Go to payments!")
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
    verify
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