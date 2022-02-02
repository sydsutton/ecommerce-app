import React, {useState} from 'react';
import {Rating, IconButton} from "@mui/material"
import {Link} from "react-router-dom"
import { BsFillCartPlusFill } from 'react-icons/bs';

const ItemCardComponent = ({ salePrice, product, index, category }) => {
    const [selectedHoverIndex, setSelectedHoverIndex] = useState(-1)
    return (
        <div>
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
            <Link 
                to={`/products/${category}/${product.productCode}`} 
                className="text-decoration-none text-light shadow"
            >
                <p className="mt-2 product-name">{product.name}</p>
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
            {product.discount ? 
                <div className="w-25">
                    <p className="text-danger d-inline "><del>${product.originPrice}</del></p>
                    <h6 className="text-light d-inline">${salePrice.toFixed(2)}</h6>
                </div>
            : 
                <p>${product.originPrice}</p>
            }
            <div className="d-flex justify-content-end">
                <IconButton color="primary" size="small">
                    <BsFillCartPlusFill/>
                </IconButton>
            </div>
        </div>
    );
};

export default ItemCardComponent;

//   {
//     productCode: '1924146',
//     name: 'Parlez faded embroidered hoodie in black',
//     category: 'hoodie',
//     imageUrl:
//       'https://images.asos-media.com/products/parlez-faded-embroidered-hoodie-in-black/23089615-1-black?$n_320w$&wid=317&fit=constrain',
//     originPrice: 84.99,
//     discount: 10,
//     brand: 'Parlez',
//     isFreeship: true,
//     ratingValue: 4.5,
//     desc: {
//       brand:
//         "The designers behind Parlez draw on a love of street culture to craft their collection of hoodies, sweatshirts and T-shirts. Inspired by sportswear and nautical aesthetics, the label focuses on stripped-back silhouettes, utility and understated branding. Check out our ASOS edit to discover our top picks from the brand's offering.",
//       about: [
//         'Sweatshirt fabric',
//         'Soft hand feel',
//         'Fabric: 80% Cotton, 20% Polyester.',
//       ],
//     },
//     reviews: 100,
//     orders: 312,
//     color: 'Black',
//     thumbnailUrls: [
//       'https://images.asos-media.com/products/parlez-faded-embroidered-hoodie-in-black/23089615-1-black?$n_640w$&wid=513&fit=constrain',
//       'https://images.asos-media.com/products/parlez-faded-embroidered-hoodie-in-black/23089615-2?$n_640w$&wid=513&fit=constrain',
//       'https://images.asos-media.com/products/parlez-faded-embroidered-hoodie-in-black/23089615-3?$n_640w$&wid=513&fit=constrain',
//       'https://images.asos-media.com/products/parlez-faded-embroidered-hoodie-in-black/23089615-4?$n_640w$&wid=513&fit=constrain',
//     ],
//   },