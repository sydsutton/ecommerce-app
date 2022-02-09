import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import CarouselComponent from "./CarouselComponent"
import ItemCardComponent from "./ItemCardComponent"
import {Pagination, Stack} from "@mui/material"

import {productsData} from "../data"

const CategoryComponent = () => {
    const {category} = useParams()
    const [page, setPage] = useState(1)

    //scrolling up to the top of the page every time the page changes
    useEffect(() => {
        if(page > 1){
            window.scroll(0,500)
        } else {
            window.scroll(0,0)
        }
    }, [page])

    //Added this so that I can reuse the Category component for the brands. 
    //Then used conditional rendering in the filtering of the data
    const listOfCategories = ["jeans", "hoodie", "jackets", "suits", "tshirt"]

    //Pagination logic

    const filteredData = productsData.filter(product => listOfCategories.includes(category) ? product.category === category : product.brand === category)
    const numberOfPages = Math.ceil((filteredData.length) / 10)
    const firstPage = numberOfPages - (numberOfPages - 1)
    const lastPage = Math.ceil(filteredData.length)
    const products = filteredData.slice(page === firstPage ? 0 : (page - 1) * 10, page === lastPage ? filteredData.length - (numberOfPages - 1) * 10 : page * 10)

    return (
        <div className="pb-5">
            {/* <div className="jumbotron">
                <CarouselComponent />
            </div> */}

            {/* Did this to make the category plural for the title */}
            <h2 className="category-title">{listOfCategories.includes(category) && category[category.length - 1] !== "s" ? category + "s" : category }</h2>
            <div className="container">
                <div className="row justify-content-center">
                    {products.map((product, index) => {
                        // Had to put this in because some of the discounts were larger than the
                        //original prices, causing a negative price on a lot of items
                        const salePrice = product.originPrice > product.discount ? (product.originPrice - product.discount) : product.discount - product.originPrice

                        return (
                            <div className="product-link m-2" key={index}>
                                <ItemCardComponent salePrice={salePrice} product={product} index={index} category={category} />
                            </div>
                        )
                    })}
                </div>
            </div>
            {numberOfPages === 1 ? 
                null 
            : 
                <Stack spacing={2}>
                    <Pagination 
                        color="primary"
                        count={numberOfPages} 
                        className="my-3 mx-auto"
                        page={page}
                        onChange={(e, value) => setPage(value)}
                    />
                </Stack>
            }
        </div>
    );
};

export default CategoryComponent;
