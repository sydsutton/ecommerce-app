import React from 'react';
import { Link } from "react-router-dom"
import { AiOutlineArrowRight } from "react-icons/ai"
import FreeShip from './FreeShipComponent';

const MainComponent = () => {
    return (
        <div>
            <div className="shipping-div">
                <h4 className="my-auto border-bottom">Store-wide sales happening now</h4>
            </div>

            <div className="jumbo-container mt-5 shadow">
                <Link to="/products/suits" className="text-decoration-none link-width">
                    <div className="jumbo-title p-2 shadow">
                        <h4 className="jumbo-subtitle">Ultra sleek. Ultra fitted.</h4>
                        <div className="check-it-out">
                            <div>Check out our suits &nbsp;</div>
                            <AiOutlineArrowRight />
                        </div>
                    </div>
                </Link>
            </div>

            <div className="spacer-div" />

            <div className="bg-color">
                <h5 className="free-ship-subtitle">Free shipping on 50+ items throughout the store</h5>
                <div>
                    <FreeShip />
                </div>
            </div>

            <div className="spacer-div" />
            
        </div>
    );
};

export default MainComponent;
