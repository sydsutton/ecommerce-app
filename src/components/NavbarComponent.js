import React, {useState } from 'react';
import {Link} from "react-router-dom"
import { useLocation } from 'react-router';
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
    GiHoodie, 
    GiArmoredPants, 
    GiMonclerJacket
} from "react-icons/gi"

import {
    FaBlackTie, 
    FaTshirt,
    FaSignInAlt
} from "react-icons/fa"

import {
    MenuOpen,
    Home,
    AlternateEmail
} from '@mui/icons-material';

import {categoriesData} from "../data"

const NavbarComponent = () => {
    const location = useLocation()

    const categories = categoriesData.map(category => {
        return (
            <NavDropdown.Item key={category} href={`/products/${category.routeName}`}>{category.title}</NavDropdown.Item>
        )
    })

    const sideBarCategories = categoriesData.map(category => {
        return (
            <ListItem key={category}>
                <Nav.Link className="w-100 text-light nav-link" href={`/products/${category.routeName}`}>
                    {location.pathname === `/products/${category.routeName}` ? <FaBlackTie size={18} /> : null} {category.title}
                </Nav.Link>
            </ListItem>
        )
    })

    return (

        <Navbar className="navbar" variant="dark" expand="md">
            <Container fluid>
                <Navbar.Brand><Link to="/" className="text-decoration-none brand">Best Drest</Link></Navbar.Brand>
                <Nav className="d-none d-md-block w-75" activeKey={location.pathname}>
                    <Navbar.Collapse className="justify-content-evenly">
                        <Link to="/" className="text-decoration-none">
                            <Nav.Link href="/" className="nav-link">
                                <Home fontSize="small" />{location.pathname === "/" ? "  Home" : null}
                            </Nav.Link>
                        </Link>
                        <NavDropdown title="Products">
                            {categories}
                        </NavDropdown>
                        <Link to="/contact" className="text-decoration-none">
                            <Nav.Link href="/contact" className="nav-link">
                                <AlternateEmail fontSize="small" />{location.pathname === "/contact" ? "  Contact" : null}
                            </Nav.Link>
                        </Link>
                        <Link to="/signin" className="text-decoration-none">
                            <Nav.Link href="/signin" className="nav-link">
                                <FaSignInAlt size={15} />{location.pathname === "/signin" ? "  Sign In" : null}
                            </Nav.Link>
                        </Link>
                    </Navbar.Collapse>
                </Nav>
                <Navbar.Toggle >
                    <MenuOpen 
                        className="d-block d-md-none mr-3 text-light"
                    />
                </Navbar.Toggle>
                <Navbar.Offcanvas 
                    className="d-block d-md-none" 
                    id="off-canvas"
                    placement="end" 
                    style={{maxWidth: "250px"}}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className="text-light">Best Drest</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav activeKey={location.pathname} className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/signin" className="text-light nav-link mb-2">
                                <FaSignInAlt size={15} />{location.pathname === "/signin" ? "  Sign In" : null}
                            </Nav.Link>
                            <Nav.Link href="/" className="text-light nav-link">
                                <Home fontSize="small" />{location.pathname === "/" ? "  Home" : null}
                            </Nav.Link>
                            <h6 className="legend">Products</h6>
                            <List className="list-border">
                                {sideBarCategories}
                            </List>
                            <Nav.Link href="/contact" className="text-light nav-link mt-2">
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