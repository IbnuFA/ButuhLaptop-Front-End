import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Nav, Navbar} from "react-bootstrap";

export default function NavHome () {
    return(
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                        <Nav.Link href="#action1" style={{ color: 'white' }}>Home</Nav.Link>
                        <Nav.Link href="#action2" style={{ color: 'white' }}>Product</Nav.Link>
                        <Nav.Link href="#action2" style={{ color: 'white' }}>About Us</Nav.Link>
                    </Nav>
                    <Nav className="d-flex">
                        <Button className="mx-2" variant="outline-success">Login</Button>
                        <Button variant="outline-success">Register</Button>
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    )
}