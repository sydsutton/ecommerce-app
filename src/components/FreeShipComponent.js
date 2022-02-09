import React from "react"
import { Link } from "react-router-dom"
import { productsData } from "../data"

const FreeShipComponent = () => {

    const freeShipItems = productsData.filter(item => item.isFreeship === true)
    console.log(freeShipItems.length)
    return (
        <div className="free-ship-container">
            {freeShipItems.map((item, index) => {
                const salePrice = item.originPrice > item.discount ? (item.originPrice - item.discount) : item.discount - item.originPrice
                return (
                    <Link to={`/products/${item.category}/${item.productCode}`} className="text-decoration-none">
                        <img key={index} src={item.imageUrl} alt={item.name} className="free-ship-image" />
                        <div className="overlay-price">
                            <p className="mx-auto">${salePrice}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
    );
};

export default FreeShipComponent;