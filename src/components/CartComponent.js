import React, {useEffect, useState, useContext} from 'react';
import {Context} from "../Context"
import {IconButton, Button, Snackbar, Alert} from "@mui/material"
import {BsFillTrashFill} from "react-icons/bs"

const CartComponent = () => {
    const [snackbarOpen, setSnackbarOpen] = useState(false)

    const {savedItems, setSavedItems, isModalOpen, setIsModalOpen, removeItem, currentUser, signOut} = useContext(Context)

    useEffect(() => {
        window.scroll(0,0)
    }, [])

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
    
    const handleCheckout = () => {
        setSnackbarOpen(true)
        setTimeout(() => {
            setSavedItems([])
        }, 2000)
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-7">
                    <ul className="list-group">
                    {savedItems.map((item, index) => {
                        const salePrice = (item.originPrice > item.discount ? (item.originPrice - item.discount) : item.discount - item.originPrice).toFixed(2)
                        return (
                            <li className="list-group-item" key={index}>
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
                        <div className="row welcome-container">
                            <h6 style={{width: "80%"}}>{currentUser ? <>Welcome <strong>{currentUser.email}</strong></> : null}</h6>
                            <Button 
                                variant="outlined"
                                color="primary"
                                className="log-out-button"
                                disabled={!currentUser}
                                size="small"
                                sx={{maxWidth: "80px", fontSize: ".6em"}}
                                onClick={() => signOut()}
                            >
                                Log out
                            </Button>
                        </div>
                        <div className="cart-button-container">
                            <Button 
                                size="small" 
                                color="primary"
                                fontSize="small"
                                variant="contained"
                                disabled={currentUser}
                                onClick={() => setIsModalOpen(!isModalOpen)}
                            >
                                Sign in to check out
                            </Button>
                            <Button 
                                size="small" 
                                color="error" 
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
                            <p>${(Number(totalPrice()) + Number(shippingPrice())).toFixed(2)}</p>
                        </div>
                        <Button 
                            disabled={!currentUser} 
                            variant="contained"
                            onClick={() => handleCheckout()}
                        >
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
            >
                <Alert severity="success">
                    {currentUser ? `Thanks for your purchase, ${currentUser.email}!` : null}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default CartComponent;