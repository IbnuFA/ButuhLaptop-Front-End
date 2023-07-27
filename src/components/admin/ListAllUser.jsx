import React from "react";
import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Table, Button, Image } from "react-bootstrap";

//import icon
import { BsInfoCircle, BsTrash3, BsPersonAdd, BsPersonGear } from "react-icons/bs";

import Laptop from '../../asset/img/laptopPlaceholder.png'

// const imagePlacdeholder = Laptop

export default function ListAllUser(){
    const Navigate = useNavigate()

    return(
            <>
                <Card className="col-md-11 mx-auto mt-4">
                    <Card.Body>
                        <Container fluid className="mt-3 mb-3">
                            <div class="row align-items-center">
                                <div class="header-text">
                                    <h3>List User</h3>
                                    <Button className="primary" onClick={() => Navigate('/admin/adduser')}><BsPersonAdd size={23}/></Button>
                                </div>
                            </div>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Profile</th>
                                        <th>Nama</th>
                                        <th>Email</th>
                                        <th>Level</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td><Image src={Laptop} fluid width={100} height={100}/></td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>
                                            <Button variant="success" size="sm" className="me-1" onClick={() => Navigate('/admin/detailuser')}><BsInfoCircle size={20}/></Button>
                                            <Button variant="primary" size="sm" className="me-1"><BsPersonGear size={20}/></Button>
                                            <Button variant="outline-danger" size="sm"><BsTrash3 size={20}/></Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td><Image src={Laptop} fluid width={100} height={100}/></td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>
                                            <Button variant="success" size="sm" className="me-1" onClick={() => Navigate('/admin/detailuser')}>Detail</Button>
                                            <Button variant="outline-danger" size="sm">Delete</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td><Image src={Laptop} fluid width={100} height={100}/></td>
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
                        </Container>   
                    </Card.Body>
                </Card>
            </>
    )
}