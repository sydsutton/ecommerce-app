import React, {useContext} from 'react';
import {Context} from "../Context"

const CartComponent = () => {

    const {isModalOpen, setIsModalOpen} = useContext(Context)

    return (
        <div>
            <h1>Cart</h1>
            <button onClick={() => setIsModalOpen(!isModalOpen)}>Sign In</button>
        </div>
    );
};

export default CartComponent;