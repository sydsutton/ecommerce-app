import React from 'react';
import '../styles/styles.css';
import {productsData} from "../data"

const MainComponent = () => {
    return (
        <div>
            <h1>Main component</h1>
            <div className="one"></div>
            <div className="two">
                <p>Text</p>
                <button>Learn more</button>
            </div>
            <div className="three"></div>
        </div>
    );
};

export default MainComponent;