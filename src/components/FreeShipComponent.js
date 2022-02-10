import React, {useState} from "react"
import { Link } from "react-router-dom"
import { productsData } from "../data"

const FreeShipComponent = () => {
    const [selectedIndex, setSelectedIndex] = useState(-1)

    const freeShipItems = productsData.filter(item => item.isFreeship === true)

    return (
        <div className="free-ship-container">
            {freeShipItems.map((item, index) => {
                const isHovered = selectedIndex === index ? true : false
                return (
                    <Link 
                        key={index}
                        onMouseEnter={() => setSelectedIndex(index)} 
                        onMouseLeave={() => setSelectedIndex(-1)}
                        to={`/products/${item.category}/${item.productCode}`} 
                        className="text-decoration-none"
                    >
                        <h6 className={isHovered ? "visible" : "hidden"}>{item.brand}</h6>
                        <img src={isHovered ? item.thumbnailUrls[1] : item.imageUrl} alt={item.name} className={isHovered ? "hover-image free-ship-image" : "free-ship-image"} />
                    </Link>
                )
            })}
        </div>
    );
};

export default FreeShipComponent;