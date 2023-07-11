import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../features/authSlice";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Form, Button, Card, Container, Image } from "react-bootstrap";

import Laptop from '../../asset/img/laptopPlaceholder.png'

export default function DetailUser (){
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {user} = useSelector((state => state.auth));

    const logout = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate("/login")
    }

    return(
        <>
            <Card className="col-md-10 mx-auto mt-4">
                <Card.Body>
                    <Container fluid border="primary" className="d-flex justify-content-center align-items-center ">
                        <Row>
                            <div class="header-text d-flex justify-content-center mb-4">
                                <h2>Profile Kamu</h2>
                            </div>
                            <Col md={6} sm={12} className="rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                                <div class="featured-image mb-3">
                                    <Image src={Laptop} width={400} height={400} fluid/>
                                </div>
                            </Col>
                            <Col md={6} sm={12} className="rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                                <div class="row align-items-center">
                                    <div class="header-text mb-3">
                                        <h4>Ibnu Fauzan Affifudin</h4>
                                    </div>
                                    <div class="header-text mb-3">
                                        <h5>Level : Emas</h5>
                                    </div>
                                    <Form>
                                        <Button type="submit" variant="primary" className="mb-3 btn-lg w-100 fs-6">
                                            Ganti Password
                                        </Button>

                                        <Button type="submit" variant="primary" className="mb-3 btn-lg w-100 fs-6" onClick={()=> navigate('/user/listkeranjang')}>
                                            Keranjangmu
                                        </Button>

                                        <Button type="submit" variant="light" className="mb-3 btn-lg w-100 fs-6" onClick={()=> navigate('/user/listcheckout')}>
                                            Pesananmu
                                        </Button>

                                        <Button type="submit" variant="outline-danger" className="mb-3 btn-lg w-100 fs-6" onClick={logout}>
                                            Logout
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