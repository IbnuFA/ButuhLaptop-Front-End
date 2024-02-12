import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import Laptop from "../../../asset/img/laptopPlaceholder.png";

const imagePlacdeholder = Laptop;

export default function ListAllProductUser() {
  return (
    <Container className="mt-3 mb-3">
      <Row className="justify-content-between">
        <Col md={4} sm={12}>
          <Card className="col-sm-12 mb-4">
            <Card.Img variant="top" src={Laptop} alt="poster-product" />
            <Card.Body>
              <Card.Title className="text-center">Nama Produk</Card.Title>
              <Card.Text className="text-left">Harga : Rp. 1.000.000</Card.Text>
              <Card.Text className="text-left">Merk : </Card.Text>
              <Card.Text className="text-left">Deskripsi Produk</Card.Text>
              <Button variant="primary">Detail</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} sm={12}>
          <Card className="col-sm-12 mb-4">
            <Card.Img variant="top" src={Laptop} alt="poster-product" />
            <Card.Body>
              <Card.Title className="text-center">Nama Produk</Card.Title>
              <Card.Text className="text-left">Harga : Rp. 1.000.000</Card.Text>
              <Card.Text className="text-left">Merk : </Card.Text>
              <Card.Text className="text-left">Deskripsi Produk</Card.Text>
              <Button variant="primary">Detail</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} sm={12}>
          <Card className="col-sm-12 mb-4">
            <Card.Img variant="top" src={Laptop} alt="poster-product" />
            <Card.Body>
              <Card.Title className="text-center">Nama Produk</Card.Title>
              <Card.Text className="text-left">Harga : Rp. 1.000.000</Card.Text>
              <Card.Text className="text-left">Merk : </Card.Text>
              <Card.Text className="text-left">Deskripsi Produk</Card.Text>
              <Button variant="primary">Detail</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
