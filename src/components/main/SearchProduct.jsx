import React from "react";
import { useNavigate } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Form, Button, Card, Container} from "react-bootstrap";

//import icon
import { RiAddBoxLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";



export default function SearchProduct (){
    const Navigate = useNavigate()
    return(
        <>
            <Container className="cardHeader mx-auto mt-4 pt-3 pb-3" fluid>
                <h2 className="searchEngineHeader">Cari yang Kamu Butuh!</h2>
                <h5 className="searchEngineHeader">Yuk, cari Produk yang kamu butuhkan disini</h5>

                <Row>
                    <Col md={11} sm={12} className="mx-auto">
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="10" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        className="form-control bg-light fs-6"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group as={Col} md="2" controlId="exampleForm.ControlInput1">
                                    <Button 
                                        type="submit" 
                                        variant="primary"
                                        onClick={() => Navigate(`/user`)}
                                    >
                                        <IoSearchOutline  size={20}/> Cari Barang
                                    </Button>
                                </Form.Group>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}