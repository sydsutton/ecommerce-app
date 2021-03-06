import React, {useEffect, useContext} from 'react';
import {Context} from "../Context"
import {Link} from "react-router-dom"
import { useLocation } from 'react-router';
import logo from "../images/ecommlogo.png"

import {
    Nav,
    Navbar,
    NavDropdown,
    Container,
    Offcanvas
} from "react-bootstrap"
import {
    List,
    ListItem,
} from "@mui/material"

import {
    FaBlackTie, 
    FaSignInAlt
} from "react-icons/fa"

import {
    MenuOpen,
    Home,
    AlternateEmail
} from '@mui/icons-material';

import { BsFillCartFill } from "react-icons/bs"

import {categoriesData, productsData} from "../data"

const NavbarComponent = () => {
    const location = useLocation()

    const {savedItems, isDrawerOpen, setIsDrawerOpen, isLoggedIn} = useContext(Context)

    const categories = categoriesData.map(category => {
        return (
            <NavDropdown.Item key={category} href={`/products/${category.routeName}`}>{category.title}</NavDropdown.Item>
        )
    })

    //Brands dropdown logic
    const brands = productsData.map(item => item.brand)
    const brandsList = new Set(brands)

    const brandsComp = [...brandsList].sort().map((brand, index) => {
        return (
            <NavDropdown.Item key={index} href={`/products/${brand}`}>{brand}</NavDropdown.Item>
        )
    })
    //Drawer component
    const sideBarCategories = categoriesData.map((category, index) => {
        return (
            <ListItem key={index}>
                <Nav.Link className="w-100 nav-link text-center" href={`/products/${category.routeName}`}>
                    <div className="text-dark">{location.pathname === `/products/${category.routeName}` ? <FaBlackTie size={18} /> : null} {category.title}</div>
                </Nav.Link>
            </ListItem>
        )
    })

    return (

        <Navbar 
            className="navbar shadow" 
            variant="dark" 
            expand="md" 
            sticky="top"
        > 
            <Container fluid>
                <Navbar.Brand>
                    <Link to="/" className="text-decoration-none brand">
                        <img src={logo} height="25" alt="logo" /><strong>Thetik</strong>
                    </Link>
                </Navbar.Brand>
                <Nav className="d-none d-md-block w-75" activeKey={location.pathname}>
                    <Navbar.Collapse className="justify-content-evenly">
                        <Link to="/" className="text-decoration-none">
                            <Nav.Link href="/" className="nav-link text-dark">
                                <Home fontSize="small" />{location.pathname === "/" ? "  Home" : null}
                            </Nav.Link>
                        </Link>
                        <NavDropdown id="productDropdown" title="Products">
                            {categories}
                        </NavDropdown>
                        <NavDropdown id="brandDropdown" title="Brands">
                            <div className="brand-list-container">
                                {brandsComp}
                            </div>
                        </NavDropdown>
                        <Link to="/contact" className="text-decoration-none">
                            <Nav.Link href="/contact" className="nav-link text-dark">
                                <AlternateEmail fontSize="small" />{location.pathname === "/contact" ? "  Contact" : null}
                            </Nav.Link>
                        </Link>
                        {savedItems.length === 0 ? 
                            <button disabled className="nav-link text-dark disabled">
                                <BsFillCartFill size={15} style={{color: "grey"}} />
                            </button>
                        :
                            <Link to="/cart" className="text-decoration-none">
                                <Nav.Link href="/cart" className="nav-link text-dark">
                                    <BsFillCartFill size={15} />&nbsp;{savedItems.length !== 0 ? savedItems.length : null} 
                                </Nav.Link>
                            </Link>
                        }
                    </Navbar.Collapse>
                </Nav>
                <Navbar.Toggle>
                    <MenuOpen 
                        className="d-block d-md-none mr-3 text-dark"
                        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                    />
                </Navbar.Toggle>
                <Navbar.Offcanvas 
                    className="d-block d-md-none" 
                    id="off-canvas"
                    placement="end" 
                    style={{maxWidth: "250px"}}
                    show={isDrawerOpen}
                    onHide={() => setIsDrawerOpen(!isDrawerOpen)}
                >
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav activeKey={location.pathname} className="justify-content-end flex-grow-1 pe-3">
                            {savedItems.length === 0 ? 
                                <button disabled className="nav-link text-dark disabled">
                                    <BsFillCartFill size={15} style={{color: "grey"}} />
                                </button>
                            :
                            <Link to="/cart" className="text-dark text-decoration-none" onClick={() => setIsDrawerOpen(false)}>
                                <Nav.Link href="/cart" className="text-dark nav-link">
                                    <BsFillCartFill fontSize="small" />
                                    &nbsp;{savedItems.length}
                                </Nav.Link>
                            </Link>
                            }
                            <Nav.Link href="/" className="text-dark nav-link">
                                <Home fontSize="small" />{location.pathname === "/" ? "  Home" : null}
                            </Nav.Link>
                            <h6 className="legend">Products</h6>
                            <List className="list-border">
                                <NavDropdown 
                                    menuVariant="dark" 
                                    id="brandDropdown" 
                                    title="Brands" 
                                    className="brand-title mt-2"
                                >
                                    <div className="brand-list-container">
                                        {brandsComp}
                                    </div>
                                </NavDropdown>
                                {sideBarCategories}
                            </List>
                            <Nav.Link href="/contact" className="text-dark nav-link mt-2">
                                <AlternateEmail fontSize="small" />{location.pathname === "/contact" ? "  Contact" : null}
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;