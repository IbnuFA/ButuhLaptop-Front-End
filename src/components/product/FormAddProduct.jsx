import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Form, Button, Card, InputGroup} from "react-bootstrap";

export default function FormAddProduct(){
    return(
        <>
            <Card className="col-md-11 mx-auto mt-4">
                <Card.Body>
                        <Row>
                            <Col md={11} sm={12} className="mx-auto">
                                <div class="row align-items-center">
                                    <div class="header-text mb-4">
                                        <h2>Tambah Produk</h2>
                                    </div>
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="8" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Nama Produk</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder=""
                                                    className="form-control bg-light fs-6"
                                                    required
                                                />
                                            </Form.Group>
                                            
                                            <Form.Group as={Col} md="4">
                                                <Form.Label>Kategori Produk</Form.Label>
                                                <Form.Select aria-label="Default select example" className="form-control bg-light">
                                                    <option>Plilih Kategori</option>
                                                    <option value="kerja">Kerja</option>
                                                    <option value="gaming">Gaming</option>
                                                    <option value="daily">Daily Use</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="8" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Harga Produk</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder=""
                                                    className="form-control bg-light fs-6"
                                                    required
                                            />
                                            </Form.Group>
                                            
                                            <Form.Group as={Col} md="4">
                                                <Form.Label>Kategori Harga</Form.Label>
                                                <Form.Select aria-label="Default select example" className="form-control bg-light">
                                                    <option>Plilih Kategori</option>
                                                    <option value="pas">Duit Pas</option>
                                                    <option value="modal_dikit">Ada Modal Dikit</option>
                                                    <option value="modal_banyak">Modal Banyak</option>
                                                    <option value="sultan">Sultan</option>    
                                                </Form.Select>
                                            </Form.Group>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="6" controlId="formFile" className="mb-3">
                                                <Form.Label>Gambar Produk</Form.Label>
                                                <Form.Control type="file" className="bg-light" />
                                            </Form.Group>
                                            
                                            <Form.Group as={Col} md="6" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Stock Produk</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder=""
                                                    className="form-control bg-light"
                                                    required
                                                />
                                            </Form.Group>
                                        </Row>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Deskripsi Produk</Form.Label>
                                            <Form.Control as="textarea" className="bg-light" rows={3} />
                                        </Form.Group>
                                        
                                        <Row>
                                            <Col className="d-flex flex-row-reverse">
                                                <Button type="" variant="outline-danger" className="mb-3 ms-3 btn-md ">
                                                    Batal
                                                </Button>

                                                <Button type="submit" variant="primary" className="mb-3 btn-md ">
                                                    Tambah
                                                </Button>    
                                            </Col>
                                        </Row>                       
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                </Card.Body>
            </Card>
        </>
    )
}