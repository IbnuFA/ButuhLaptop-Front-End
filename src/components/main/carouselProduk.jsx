import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Card, Row, Col } from "react-bootstrap";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './stylesProduk.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules'

//import tes image
import Laptop from '../../asset/img/laptopPlaceholder.png'


export default function CarouselProduk (){
    return(
        <>
            {/* Segmen 1 */}
            <h3 style={{textAlignVertical: 'center',textAlign: 'center',}}>SEGMEN 1</h3>
            <Swiper
            
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                        <Col md={3} sm={6}>
                            <Card className="col-sm-12 mt-4 mb-4">
                                <Card.Img variant="top" src={Laptop} />
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
                </SwiperSlide>

                <SwiperSlide>
                        <Col md={3} sm={6}>
                            <Card className="col-sm-12 mt-4 mb-4">
                                <Card.Img variant="top" src={Laptop} />
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
                </SwiperSlide>

                <SwiperSlide>
                        <Col md={3} sm={6}>
                            <Card className="col-sm-12 mt-4 mb-4">
                                <Card.Img variant="top" src={Laptop} />
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
                </SwiperSlide>
            </Swiper>

            {/* Segmen 2 */}
            <h3 style={{textAlignVertical: 'center',textAlign: 'center',}} className="mt-4">SEGMEN 2</h3>
            <Swiper
            
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                        <Col md={3} sm={6}>
                            <Card className="col-sm-12 mt-4 mb-4">
                                <Card.Img variant="top" src={Laptop} />
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
                </SwiperSlide>

                <SwiperSlide>
                        <Col md={3} sm={6}>
                            <Card className="col-sm-12 mt-4 mb-4">
                                <Card.Img variant="top" src={Laptop} />
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
                </SwiperSlide>

                <SwiperSlide>
                        <Col md={3} sm={6}>
                            <Card className="col-sm-12 mt-4 mb-4">
                                <Card.Img variant="top" src={Laptop} />
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
                </SwiperSlide>
            </Swiper>

          
        </>
    )
}