import React, {useState, useContext} from 'react';
import {useParams} from "react-router-dom"
import {Context} from "../Context"
import {Carousel} from "react-bootstrap"
import {Button, Alert, Snackbar} from "@mui/material"
import { BsFillCartPlusFill, BsFillCartDashFill } from 'react-icons/bs';
import {productsData} from "../data"

const ProductComponent = () => {
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [size, setSize] = useState("")
    const {productId} = useParams()
    const {savedItems, saveItem, removeItem} = useContext(Context)

    const item = productsData.filter(product => product.productCode === productId)[0]

    const handleSaveItem = (item) => {
        setSnackbarOpen(true)
        item.size = size
        saveItem(item)
    }

    return (
        <div className="container pb-5">
            <div className="row mt-3">
                <h2 className="item-brand">{item.brand}</h2>
                <div className="col-lg-7">
                    <Carousel 
                        controls={false} 
                        indicators={true} 
                        variant="dark"
                        interval="3000" 
                        pause="hover" 
                        className="product-carousel"
                    >
                        {item.thumbnailUrls.map((image, index) => {
                            return (
                                <Carousel.Item key={index}>
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
                <div className="col-lg-5 text-light text-center text-md-start bg-dark p-3">
                    <div className="d-flex flex-row justify-content-evenly mb-3">
                        <select onChange={(e) => setSize(e.target.value)}>
                            <option value="">Size</option>
                            <option value="extra-small">Extra Small</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="extra-large">Exta Large</option>
                        </select>
                        <Button 
                            variant="contained" 
                            disabled={size ? false : true}
                            style={ !size ? 
                                    {background: "grey"} : 
                                savedItems.includes(item) ? 
                                    {background: "rgb(177, 31, 31)"} : 
                                    null}
                            color="primary"
                            size="small" 
                            startIcon={savedItems.includes(item) ? <BsFillCartDashFill /> : <BsFillCartPlusFill />}
                            onClick={savedItems.includes(item) ? 
                                () => removeItem(item) : 
                                () => {
                                    handleSaveItem(item)
                                }
                            }
                        >
                            {savedItems.includes(item) ? "Remove from cart" : "Add to cart" }
                        </Button>
                    </div>
                    <p className="text-warning">{item.isFreeship ? "Shipping is free on this item!" : null}</p>
                    <h5>{item.name}</h5>
                    <ul className="text-start">
                        {item.desc.about.map((listItem, index) => {
                            return (
                                <li key={index}>{listItem}</li>
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