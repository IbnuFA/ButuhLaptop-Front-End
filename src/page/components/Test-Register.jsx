import React from "react";


import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Row, Col, Form, Button, Card, Container, Image } from "react-bootstrap";

import Laptop from '../../asset/img/laptopPlaceholder.png'

const imagePlacdeholder = Laptop

export default function TestRegister() {
    return(
        <>
            <Card className="col-md-12 mx-auto mt-4">
                <Card.Body>
                    <Container fluid border="primary" className="d-flex justify-content-center align-items-center ">
                        <Row>
                            <Col md={6} sm={12} className="rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                                <div class="featured-image mb-3">
                                    <Image src={Laptop} fluid/>
                                </div>
                            </Col>
                            <Col md={6} sm={12} className="right-box">
                                <div class="row align-items-center">
                                    <div class="header-text mb-4">
                                        <h2>Login Dulu Yuk</h2>
                                        <p>Biar mempermudah kamu dalam mencari laptop impianmu.</p>
                                    </div>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            className="form-control form-control-lg bg-light fs-6"
                                            required
                                        />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            lassName="form-control form-control-lg bg-light fs-6"
                                            required
                                        />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Remember me" />
                                        </Form.Group>

                                        <Button type="submit" variant="primary" className="mb-3 btn-lg w-100 fs-6">
                                            Login
                                        </Button>

                                        <Button type="submit" variant="light" className="mb-3 btn-lg w-100 fs-6">
                                            Google
                                        </Button>
                                    </Form>
                                    <div class="input-group mb-5 d-flex justify-content-between">
                                        <div class="row">
                                            <small>Don't have account? <a href="#">Sign Up</a></small>
                                        </div>
                                        <div class="forgot">
                                            <small><a href="#">Forgot Password?</a></small>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </>
    )
}