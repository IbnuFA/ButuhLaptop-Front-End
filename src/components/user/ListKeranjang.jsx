import React from "react";
import { useNavigate } from "react-router-dom";
import '../../App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Table,Button, Card, Container, Image } from "react-bootstrap";

//import icon
import { BsTrash3 } from "react-icons/bs";
import { RiEdit2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

//import sweetalert
import Swal from "sweetalert2";

//import placeholder
import Laptop from '../../asset/img/laptopPlaceholder.png'


//checkout
const checkoutProduct = async() => {

}

//setting sweetalert
const handleCheckout = async() => {
    Swal.fire({
        title: 'Apakah anda yakin?',
        text: "Produk yang dipilih akan dicheckout",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Batal',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Checkout'
    }).then((result) => {
        if (result.isConfirmed) {
            checkoutProduct()
            Swal.fire(
                'Checkout!',
                'Hore! Produkmu telah berhasil Checkout.',
                'success'
            )
        }
    })
}

export default function ListKeranjang(){
    const Navigate = useNavigate()
    return(
        <>
            <Card className="col-md-10 mx-auto mt-4 mb-4">
                <Card.Header className="cardHeader"> Keranjangmu</Card.Header>
                <Card.Body>
                        <Col>
                        <Row>
                            <div className="overflow-auto" style={{height : 'auto'}}>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Gambar</th>
                                            <th>Nama Barang</th>
                                            <th>Jumlah</th>
                                            <th>Harga</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td><Image src={Laptop} fluid width={100} height={100}/></td>
                                            <td>HP Butuh Garansi</td>
                                            <td>1</td>
                                            <td>Rp 1.000.000</td>
                                            <td>
                                                <Button variant="primary" size="sm" className="me-1" onClick={() => Navigate('/user/detailkeranjang')}><RiEdit2Line size={20}/></Button>
                                                <Button variant="outline-danger" size="sm"><BsTrash3 size={20}/></Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><Image src={Laptop} fluid width={100} height={100}/></td>
                                            <td>21-06-2023</td>
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
                        </Col>
                    <Row>
                        <Col className="d-flex flex-row-reverse">
                            <Button 
                                type="" 
                                variant="primary" 
                                className="mb-3 ms-3 btn-md "
                                onClick={() => handleCheckout()}

                            >
                                <FaCheck size={20}/> Checkout
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}