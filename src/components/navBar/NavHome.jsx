import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Nav, Navbar, Form, NavDropdown, Offcanvas, Col, Row } from "react-bootstrap";

export default function NavHome () {
    return(
        <>
        {['xl'].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="bg-body-tertiary mb-3">
              <Container fluid>
                <Navbar.Brand href="#">ButuhLaptop Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-center flex-grow-1 pe-3">
                        <Nav.Link href="#action1">Produk</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <Nav.Link href="#action2">Feedback</Nav.Link>
                    </Nav>
                    <Nav className="d-flex">
                        <Nav.Link href="#action1">Login</Nav.Link>
                        <Nav.Link href="#action2">Register</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </>
    )
}