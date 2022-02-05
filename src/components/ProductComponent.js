import React, {useState, useContext} from 'react';
import {useParams} from "react-router-dom"
import {Context} from "../Context"
import {Carousel} from "react-bootstrap"
import {Button, Alert, Snackbar} from "@mui/material"
import { BsFillCartPlusFill, BsFillCartDashFill } from 'react-icons/bs';
import {productsData} from "../data"

const ProductComponent = () => {
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const {productId} = useParams()
    const {savedItems, saveItem, removeItem} = useContext(Context)

    const item = productsData.filter(product => product.productCode === productId)[0]
    return (
        <div className="container">
            <div className="row mt-3 mb-5">
                <h2 className="item-brand">{item.brand}</h2>
                <div className="col-lg-7 mb-5">
                    <Carousel 
                        controls={false} 
                        indicators={true} 
                        variant="dark"
                        interval="3000" 
                        pause="hover" 
                        className="product-carousel"
                    >
                        {item.thumbnailUrls.map(image => {
                            return (
                                <Carousel.Item >
                                    <img
                                        className="product-carousel-image img-fluid "
                                        src={image}
                                        alt="A man posing"
                                    />
                                </Carousel.Item> 
                            )
                        })}
                    </Carousel> 
                    <h6 className="text-light mt-3 text-start text-sm-center">Color: {item.color}</h6>
                </div>
                <div className="col-lg-5 text-light text-center text-md-start">
                    <div className="d-flex flex-row justify-content-evenly mb-3">
                        {savedItems.includes(item) ? 
                            <Button 
                                variant="contained" 
                                style={{background: "#7c7c7c"}}
                                size="small" 
                                startIcon={<BsFillCartDashFill />}
                                onClick={() => removeItem(item)}
                            >
                                Remove from cart
                            </Button>
                        :
                            <Button 
                                variant="contained" 
                                size="small" 
                                startIcon={<BsFillCartPlusFill />}
                                onClick={() => {
                                    setSnackbarOpen(true)
                                    saveItem(item)
                                }}
                            >
                                Add to cart
                            </Button>
                        }
                        <Button 
                            variant="outlined" 
                            color="primary" 
                            size="small"
                        >
                            Save for later
                        </Button>
                    </div>
                    <p className="text-warning">{item.isFreeship ? "Shipping is free on this item!" : null}</p>
                    <h5>{item.name}</h5>
                    <ul className="text-start">
                        {item.desc.about.map(listItem => {
                            return (
                                <li>{listItem}</li>
                            )
                        })}
                    </ul>
                    <p>{item.desc.brand}</p>
                </div>
            </div>
            {savedItems.includes(item) ? 
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={3000}
                    onClose={() => setSnackbarOpen(false)}
                >
                    <Alert severity="success">
                        {`${item.brand} item added to cart!`}
                    </Alert>
                </Snackbar>
                :
                null
            }
        </div>
    );
};

export default ProductComponent;