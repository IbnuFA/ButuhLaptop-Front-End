import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Container, Button, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../features/authSlice";

export default function NavUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#action2" style={{ color: "white" }}>
                Product
              </Nav.Link>
              <Nav.Link href="#action2" style={{ color: "white" }}>
                About Us
              </Nav.Link>
            </Nav>
            <Nav className="d-flex">
              {user ? (
                <>
                  <Button className="mx-2" variant="outline-success">
                    <Link to="/user">Profil</Link>
                  </Button>
                  <Button variant="outline-success" onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button className="mx-2" variant="outline-success">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button variant="outline-success">
                    <Link to="/register">Register</Link>
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
