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
    Home
} from '@mui/icons-material';

const NavbarComponent = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light" >
            <div></div>
            <h2>Clothing</h2>
            <ul className="d-none d-sm-block navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/products">Products</Link>
                </li>
            </ul>
            <MenuOpen 
                className="text-dark d-block d-sm-none"
                onClick={() => setDrawerOpen(!drawerOpen)}
            />
            <Drawer 
                className="d-block d-sm-none"
                anchor={'right'}
                open={drawerOpen}
                onClose={() => toggleDrawer()}
            >
                <Box 
                    className="drawer d-block d-sm-none"
                    role="presentation" 
                    onClick={() => toggleDrawer()}
                >
                    <List>
                        <ListItem>
                            <Link to ="/"><Home />Home</Link>
                        </ListItem>
                        <ListItem>
                            <Link to ="/products"><GiHoodie size={20} />Hoodies</Link>
                        </ListItem>
                        <ListItem>
                            <Link to ="/products"><GiArmoredPants size={20} />Jeans</Link>
                        </ListItem>
                        <ListItem>
                            <Link to ="/products"><GiMonclerJacket size={20} />Jackets</Link>
                        </ListItem>
                        <ListItem>
                            <Link to ="/products"><FaBlackTie size={20} />Suits</Link>
                        </ListItem>
                        <ListItem>
                            <Link to ="/products"><FaTshirt size={20} />Shirts</Link>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </nav>
    );
};

export default NavbarComponent;