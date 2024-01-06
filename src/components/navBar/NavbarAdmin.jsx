import React from "react";
import { useNavigate } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Nav, Navbar, Form, NavDropdown, Offcanvas, Col, Row } from "react-bootstrap";

export default function NavbarAdmin () {
  const Navigate = useNavigate()
  
  return(
      <>
        {['xl'].map((expand) => (
          <Navbar key={expand} bg="light" expand={expand} className="bg-body-tertiary mb-3">
            <Container fluid>
              <Navbar.Brand href="#">Halo, Admin</Navbar.Brand>
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
                      <Nav.Link onClick={() => Navigate('/admin/listproduct')}>Produk</Nav.Link>
                      <Nav.Link onClick={() => Navigate('/admin/listorder')}>Order Masuk</Nav.Link>
                      <Nav.Link onClick={() => Navigate('/admin/listuser')}>User</Nav.Link>
                      <Nav.Link onClick={() => Navigate('*')}>Feedback</Nav.Link>

                  </Nav>
                  <Nav className="d-flex">
                    <Nav.Link href="#action2">Logout</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    )
}