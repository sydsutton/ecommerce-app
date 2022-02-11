import React, {useEffect, useState, useContext} from 'react';
import {Context} from "../Context"
import {IconButton, Button} from "@mui/material"
import {BsFillTrashFill} from "react-icons/bs"

const CartComponent = () => {

    const {savedItems, setSavedItems, isModalOpen, setIsModalOpen, removeItem, isLoggedIn} = useContext(Context)

    const totalPrice = () => {
        if(savedItems.length > 0){
            let prices = savedItems.map(item => (item.originPrice > item.discount ? (item.originPrice - item.discount) * item.quantity : (item.discount - item.originPrice) * item.quantity))
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
                                <div className="row">
                                    <img src={item.imageUrl} alt={item.name} className="cart-image col-4" />
                                    <div className="cart-details-container col-8">
                                        <h5>{item.name}</h5>
                                        <hr />
                                        <div className="line-height">
                                            <p>{item.brand}</p>
                                            <p>${salePrice}</p>
                                            <p>Size: {item.size}</p>
                                            <p>Quantity: {item.quantity}</p>
                                        </div>
                                    </div>
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
                                color="secondary" 
                                disabled={savedItems.length > 0 ? false : true}
                                variant="outlined" 
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