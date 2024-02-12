import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Card, Row, Col, Image } from "react-bootstrap";

//import gambar
import Work from "../../asset/img/Work.png";
import Gaming from "../../asset/img/Gaming.png";
import Study from "../../asset/img/Study.png";

export default function KategoriProduct() {
  return (
    <>
      <Row className="mt-4">
        <h3 className="kategoriText mt-3">Cari yang Kamu Butuh!</h3>
        <h5 className="kategoriText">
          Yuk, cari Produk yang kamu butuhkan disini
        </h5>
      </Row>
      <Container className="custom-category mt-3 mb-3" fluid>
        <Row className="justify-content-between">
          <Col md={4} sm={6}>
            <div className="d-flex flex-column align-items-center mt-3 mb-3">
              <Image
                className="Custom-Category-Img border border-primary mb-2"
                src={Work}
                roundedCircle
                fluid
              />
              <h3>Kerja</h3>
              <p>
                Some quick example text to build on the card title and make up
                thebulk of the card's content.
              </p>
              <Button className="mx-auto" variant="primary" size="lg">
                Cek Sekarang!
              </Button>
            </div>
          </Col>

          <Col md={4} sm={6}>
            <div className="d-flex flex-column align-items-center mt-3 mb-3">
              <Image
                className="Custom-Category-Img border border-primary mb-2"
                src={Gaming}
                roundedCircle
                fluid
              />
              <h3>Gaming</h3>
              <p>
                Some quick example text to build on the card title and make up
                thebulk of the card's content.
              </p>
              <Button className="mx-auto" variant="primary" size="lg">
                Cek Sekarang!
              </Button>
            </div>
          </Col>
          <Col md={4} sm={6}>
            <div className="d-flex flex-column align-items-center mt-3 mb-3">
              <Image
                className="Custom-Category-Img border border-primary mb-2"
                src={Study}
                roundedCircle
                fluid
              />
              <h3>Belajar</h3>
              <p>
                Some quick example text to build on the card title and make up
                thebulk of the card's content.
              </p>
              <Button className="mx-auto" variant="primary" size="lg">
                Cek Sekarang!
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
