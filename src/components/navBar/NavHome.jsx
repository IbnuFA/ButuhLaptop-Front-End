import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../features/authSlice";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Offcanvas, Image } from "react-bootstrap";

import Logo from "../../asset/img/Logo.png";

export default function NavHome() {
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
      {["xl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="/" >
              <Image src={Logo} className="navLogo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Image src={Logo} className="navLogo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  {user?.role === "admin" && (
                    <Nav.Link href="#">
                      <Link to="/admin">Admin</Link>
                    </Nav.Link>
                  )}
                  <Nav.Link href="#">
                    <Link to="/">Home</Link>
                  </Nav.Link>
                  <Nav.Link href="#">
                    <Link to="/product">Products</Link>
                  </Nav.Link>
                  {user?.role === "user" && (
                    <>
                      <Nav.Link href="#">
                        <Link to="/user/keranjang">Keranjang</Link>
                      </Nav.Link>
                      <Nav.Link href="#">
                        <Link to="/user/checkout">Checkout</Link>
                      </Nav.Link>
                    </>
                  )}
                  <Nav.Link href="/feedback">Feedback</Nav.Link>
                </Nav>
                <Nav className="d-flex">
                  {user ? (
                    <>
                      <Nav.Link href="#">
                        <Link to="/user">Profil</Link>
                      </Nav.Link>
                      <Nav.Link href="#" onClick={logout}>
                        Logout
                      </Nav.Link>
                    </>
                  ) : (
                    <>
                      <Nav.Link href="#">
                        <Link to="/login">Login</Link>
                      </Nav.Link>
                      <Nav.Link href="#">
                        <Link to="/register">Register</Link>
                      </Nav.Link>
                    </>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
