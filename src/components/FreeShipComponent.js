import React from "react"
import { Link } from "react-router-dom"
import { productsData } from "../data"

const FreeShipComponent = () => {

    const freeShipItems = productsData.filter(item => item.isFreeship === true).slice(20, 50)
    console.log(freeShipItems.length)
    return (
        <div className="free-ship-container">
            {freeShipItems.map((item, index) => {
                return (
                    <Link to={`/products/${item.category}/${item.productCode}`}>
                        <img key={index} src={item.imageUrl} alt={item.name} className="free-ship-image" />
                    </Link>
                )
            })}
        </div>
    );
};

export default FreeShipComponent;