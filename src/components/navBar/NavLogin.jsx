import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Form, Nav, Navbar} from "react-bootstrap";

export default function NavLogin () {
    return(
        <Navbar bg="dark" expand="lg">
            <Container fluid>
            <Navbar.Brand href="#" style={{ color: 'white' }}>Butuh Laptop</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px', color: 'white' }}
                navbarScroll
                >
                <Nav.Link><Link style={{ color: 'white' }} to="/">Home</Link></Nav.Link>
                <Nav.Link><Link style={{ color: 'white' }} to="/product">Produk</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}