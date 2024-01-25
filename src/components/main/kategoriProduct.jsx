import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Card, Row, Col } from "react-bootstrap";

//import gambar
import Work from '../../asset/img/Work.png'
import Gaming from '../../asset/img/Gaming.png'
import Study from '../../asset/img/Study.png'


export default function KategoriProduct (){
    return(
        <Container className="mt-3 mb-3">
            <h2 className="kategoriText">Cari yang Kamu Butuh!</h2>
            <h5 className="kategoriText">Yuk, cari Produk yang kamu butuhkan disini</h5>
            <Row className="justify-content-between">

                <Col md={4} sm={6}>
                    <Card className="col-sm-12 mb-4">
                        <Card.Img variant="top" className="Custom-Category-Img"src={Work}/>
                        <Card.Body>
                            <Card.Title>Kerja</Card.Title>
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

                <Col md={4} sm={6}>
                    <Card className="col-sm-12 mb-4">
                        <Card.Img variant="top" className="Custom-Category-Img" src={Gaming} />
                        <Card.Body>
                            <Card.Title>Gaming</Card.Title>
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

                <Col md={4} sm={6}>
                    <Card className="col-sm-12 mb-4">
                        <Card.Img variant="top" className="Custom-Category-Img" src={Study} />
                        <Card.Body>
                            <Card.Title>Belajar</Card.Title>
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