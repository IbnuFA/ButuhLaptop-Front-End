import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

import FormAddProduct from "../product/FormAddProduct";
import "./Sidebar.css";

export default function TesSidebar() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={3} md={2} className="sidebar">
            <Nav className="flex-column">
              <Nav.Link href="#">Dashboard</Nav.Link>
              <Nav.Link href="#">Orders</Nav.Link>
              <Nav.Link href="#">Products</Nav.Link>
              {/* Tambahkan menu lainnya */}
            </Nav>
          </Col>
          <Col sm={9} md={10} className="main-content">
            {/* Isi konten utama di sini */}
            <FormAddProduct />
          </Col>
        </Row>
      </Container>
    </>
  );
}
