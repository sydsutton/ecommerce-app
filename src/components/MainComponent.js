import React from 'react';
import '../styles/styles.css';
import {Carousel} from "react-bootstrap"
import {categoriesData} from "../data"

const MainComponent = () => {
    return (
        <div>
            <div className="jumbotron">
                <Carousel variant="dark">
                    {categoriesData.map(category => {
                        return (
                            <Carousel.Item className="carousel">
                                <img
                                    className="carousel-image img-fluid"
                                    src={category.imageUrl}
                                    alt={category.title}
                                />
                            </Carousel.Item> 
                        )
                        })}
                </Carousel> 
            </div>
        </div>
    );
};

export default MainComponent;
