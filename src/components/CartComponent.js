import React, {useEffect, useState, useContext} from 'react';
import {Context} from "../Context"

const CartComponent = () => {

    const {isModalOpen, setIsModalOpen} = useContext(Context)

    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem("savedItems");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
      
      console.log(cartItems, "cart items")

    return (
        <div>
            <h1>Cart</h1>
            <button onClick={() => setIsModalOpen(!isModalOpen)}>Sign In</button>
            <button onClick={() => localStorage.clear()}>Empty cart</button>
        </div>
    );
};

export default CartComponent;