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

import {BsCartFill} from "react-icons/bs"

import {categoriesData, productsData} from "../data"

const NavbarComponent = () => {
    const location = useLocation()

    const {savedItems, setIsModalOpen, isModalOpen, isDrawerOpen, setIsDrawerOpen} = useContext(Context)

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
            className="navbar shadow mb-5" 
            variant="dark" 
            expand="md" 
            sticky="top"
        > 
            <Container fluid>
                <Navbar.Brand>
                    <Link to="/" className="text-decoration-none brand">
                        <img src={logo} height="25" alt="logo" /><strong>Thetic</strong>
                    </Link>
                </Navbar.Brand>
                <Nav className="d-none d-md-block w-75" activeKey={location.pathname}>
                    <Navbar.Collapse className="justify-content-evenly">
                        <Link to="/" className="text-decoration-none">
                            <Nav.Link href="/" className="nav-link text-dark">
                                <Home fontSize="small" />{location.pathname === "/" ? "  Home" : null}
                            </Nav.Link>
                        </Link>
                        <NavDropdown menuVariant="dark" id="productDropdown" title="Products">
                            {categories}
                        </NavDropdown>
                        <NavDropdown menuVariant="dark" id="brandDropdown" title="Brands">
                            <div className="brand-list-container">
                                {brandsComp}
                            </div>
                        </NavDropdown>
                        <Link to="/contact" className="text-decoration-none">
                            <Nav.Link href="/contact" className="nav-link text-dark">
                                <AlternateEmail fontSize="small" />{location.pathname === "/contact" ? "  Contact" : null}
                            </Nav.Link>
                        </Link>
                        <button
                            className="text-decoration-none nav-link signin-btn text-dark"
                            onClick={() => setIsModalOpen(true)}
                        >
                                <FaSignInAlt size={15} />{isModalOpen ? "  Sign In" : null}
                        </button>
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
                    <Offcanvas.Header closeButton>
                        {/* <Offcanvas.Title className="text-light">S <strong>Thetic</strong></Offcanvas.Title> */}
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav activeKey={location.pathname} className="justify-content-end flex-grow-1 pe-3">
                            <button
                                className="text-decoration-none nav-link signin-btn text-dark"
                                onClick={() => setIsModalOpen(true)}
                            >
                                <FaSignInAlt size={15} />{isModalOpen ? "  Sign In" : null}
                            </button>
                            <Nav.Link href="/" className="text-dark nav-link">
                                <Home fontSize="small" />{location.pathname === "/" ? "  Home" : null}
                            </Nav.Link>
                            <h6 className="legend">Products</h6>
                            <List className="list-border">
                                <NavDropdown 
                                    menuVariant="dark" 
                                    id="brandDropdown" 
                                    title="Brands" 
                                    className="brand-title"
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