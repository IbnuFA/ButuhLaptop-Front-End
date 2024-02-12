import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../features/authSlice";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

export default function NavbarAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isSuccess } = useSelector((state) => state.auth);
  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/login");
  };
  return (
    <>
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="navbarStyle bg-body-tertiary mb-3"
        >
          <Container fluid>
            <Navbar.Brand href="#" className="text-white">Halo, {user?.first_name}</Navbar.Brand>
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
                  <Nav.Link
                    className="navbarText"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    className="navbarText"
                    onClick={() => navigate("/admin/listproduct")}
                  >
                    Produk
                  </Nav.Link>
                  <Nav.Link
                    className="navbarText"
                    onClick={() => navigate("/admin/listorder")}
                  >
                    Order Masuk
                  </Nav.Link>
                  <Nav.Link
                    className="navbarText"
                    onClick={() => navigate("/admin/listuser")}
                  >
                    User
                  </Nav.Link>
                  <Nav.Link
                    className="navbarText"
                    onClick={() => navigate("/admin/listfeedback")}
                  >
                    Feedback
                  </Nav.Link>
                </Nav>
                <Nav className="d-flex">
                  <Nav.Link className="navbarText" href="#" onClick={logout}>
                    Logout
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
