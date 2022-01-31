import React, {useState} from 'react';
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router';
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
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false)
    const [signInActive, setSignInActive] = useState(false)

    const navigate = useNavigate()

    const linkClass = "w-100 text-decoration-none drawer-item"
    const buttonClass = "w-75 mx-auto d-flex justify-content-evenly button-item text-light"

    const handleNavigate = ({e, signin}) => {
        e.preventDefault()
        navigate("/signin")
        setIsOffCanvasOpen(false)
    }

    return (

        <Navbar bg="dark" variant="dark" expand="md">
            <Container fluid>
                <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                <div className="w-50">
                    <Nav className="d-none d-md-block">
                        <Navbar.Collapse className="w-100 justify-content-evenly">
                            <Link to="/" className="text-decoration-none">
                                <Nav.Link href="/">Home</Nav.Link>
                            </Link>
                            <NavDropdown title="Products" bg="dark">
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
                                <Nav.Link href="/contact">Contact</Nav.Link>
                            </Link>
                            <Link to="/signin" className="text-decoration-none">
                                <Nav.Link 
                                    className={signInActive ? "active" : ""}
                                    href="/signin"
                                >Sign in
                                </Nav.Link>
                            </Link>
                        </Navbar.Collapse>
                    </Nav>
                </div>
                <Navbar.Toggle onClick={() => setIsOffCanvasOpen(true)}>
                    <MenuOpen 
                        className="d-block d-md-none mr-3 text-light"
                    />
                </Navbar.Toggle>
                <Navbar.Offcanvas 
                    className="bg-dark text-light d-block d-md-none" 
                    placement="end" 
                    show={isOffCanvasOpen} 
                    onHide={() => setIsOffCanvasOpen(false)}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Dress your Besst</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/">
                                <Link to="/" className="text-decoration-none">Home</Link>
                            </Nav.Link>
                            <NavDropdown title="Products">
                                <NavDropdown.Item href="/products">Hoodies</NavDropdown.Item>
                                <NavDropdown.Item href="/products">Jeans</NavDropdown.Item>
                                <NavDropdown.Item href="/products">Jackets</NavDropdown.Item>
                                <NavDropdown.Item href="/products">Suits</NavDropdown.Item>
                                <NavDropdown.Item href="/products">T-shirts</NavDropdown.Item>
                            </NavDropdown>
                            {/* <Link to="/contact" className="text-decoration-none"> */}
                                <Nav.Link eventKey={1} href="/contact">Contact</Nav.Link>
                            {/* </Link> */}
                            {/* <Link to="/signin" className="text-decoration-none"> */}
                                <Link 
                                    to="/signin"
                                    className={signInActive ? "active" : ""}
                                    onClick={() => {
                                        setSignInActive(true)
                                        setIsOffCanvasOpen(false)
                                    }}
                                >
                                    Sign in
                                </Link>
                            {/* </Link> */}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
                </Container>
            </Navbar>
        // <Navbar className="navbar px-3 shadow" expand="md">
        //     <Container>
        //         <Navbar.Brand className="text-decoration-none" href="/">
        //             <h5 className="d-inline brand">Let us help you dress your&nbsp;&nbsp;</h5><h2 className="brand d-inline">BEST</h2>
        //         </Navbar.Brand>
        //         {/* <div className="d-none d-md-block w-50">
        //             <ul className="navbar-nav d-flex flex-row w-100 justify-content-evenly">
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/">
        //                         <div className="nav-link" id="home">home</div>
        //                     </Link>
        //                 </li>
        //                 <NavDropdown variant="transparent" title="Products" menuVariant='dark'>
        //                     <Nav>
        //                         <NavDropdown.Item>
        //                             <Link className="dropdown-item" to="">hoodies</Link>
        //                         </NavDropdown.Item>
        //                         <NavDropdown.Item>
        //                             <Link className="dropdown-item" to="">jeans</Link>
        //                         </NavDropdown.Item>
        //                         <NavDropdown.Item>
        //                             <Link className="dropdown-item" to="">jackets</Link>
        //                         </NavDropdown.Item>
        //                         <NavDropdown.Item>
        //                             <Link className="dropdown-item" to="">pants</Link>
        //                         </NavDropdown.Item>
        //                         <NavDropdown.Item>
        //                             <Link className="dropdown-item" to="">shirts</Link>
        //                         </NavDropdown.Item>
        //                     </Nav>
        //                 </NavDropdown>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/contact">contact</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/signin">sign in</Link>
        //                 </li>
        //             </ul> */}
        //         {/* </div> */}
        //         <Nav className="w-50">
        //             <Navbar.Collapse className="border w-100 justify-content-evenly">
        //                 <Link to="/">
        //                     <Nav.Link href="/">Home</Nav.Link>
        //                 </Link>
        //                 <NavDropdown title="Products" variant="dark">
        //                     <NavDropdown.Item href="/products">hoodies</NavDropdown.Item>
        //                     <NavDropdown.Item href="/products">jeans</NavDropdown.Item>
        //                     <NavDropdown.Item href="/products">jackets</NavDropdown.Item>
        //                     <NavDropdown.Item href="/products">suits</NavDropdown.Item>
        //                     <NavDropdown.Item href="/products">t-shirts</NavDropdown.Item>
        //                 </NavDropdown>
        //                 <Link to="/contact">
        //                     <Nav.Link href="/contact">Contact</Nav.Link>
        //                 </Link>
        //                 <Link to="/signin">
        //                     <Nav.Link href="/signin">Sign in</Nav.Link>
        //                 </Link>
        //             </Navbar.Collapse>
        //         </Nav>
        //     </Container>
        //     <MenuOpen 
        //         className="d-block d-md-none mr-3 text-light"
        //         onClick={() => setDrawerOpen(!drawerOpen)}
        //     />
        //     <Drawer 
        //         className="d-block d-md-none"
        //         variant={'temporary'}
        //         anchor={'right'}
        //         open={drawerOpen}
        //         onClose={() => toggleDrawer()}
        //     >
        //         <Box 
        //             className="d-block d-md-none"
        //             className="drawer"
        //             role="presentation" 
        //             onClick={() => toggleDrawer()}
        //         >
        //             <List>
        //                 <ListItem className="p-0">
        //                     <Link to ="/" className={linkClass}>
        //                         <div className={buttonClass}>
        //                             <Home fontSize="small" />home
        //                         </div>
        //                     </Link>
        //                 </ListItem>
        //                 <hr />
        //                 <h5 className="subtitle">The Shop</h5>
        //                 <ListItem className="p-0">
        //                     <Link to ="/products" className={linkClass}>
        //                         <div className={buttonClass}>
        //                             <GiHoodie />hoodies
        //                         </div>
        //                     </Link>
        //                 </ListItem>
        //                 <ListItem className="p-0">
        //                     <Link to ="/products" className={linkClass}>
        //                         <div className={buttonClass}>
        //                             <GiArmoredPants />jeans
        //                         </div>
        //                     </Link>
        //                 </ListItem>
        //                 <ListItem className="p-0">
        //                     <Link to ="/products" className={linkClass}>
        //                         <div className={buttonClass}>
        //                             <GiMonclerJacket />jackets
        //                         </div>
        //                     </Link>
        //                 </ListItem>
        //                 <ListItem className="p-0">
        //                     <Link to ="/products" className={linkClass}>
        //                         <div className={buttonClass}>
        //                             <FaBlackTie />suits
        //                         </div>
        //                     </Link>
        //                 </ListItem>
        //                 <ListItem className="p-0">
        //                     <Link to ="/products" className={linkClass}>
        //                         <div className={buttonClass}>
        //                             <FaTshirt />shirts
        //                         </div>
        //                     </Link>
        //                 </ListItem>
        //                 <hr />
        //                 <ListItem className="p-0">
        //                     <Link to ="/contact" className={linkClass}>
        //                         <div className={buttonClass}>
        //                             <AlternateEmail fontSize="small"/>contact
        //                         </div>
        //                     </Link>
        //                 </ListItem>
        //                 <ListItem className="p-0">
        //                     <Link to ="/sigin" className={linkClass}>
        //                         <div className={buttonClass}>
        //                             <FaSignInAlt fontSize="small"/>sign in
        //                         </div>
        //                     </Link>
        //                 </ListItem>
        //             </List>
        //         </Box>
        //     </Drawer>
        // </Navbar>
    );
};

export default NavbarComponent;