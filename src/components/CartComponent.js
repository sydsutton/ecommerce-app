import React, {useEffect, useState, useContext} from 'react';
import {Context} from "../Context"
import {IconButton, Button} from "@mui/material"
import {BsFillTrashFill} from "react-icons/bs"

const CartComponent = () => {

    const {savedItems, setSavedItems, isModalOpen, setIsModalOpen, removeItem, isLoggedIn} = useContext(Context)

    // const [cartItems, setCartItems] = useState(() => {
    //     const saved = localStorage.getItem("savedItems");
    //     const initialValue = JSON.parse(saved);
    //     return initialValue || "";
    //   });
      
    //   console.log(cartItems, "cart items")

    const totalPrice = () => {
        if(savedItems.length > 0){
            let prices = savedItems.map(item => (item.originPrice > item.discount ? (item.originPrice - item.discount) : item.discount - item.originPrice))
            let totalPrice = prices.reduce((a, c) => Number(a) + Number(c))
            return totalPrice.toFixed(2)
        } else {
            return 0
        }
    }

    const shippingPrice = () => {
        let shippingNum = savedItems.filter(item => item.isFreeship === false).length
        return shippingNum * 2.99
    }

    shippingPrice()

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-7">
                    <ul className="list-group">
                    {savedItems.map(item => {
                        const salePrice = (item.originPrice > item.discount ? (item.originPrice - item.discount) : item.discount - item.originPrice).toFixed(2)
                        return (
                            <li className="list-group-item">
                                <img src={item.imageUrl} alt={item.name} className="cart-image" />
                                <div className="cart-details-container">
                                    <h6>{item.name}</h6>
                                    <p>{item.brand}</p>
                                    <p>${salePrice}</p>
                                    <p>Size: {item.size}</p>
                                </div>
                                <IconButton 
                                    style={{color: "rgb(177, 31, 31)"}}
                                    className="bg-light cart-icon-button shadow"
                                    size="small"
                                    onClick={() => removeItem(item)}
                                >
                                    <BsFillTrashFill />
                                </IconButton>
                            </li>
                        )
                    })}
                    </ul>
                </div>
                <div className="col-lg-5">
                    <div className="cart-pricing-container">
                        <div className="cart-button-container">
                            <Button 
                                size="small" 
                                color="primary"
                                variant="contained"
                                disabled={isLoggedIn}
                                onClick={() => setIsModalOpen(!isModalOpen)}
                            >
                                Sign in to check out
                            </Button>
                            <Button 
                                size="small" 
                                color="action" 
                                disabled={savedItems.length > 0 ? false : true}
                                variant="contained" 
                                onClick={() => setSavedItems([])}
                            >
                                Empty cart
                            </Button>
                        </div>
                        <hr />
                        <div className="order-info">
                            <p>Order total</p>
                            <p>${totalPrice()}</p>
                        </div>
                        <div className="shipping-info">
                            <p>Shipping</p>
                            <p>{shippingPrice() === 0 ? "Free" : `$${shippingPrice()}`}</p>
                        </div>
                        <hr />
                        <div className="total-info">
                            <p>Total</p>
                            <p>${Number(totalPrice()) + Number(shippingPrice())}</p>
                        </div>
                        <Button disabled={!isLoggedIn} variant="contained">Checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartComponent;