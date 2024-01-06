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
            
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={10}
                loop={true}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper1"
            >
                <SwiperSlide>
                    <div className="d-flex flex-column py-4">
                        <img  src={Laptop} style ={{width: '300', height: '300'}}  fluid />
                            <h5>Kerja</h5>
                            <h6>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </h6>

                            <Container className="d-flex justify-content-center">
                                <Button className="mx-auto" variant="primary" size="lg">Cek Sekarang!</Button>
                            </Container>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="d-flex flex-column py-4">
                        <img  src={Laptop} style ={{width: '300', height: '300'}}  fluid />
                            <h5>Kerja</h5>
                            <h6>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </h6>

                            <Container className="d-flex justify-content-center">
                                <Button className="mx-auto" variant="primary" size="lg">Cek Sekarang!</Button>
                            </Container>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="d-flex flex-column py-4">
                        <img  src={Laptop} style ={{width: '300', height: '300'}}  fluid />
                            <h5>Kerja</h5>
                            <h6>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </h6>

                            <Container className="d-flex justify-content-center">
                                <Button className="mx-auto" variant="primary" size="lg">Cek Sekarang!</Button>
                            </Container>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="d-flex flex-column py-4">
                        <img  src={Laptop} style ={{width: '300', height: '300'}}  fluid />
                            <h5>Kerja</h5>
                            <h6>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </h6>

                            <Container className="d-flex justify-content-center">
                                <Button className="mx-auto" variant="primary" size="lg">Cek Sekarang!</Button>
                            </Container>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="d-flex flex-column py-4">
                        <img  src={Laptop} style ={{width: '300', height: '300'}}  fluid />
                            <h5>Kerja</h5>
                            <h6>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </h6>

                            <Container className="d-flex justify-content-center">
                                <Button className="mx-auto" variant="primary" size="lg">Cek Sekarang!</Button>
                            </Container>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="d-flex flex-column py-4">
                        <img  src={Laptop} style ={{width: '300', height: '300'}}  fluid />
                            <h5>Kerja</h5>
                            <h6>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </h6>

                            <Container className="d-flex justify-content-center">
                                <Button className="mx-auto" variant="primary" size="lg">Cek Sekarang!</Button>
                            </Container>
                    </div>
                </SwiperSlide>


                {/* <SwiperSlide>
                            <Card>
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
                </SwiperSlide> */}
            </Swiper>

            {/* Segmen 2 */}
            <h3 style={{textAlignVertical: 'center',textAlign: 'center',}} className="mt-4">SEGMEN 2</h3>
            <Swiper
            
                slidesPerView={3}
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
                            <Card>
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
                            <Card>
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
                            <Card>
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