import React from 'react';
import {useParams} from "react-router-dom"
import {Carousel} from "react-bootstrap"
import {productsData} from "../data"

const ProductComponent = () => {
    const {productId} = useParams()

    const item = productsData.filter(product => product.productCode === productId)[0]
    return (
        <div className="container mt-5">
            <div className="row">
                <h2 className="item-brand">{item.brand}</h2>
                <div className="col-md-7 mb-5">
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
                </div>
                <div className="col-md-5 text-light">
                    <h5>{item.name}</h5>
                </div>
            </div>
        </div>
    );
};

export default ProductComponent;