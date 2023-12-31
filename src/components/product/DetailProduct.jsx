import React from "react";

import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Form, Button, Card, Container, Image } from "react-bootstrap";

import Laptop from '../../asset/img/laptopPlaceholder.png'

export default function DetailProduct(){
    return(
        <>
            <Card className="col-md-11 mx-auto mt-4">
                <Card.Header className="cardHeader">Detail Produk</Card.Header>
                <Card.Body>
                    <Container fluid border="primary" className="d-flex justify-content-center align-items-center ">
                        <Row>
                            <Col md={6} sm={12} className="rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                                <div class="featured-image mb-3">
                                    <Image src={Laptop} width={400} height={400} fluid/>
                                </div>
                            </Col>
                            <Col md={6} sm={12} className="rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                                <div class="row align-items-center">
                                    <div class="header-text mb-3">
                                        <h4>Nama Produk : Acer Dimakan</h4>
                                    </div>
                                    <div class="header-text mb-3">
                                        <h5>Harga : Rp 5.000.000</h5>
                                    </div>
                                    <div class="header-text mb-3">
                                        <h5>Deskripsi : RAM 16 GB</h5>
                                    </div>
                                    <div class="header-text mb-3">
                                        <h5>Sisa Stock : 15</h5>
                                    </div>
                                    <Form>
                                        <Button type="submit" variant="outline-danger" className="mb-3 btn-lg w-100 fs-6">
                                            Kembali
                                        </Button>

                                        <Button type="submit" variant="primary" className="mb-3 btn-lg w-100 fs-6">
                                            Keranjang
                                        </Button>

                                        <Button type="submit" variant="primary" className="mb-3 btn-lg w-100 fs-6">
                                            Beli
                                        </Button>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </>
    )
}