import React from 'react';
import './header.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Header = (props) => {
    return (
        <Navbar bg="dark" expand="lg" sticky="top" style={{ marginBottom: 30 }}>
            <Container>
                <Navbar.Brand href="#home">Udemy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className=" mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Course</Nav.Link>

                    </Nav>
                    <p className="head-cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        {
                            props.cart.length > 0 ? `( ${props.cart.length} )` : ''
                        }
                    </p>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;