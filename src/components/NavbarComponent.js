import React, {useState} from 'react';
import {Link} from "react-router-dom"
import {
    Drawer, 
    Box,
    List,
    ListItem,
    ListItemText, 
    Button
} from "@mui/material"

import {GiHoodie, GiArmoredPants, GiMonclerJacket} from "react-icons/gi"
import {FaBlackTie, FaTshirt} from "react-icons/fa"

import {
    MenuOpen,
    Home,
    Close,
    AlternateEmail
} from '@mui/icons-material';

const NavbarComponent = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const linkClass = "w-100 text-decoration-none drawer-item"
    const buttonClass = "w-75 mx-auto d-flex justify-content-evenly button-item text-light"

    return (
        <nav className="navbar navbar-dark px-3" >
            <div></div>
            <Link className="text-decoration-none" to="/"><h2 className="brand">dVine</h2></Link>
            <div className="d-none d-md-block w-50">
                <ul className="navbar-nav d-flex flex-row w-100 justify-content-evenly">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a id="navbar-dropdown" aria-expanded="true" className="nav-link dropdown-toggle" to="/products">Products</a>
                        <div arialabelledby="navbar-dropdown" className="dropdown-menu">
                            <Link className="dropdown-item" to="">Hoodies</Link>
                            <Link className="dropdown-item" to="">Jeans</Link>
                            <Link className="dropdown-item" to="">Jackets</Link>
                            <Link className="dropdown-item" to="">Pants</Link>
                            <Link className="dropdown-item" to="">Shirts</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <MenuOpen 
                className="d-block d-md-none mr-3 text-light"
                onClick={() => setDrawerOpen(!drawerOpen)}
            />
            <Drawer 
                className="d-block d-md-none"
                variant={'temporary'}
                anchor={'right'}
                open={drawerOpen}
                onClose={() => toggleDrawer()}
            >
                <Box 
                    className="d-block d-md-none"
                    className="drawer"
                    role="presentation" 
                    onClick={() => toggleDrawer()}
                >
                    {/* <Button onClick={() => toggleDrawer()}><Close color="action" /></Button> */}
                    <List>
                        <ListItem className="p-0">
                            <Link to ="/" className={linkClass}>
                                <div className={buttonClass}>
                                    <Home fontSize="small" />home
                                </div>
                            </Link>
                        </ListItem>
                        <hr />
                        <h5 className="subtitle small">The Shop</h5>
                        <ListItem className="p-0">
                            <Link to ="/products" className={linkClass}>
                                <div className={buttonClass}>
                                    <GiHoodie />hoodies
                                </div>
                            </Link>
                        </ListItem>
                        <ListItem className="p-0">
                            <Link to ="/products" className={linkClass}>
                                <div className={buttonClass}>
                                    <GiArmoredPants />jeans
                                </div>
                            </Link>
                        </ListItem>
                        <ListItem className="p-0">
                            <Link to ="/products" className={linkClass}>
                                <div className={buttonClass}>
                                    <GiMonclerJacket />jackets
                                </div>
                            </Link>
                        </ListItem>
                        <ListItem className="p-0">
                            <Link to ="/products" className={linkClass}>
                                <div className={buttonClass}>
                                    <FaBlackTie />suits
                                </div>
                            </Link>
                        </ListItem>
                        <ListItem className="p-0">
                            <Link to ="/products" className={linkClass}>
                                <div className={buttonClass}>
                                    <FaTshirt />shirts
                                </div>
                            </Link>
                        </ListItem>
                        <hr />
                        <ListItem className="p-0">
                            <Link to ="/contact" className={linkClass}>
                                <div className={buttonClass}>
                                    <AlternateEmail fontSize="small"/>contact
                                </div>
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </nav>
    );
};

export default NavbarComponent;