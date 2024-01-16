import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import Laptop from '../../asset/img/laptopPlaceholder.png'


export default function KategoriHarga (){
    return(
        <Container className="mt-3 mb-3" fluid>
            <h2 className="kategoriText">Cari yang Kamu Butuh!</h2>
            <h5 className="kategoriText">Yuk, cari Produk yang kamu butuhkan disini</h5>
            <Row className="justify-content-between">

                <Col md={3} sm={6}>
                    <Card className="col-sm-12 mb-4">
                        <Card.Img variant="top" src={Laptop} />
                        <Card.Body>
                            <Card.Title>Duit Pas</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                            <Container className="d-flex justify-content-center">
                                <Button className="mx-auto" variant="primary" size="lg">Cek Sekarang!</Button>
                            </Container>
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col md={3} sm={6}>
                    <Card className="col-sm-12 mb-4">
                        <Card.Img variant="top" src={Laptop} />
                        <Card.Body>
                            <Card.Title>Ada Modal Dikit</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                            <Container className="d-flex justify-content-center">
                                <Button className="mx-auto" variant="primary" size="lg">Cek Sekarang!</Button>
                            </Container>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3} sm={6}>
                    <Card className="col-sm-12 mb-4">
                        <Card.Img variant="top" src={Laptop} />
                        <Card.Body>
                            <Card.Title>Modal Banyak</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                            <Container className="d-flex justify-content-center">
                                <Button className="mx-auto" variant="primary" size="lg">Cek Sekarang!</Button>
                            </Container>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={3} sm={6}>
                    <Card className="col-sm-12 mb-4">
                        <Card.Img variant="top" src={Laptop} />
                        <Card.Body>
                            <Card.Title>Sultan</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>

                            <Container className="d-flex justify-content-center">
                                <Button className="mx-auto" variant="primary" size="lg">Cek Sekarang!</Button>
                            </Container>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
           
        </Container>
    )
}