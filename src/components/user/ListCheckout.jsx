import React from "react";
import { useNavigate } from "react-router-dom";
import '../../App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, Button, Card, Container, Table } from "react-bootstrap";


//import icon
import { BsInfoCircle, BsTrash3 } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";


export default function DetailCheckout(){
    const Navigate = useNavigate()

    return(
        <>
            <Card className="col-md-10 mx-auto mt-4">
                <Card.Header className="cardHeader">Checkout Kamu</Card.Header>
                <Card.Body>
                    <Container fluid border="primary m-0" className="d-flex justify-content-center align-items-center ">
                        <Col>
                            <Row>
                                <div className="overflow-auto" style={{height : 'auto'}}>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Tanggal Pemesanan</th>
                                                <th>Jumlah Barang</th>
                                                <th>Total Harga</th>
                                                <th>Status Pembayaran</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>21-06-2023</td>
                                                <td>2</td>
                                                <td>100.000</td>
                                                <td>
                                                <   Button variant="success" size="sm" active >Lunas</Button>
                                                </td>
                                                <td>
                                                    <Button variant="primary" size="sm" className="me-1" onClick={() => Navigate('/user/detailcheckout')}><BsInfoCircle size={20}/></Button>
                                                    <Button variant="outline-danger" size="sm"><BsTrash3 size={20}/></Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>21-06-2023</td>
                                                <td>4</td>
                                                <td>100.000</td>
                                                <td>
                                                <   Button variant="warning" size="sm" active >Belum Dibayar</Button>
                                                </td>
                                                <td>
                                                    <Button variant="primary" size="sm" className="me-1" onClick={() => Navigate('/user/detailcheckout')}><BsInfoCircle size={20}/></Button>
                                                    <Button variant="outline-danger" size="sm"><BsTrash3 size={20}/></Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>21-06-2023</td>
                                                <td>1</td>
                                                <td>100.000</td>
                                                <td>
                                                <   Button variant="info" size="sm" active >Sedang Dikirm</Button>
                                                </td>
                                                <td>
                                                    <Button variant="primary" size="sm" className="me-1" onClick={() => Navigate('/user/detailcheckout')}><BsInfoCircle size={20}/></Button>
                                                    <Button variant="outline-danger" size="sm"><BsTrash3 size={20}/></Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>21-06-2023</td>
                                                <td>2</td>
                                                <td>100.000</td>
                                                <td>
                                                <   Button variant="secondary" size="sm" active >Selesai</Button>
                                                </td>
                                                <td>
                                                    <Button variant="primary" size="sm" className="me-1" onClick={() => Navigate('/user/detailcheckout')}><BsInfoCircle size={20}/></Button>
                                                    <Button variant="outline-danger" size="sm"><BsTrash3 size={20}/></Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>    
                            </Row>
                        </Col>
                    </Container>
                    <Row>
                        <Col className="d-flex flex-row-reverse">
                            <Button type="" variant="primary" className="mb-3 ms-3 btn-md ">
                                <FaCheck size={20}/> Checkout
                            </Button>

                            {/* <Button type="submit" variant="primary" className="mb-3 btn-md ">
                                <RiAddBoxLine size={20}/> Edit
                            </Button>     */}
                        </Col>
                    </Row>  
                </Card.Body>
            </Card>
        </>
    )
}