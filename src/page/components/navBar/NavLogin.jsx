import React from "react";
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
                <Nav.Link href="#action1" style={{ color: 'white' }}>Home</Nav.Link>
                <Nav.Link href="#action2" style={{ color: 'white' }}>Product</Nav.Link>
                <Nav.Link href="#action2" style={{ color: 'white' }}>About Us</Nav.Link>
                </Nav>
                <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}