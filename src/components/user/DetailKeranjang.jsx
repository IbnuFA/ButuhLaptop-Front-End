import React from "react";
import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, Button, Card, Container, Image, Table } from "react-bootstrap";

import Laptop from '../../asset/img/laptopPlaceholder.png'

export default function DetailKeranjang() {
    const Navigate = useNavigate()

    return (
        <Form>
            <Card className="col-md-10 mx-auto mt-4">
                <Card.Header className="cardHeader">Detail Produk</Card.Header>
                <Card.Body>
                    <Container fluid border="primary" className="d-flex justify-content-center align-items-center ">
                        <Row>
                            <Col md={6} sm={12} className="rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                                <div class="featured-image mb-3">
                                    <Image src={Laptop} width={400} height={400} fluid />
                                </div>
                            </Col>
                            <Col md={6} sm={12} className="rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Nama Produk</th>
                                            <th> : </th>
                                            <th>Acer Dimakan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Harga</th>
                                            <th> : </th>
                                            <th>Harga</th>
                                        </tr>
                                        <tr>
                                            <th>Jumlah Pembelian</th>
                                            <th> : </th>
                                            <th>Harga</th>
                                        </tr>
                                        <tr>
                                            <th>Deskripsi Produk</th>
                                            <th> : </th>
                                            <th>Harga</th>
                                        </tr>
                                    </tbody>
                                </Table>

                                <Button type="submit" variant="outline-danger" className="mb-3 btn-lg w-100 fs-6">
                                    Hapus
                                </Button>
                                <Button type="submit" variant="primary" className="mb-3 btn-lg w-100 fs-6" onClick={() => Navigate('/user/listkeranjang')}>
                                    Kembali
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </Form>
    )
}