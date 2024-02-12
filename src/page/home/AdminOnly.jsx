import React from "react";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form, Button, Container, Image } from "react-bootstrap";

import Footer from "../../components/Footer";

import IlustError from "../../asset/img/ilust404.png";

export default function AdminOnly() {
  const Navigate = useNavigate();

  return (
    <>
      <Container
        fluid
        border="primary"
        className="d-flex col-md-11 mx-auto mt-4 justify-content-center align-items-center "
      >
        <Row>
          <Col
            md={6}
            sm={12}
            className="d-flex justify-content-center align-items-center flex-column left-box"
          >
            <div class="featured-image mb-3">
              <Image src={IlustError} fluid width={500} height={500} />
            </div>
          </Col>
          <Col md={6} sm={12} className="right-box d-flex align-items-center">
            <div class="row">
              <div class="header-text mb-4">
                <h1>Admin Only</h1>
                <p>Kamu tidak punya akses ke page ini.</p>
              </div>
              <Form>
                <Button
                  type="submit"
                  variant="primary"
                  className="mb-3 btn-lg w-100 fs-6"
                  onClick={() => Navigate("/")}
                >
                  Kembali ke Halaman Utama
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />

      {/* <Image src={IlustError} width={800} height={800} fluid/>

            <h1>Page Not Found</h1>

            <button onClick={() => Navigate('/')}>kembali ke halaman utama</button> */}
    </>
  );
}
