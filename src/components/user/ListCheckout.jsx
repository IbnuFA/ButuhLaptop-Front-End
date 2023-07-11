import React from "react";
import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Row, Col, Form, Table,Button, Card, Container, Image } from "react-bootstrap";

import Laptop from '../../asset/img/laptopPlaceholder.png'

export default function ListCheckout(){
    const Navigate = useNavigate()
    return(
        <>
            <Card className="col-md-10 mx-auto mt-4">
                <Card.Body>
                    <Container fluid border="primary m-0" className="d-flex justify-content-center align-items-center ">
                        <Row>
                            <div class="header-text d-flex justify-content-center mb-4">
                                <h2>Checkout</h2>
                            </div>
                            <div className="overflow-auto" style={{height : '75vh'}}>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Gambar</th>
                                            <th>Tanggal Pemesanan</th>
                                            <th>Harga</th>
                                            <th>Nama Barang</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td><Image src={Laptop} fluid width={100} height={100}/></td>
                                            <td>21-06-2023</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>
                                                
                                            <Button variant="outline-primary success" size="sm" className="me-1" onClick={() => Navigate('/user/detailcheckout')}>Detail</Button>
                                                <Button variant="success me-1" size="sm">Beli</Button>
                                                <Button variant="outline-danger" size="sm">Delete</Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><Image src={Laptop} fluid width={100} height={100}/></td>
                                            <td>21-06-2023</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>
                                                <Button variant="success" size="sm" className="me-1" onClick={() => Navigate('/user/detailcheckout')}>Detail</Button>
                                                <Button variant="outline-danger" size="sm">Delete</Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><Image src={Laptop} fluid width={100} height={100}/></td>
                                            <td>21-06-2023</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>
                                                <Button variant="success" size="sm" className="me-1" onClick={() => Navigate('/admin/detailuser')}>Detail</Button>
                                                <Button variant="outline-danger" size="sm">Delete</Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td><Image src={Laptop} fluid width={100} height={100}/></td>
                                            <td>21-06-2023</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>
                                                <Button variant="success" size="sm" className="me-1" onClick={() => Navigate('/admin/detailuser')}>Detail</Button>
                                                <Button variant="outline-danger" size="sm">Delete</Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td><Image src={Laptop} fluid width={100} height={100}/></td>
                                            <td>21-06-2023</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>
                                                <Button variant="success" size="sm" className="me-1" onClick={() => Navigate('/admin/detailuser')}>Detail</Button>
                                                <Button variant="outline-danger" size="sm">Delete</Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td><Image src={Laptop} fluid width={100} height={100}/></td>
                                            <td>21-06-2023</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>
                                                <Button variant="success" size="sm" className="me-1" onClick={() => Navigate('/admin/detailuser')}>Detail</Button>
                                                <Button variant="outline-danger" size="sm">Delete</Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>    
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </>
    )
}