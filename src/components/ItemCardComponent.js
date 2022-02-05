import React, {useState, useContext} from 'react';
import {Context} from "../Context"
import {Rating, IconButton, Snackbar, Alert} from "@mui/material"
import {Link} from "react-router-dom"
import { BsFillCartPlusFill, BsFillCartDashFill, BsFillCartXFill } from 'react-icons/bs';

const ItemCardComponent = ({ salePrice, product, index, category }) => {
    const [selectedHoverIndex, setSelectedHoverIndex] = useState(-1)
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const {savedItems, saveItem, removeItem, isLoggedIn} = useContext(Context)
    console.log(savedItems)
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
            <div className="cart-icon-container">

                    <IconButton
                        style={
                            !isLoggedIn ?  
                                {color: "#7c7c7c"} : 
                            isLoggedIn && !savedItems.includes(product) ? 
                                {color: "#47b7d3"} : 
                                {color: "rgb(177, 31, 31)"}
                            } 
                        className="cart-icon" 
                        disabled={!isLoggedIn}
                        onClick={
                            savedItems.includes(product) ? 
                            () => removeItem(product) : 
                            () => {
                                setSnackbarOpen(true)
                                saveItem(product)
                            }}
                        aria-label={savedItems.includes(product) ? `remove from shopping cart` : `add to cart`}
                    >
                        {!isLoggedIn ? 
                            <BsFillCartXFill /> : 
                            savedItems.includes(product) ? 
                            <BsFillCartDashFill/> : 
                            <BsFillCartPlusFill/> 
                        }
                    </IconButton>

                {savedItems.includes(product) ? 
                        <Snackbar
                            open={snackbarOpen}
                            autoHideDuration={3000}
                            onClose={() => setSnackbarOpen(false)}
                        >
                            <Alert severity="success">
                                {`${product.brand} item added to cart!`}
                            </Alert>
                        </Snackbar>
                    :
                    null
                }
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