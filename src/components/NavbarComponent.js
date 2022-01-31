import React, {useState } from 'react';
import {Link} from "react-router-dom"
import { useNavigate, useLocation } from 'react-router';
import {
    Dropdown,
    Nav,
    Navbar,
    NavDropdown,
    Container,
    Offcanvas
} from "react-bootstrap"
import {
    Drawer, 
    Box,
    List,
    ListItem,
    ListItemText, 
    Button
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
    Close,
    AlternateEmail
} from '@mui/icons-material';

const NavbarComponent = () => {
    const location = useLocation()

    return (

        <Navbar className="navbar" bg="dark" variant="dark" expand="md">
            <Container fluid>
                <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                <Nav className="d-none d-md-block w-75" activeKey={location.pathname}>
                    <Navbar.Collapse className="justify-content-evenly">
                        <Link to="/" className="text-decoration-none">
                            <Nav.Link href="/" className="nav-link">
                                <Home fontSize="small" />{location.pathname === "/" ? "  Home" : null}
                            </Nav.Link>
                        </Link>
                        <NavDropdown title="Products">
                            <NavDropdown.Item href="/products">hoodies</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/products">jeans</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/products">jackets</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/products">suits</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="/products">t-shirts</NavDropdown.Item>
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
                        <Offcanvas.Title className="text-light">Dress your Besst</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav activeKey={location.pathname} className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/" className="text-light nav-link d-flex justify-content-evenly">
                                <Home fontSize="small" />{location.pathname === "/" ? "  Home" : null}
                            </Nav.Link>
                            <h6 className="legend">Products</h6>
                            <List className="list-border">
                                <ListItem>
                                    <Nav.Link className="w-100 text-light nav-link" href="/products">Hoodies</Nav.Link>
                                </ListItem>
                                <ListItem>
                                    <Nav.Link className="w-100 text-light nav-link" href="/products">Jeans</Nav.Link>
                                </ListItem>
                                <ListItem>
                                    <Nav.Link className="w-100 text-light nav-link" href="/products">Jackets</Nav.Link>
                                </ListItem>
                                <ListItem>
                                    <Nav.Link className="w-100 text-light nav-link" href="/products">Suits</Nav.Link>
                                </ListItem>
                                <ListItem>
                                    <Nav.Link className="w-100 text-light nav-link" href="/products">T-shirts</Nav.Link>
                                </ListItem>
                            </List>
                            <Nav.Link href="/contact" className="text-light nav-link d-flex justify-content-evenly">
                                <AlternateEmail fontSize="small" />{location.pathname === "/contact" ? "  Contact" : null}
                            </Nav.Link>
                            <Nav.Link href="/signin" className="text-light nav-link d-flex justify-content-evenly">
                                <FaSignInAlt size={15} />{location.pathname === "/signin" ? "Sign In" : null}
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;