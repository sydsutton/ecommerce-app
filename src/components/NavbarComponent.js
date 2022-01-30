import React from 'react';
import {Link} from "react-router-dom"

const NavbarComponent = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <Link to ="/">Home</Link>
            <Link to ="/products">Products</Link>
        </div>
    );
};

export default NavbarComponent;