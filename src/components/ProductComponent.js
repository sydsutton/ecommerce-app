import React from 'react';
import {useParams} from "react-router-dom"

import {productsData} from "../data"

const ProductComponent = () => {
    const {productId} = useParams()

    const item = productsData.filter(product => product.productCode === productId)[0]

    return (
        <div>
            <h4>{item.name}</h4>
        </div>
    );
};

export default ProductComponent;