import React from "react";

import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Table, Button} from "react-bootstrap";

//import icon
import { BsInfoCircle, BsTrash3 } from "react-icons/bs";
import { RiEdit2Line } from "react-icons/ri";

export default function ListAllOrder (){
    return(
        <>
            <Card className="col-md-11 mx-auto mt-4">
                <Card.Header className="cardHeader">List Order Masuk</Card.Header>
                <Card.Body>
                    <Container fluid className="mt-3 mb-3">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>ID Pesanan</th>
                                    <th>Tanggal Pesan</th>
                                    <th>User Pemesan</th>
                                    <th>Jumlah Pesanan</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Table Cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>
                                        <Button variant="success" size="sm" className="me-1"><BsInfoCircle size={20}/></Button>
                                        <Button variant="primary" size="sm" className="me-1"><RiEdit2Line size={20}/></Button>
                                        <Button variant="outline-danger" size="sm"><BsTrash3 size={20}/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Table Cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>
                                        <Button variant="success" size="sm" className="me-1"><BsInfoCircle size={20}/></Button>
                                        <Button variant="primary" size="sm" className="me-1"><RiEdit2Line size={20}/></Button>
                                        <Button variant="outline-danger" size="sm"><BsTrash3 size={20}/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Table Cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td>
                                        <Button variant="success" size="sm" className="me-1"><BsInfoCircle size={20}/></Button>
                                        <Button variant="primary" size="sm" className="me-1"><RiEdit2Line size={20}/></Button>
                                        <Button variant="outline-danger" size="sm"><BsTrash3 size={20}/></Button>
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