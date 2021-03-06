import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import ItemCardComponent from "./ItemCardComponent"
import { Pagination, Stack } from "@mui/material"

import {productsData} from "../data"

const CategoryComponent = () => {

    const {category} = useParams()
    const [page, setPage] = useState(1)

    //scrolling up to the top of the page every time the page changes
    useEffect(() => {
        window.scroll(0,0)
    }, [page, category])

    //Added this so that I can reuse the Category component for the brands. 
    //Then used conditional rendering in the filtering of the data
    const listOfCategories = ["jeans", "hoodie", "jackets", "suits", "tshirt"]

    //Pagination logic

    const filteredData = productsData.filter(product => listOfCategories.includes(category) ? product.category === category : product.brand === category)
    const numberOfPages = Math.ceil((filteredData.length) / 12)
    const firstPage = numberOfPages - (numberOfPages - 1)
    const lastPage = Math.ceil(filteredData.length)
    const products = filteredData.slice(page === firstPage ? 0 : (page - 1) * 12, page === lastPage ? filteredData.length - (numberOfPages - 1) * 12 : page * 12)

    return (
        <div className="pb-5">
            {/* <div className="jumbotron">
                <CarouselComponent />
            </div> */}

            {/* Did this to make the category plural for the title */}
            <h1 className="category-title">{listOfCategories.includes(category) && category[category.length - 1] !== "s" ? category + "s" : category }</h1>
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
                        // variant="contained"
                        color="primary"
                        shape="rounded"
                        id="pagination"
                        count={numberOfPages} 
                        className="my-3 mx-auto p-1 rounded mb-5"
                        page={page}
                        onChange={(e, value) => setPage(value)}
                        sx={{backgroundColor: "rgba(255, 255, 255, .25)", backdropFilter: "blur(5px)"}}
                    />
                </Stack>
            }
        </div>
    );
};

export default CategoryComponent;
