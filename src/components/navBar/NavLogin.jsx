import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
// import Logo from "../../asset/img/LogoSimple.png";


export default function NavLogin() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"  style={{ color: "white" }}>
            {/* <img src={Logo} className="navLogo" /> Butuh Laptop */}
            Butuh Laptop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", color: "white" }}
            navbarScroll
          >
            <Nav.Link>
              <Link style={{ color: "white" }} to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ color: "white" }} to="/product">
                Produk
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ color: "white" }} to="/feedback">
                Feedback
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
