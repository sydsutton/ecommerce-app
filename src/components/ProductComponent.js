import React from 'react';
import {useParams} from "react-router-dom"
import {Carousel} from "react-bootstrap"

import one from "../images/carousel/1.jpg"
import two from "../images/carousel/2.jpg"
import three from "../images/carousel/3.jpg"
import four from "../images/carousel/4.jpg"

import {productsData} from "../data"

const ProductComponent = (props) => {

    const {category} = useParams()
    const products = productsData.filter(product => product.category === category) 

    return (
        <div>
            <div className="jumbotron">
                <Carousel fade="true" controls={false} indicators={false} interval="3000" pause="hover" >
                    <Carousel.Item className="carousel">
                        <img
                            className="d-block carousel-image"
                            src={one}
                            alt="A man wearing a suit"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="carousel">
                        <img
                            className="d-block carousel-image"
                            src={two}
                            alt="Shirts on a table"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="carousel">
                        <img
                            className="d-block carousel-image"
                            src={three}
                            alt="Dress shirts"
                        />
                    </Carousel.Item> 
                    <Carousel.Item className="carousel">
                        <img
                            className="d-block carousel-image"
                            src={four}
                            alt="A man posing"
                        />
                    </Carousel.Item> 
                </Carousel> 
            </div>

            <h2 className="category-title">{category[category.length - 1] === "s" ? category : category + "s"}</h2>
            <h1>{products.map(product => {
                return (
                    <h3>{product.name}</h3>
                )
            })}</h1>
        </div>
    );
};

export default ProductComponent;