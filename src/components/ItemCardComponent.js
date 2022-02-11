import React, {useState} from 'react';
import {Rating} from "@mui/material"
import {Link} from "react-router-dom"

const ItemCardComponent = ({ salePrice, product, index, category }) => {
    const [selectedHoverIndex, setSelectedHoverIndex] = useState(-1)

    return (
        <div className="item-container">
             <Link 
                to={`/products/${category}/${product.productCode}`} 
                className="shadow"
            >
                <img 
                    src={selectedHoverIndex === index ? product.thumbnailUrls[1] : product.imageUrl} 
                    alt={product.name} 
                    onMouseEnter={() => setSelectedHoverIndex(index)} 
                    onMouseLeave={() => setSelectedHoverIndex(-1)} 
                    className="product-image" 
                />
            </Link>

            <h5 className="product-brand">{product.brand}</h5>

            <Link 
                to={`/products/${category}/${product.productCode}`} 
                className="text-dark text-decoration-none"
            >
                <p className="product-name">{product.name}</p>
            </Link>

            <div className="rating-div text-secondary">
                <Rating 
                    value={product.ratingValue} 
                    size="small" 
                    name="Rating" 
                    precision={0.5} 
                    readOnly 
                />
                <p className="small">{product.reviews} reviews</p>
            </div>

            <div className="price-div">
                {product.discount ? 
                    <div>
                        <p className="text-danger d-inline "><del>${product.originPrice}</del></p>
                        <h6 className="text-dark d-inline">${salePrice.toFixed(2)}</h6>
                    </div>
                : 
                    <p>${product.originPrice}</p>
                }
            </div>
        </div>
    );
};

export default ItemCardComponent;