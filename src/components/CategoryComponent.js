import React from 'react';
import {Link, useParams} from "react-router-dom"
import {Carousel} from "react-bootstrap"

import one from "../images/carousel/1.jpg"
import two from "../images/carousel/2.jpg"
import three from "../images/carousel/3.jpg"
import four from "../images/carousel/4.jpg"

import {productsData} from "../data"

const CategoryComponent = (props) => {

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

{/* Did this to make the category plural for the title */}

            <h2 className="category-title">{category[category.length - 1] === "s" ? category : category + "s"}</h2>
            <h1>{products.map(product => {
                return (
                    <Link to={`/products/${category}/${product.productCode}`}>
                        <h3>{product.name}</h3>
                    </Link>
                )
            })}</h1>
        </div>
    );
};

export default CategoryComponent;

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