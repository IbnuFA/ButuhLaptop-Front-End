import React from "react";
import { useNavigate } from "react-router-dom";
import '../../App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, Button, Card, Container, Table } from "react-bootstrap";

//import icon
import { BsInfoCircle, BsTrash3 } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

//import sweetalert
import Swal from "sweetalert2";

export default function DetailCheckout(){
    const Navigate = useNavigate()

    //cancel Checkout
    const cancelCheckout = async(id) => {
        console.log("ini cancel checkout")
    }
    
    
    //setting sweetalert cara pembayaran
    const handleCheckout = async() => {
        Swal.fire({
            title: "Cara Pembayaran!",
            html: `
            <ol>
            <li align="left">Pembayaran bisa dilakukan secara Online menggunakan Barcode QRIS Diatas.</li>
            <li align="left">Setelah pembayran, uukti pembayaran bisa di-screenshoot dan dikirim ke Admin pada nomor <a href="#">WA berikut</a></li>
            <li align="left">Admin akan segera memproses pesanan anda segera setelah bukti telah dikonfirmasi</li>
            </ol> 
            `,
            imageUrl: "https://unsplash.it/400/200",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
        });
    }
    
    //setting sweetalert cancel checkout
    const handleCancelCheckout = async(id) => {
        Swal.fire({
            title: 'Apakah anda yakin membatalkan pesanan?',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Batal',
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yakin'
        }).then((result) => {
            if (result.isConfirmed) {
                cancelCheckout(id)
                Swal.fire(
                    'Pesanan kamu telah dibatalkan',
                )
            }
        })
    }
    
    return(
        <>
            <Card className="col-md-10 mx-auto mt-4">
                <Card.Header className="cardHeader">Checkout Kamu</Card.Header>
                <Card.Body>
                    <Row>
                        <Col className="d-flex">
                            <Button 
                                type="" 
                                variant="primary" 
                                className="mb-3 ms-3 btn-md "
                                onClick={() => handleCheckout()}
                            >
                                <BsInfoCircle size={15}/> Cara Pembayaran
                            </Button>
                        </Col>
                    </Row>  
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
                                                    <Button 
                                                        variant="primary" 
                                                        size="sm" 
                                                        className="me-1" 
                                                        onClick={() => Navigate('/user/detailcheckout')
                                                        }
                                                    >
                                                        <BsInfoCircle size={20}/>
                                                    </Button>
                                                    <Button 
                                                        variant="outline-danger" 
                                                        size="sm"
                                                        onClick={() => handleCancelCheckout()}
                                                    >
                                                        <MdOutlineCancel size={20}/>
                                                    </Button>
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
                                                    <Button variant="outline-danger" size="sm"><MdOutlineCancel size={20}/></Button>
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
                                                    <Button variant="outline-danger" size="sm"><MdOutlineCancel size={20}/></Button>
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
                                                    <Button variant="outline-danger" size="sm"><MdOutlineCancel size={20}/></Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>21-06-2023</td>
                                                <td>2</td>
                                                <td>100.000</td>
                                                <td>
                                                <   Button variant="danger" size="sm" active >Batal</Button>
                                                </td>
                                                <td>
                                                    <Button variant="primary" size="sm" className="me-1" onClick={() => Navigate('/user/detailcheckout')}><BsInfoCircle size={20}/></Button>
                                                    <Button variant="outline-danger" size="sm"><MdOutlineCancel size={20}/></Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>    
                            </Row>
                        </Col>
                    </Container>
                </Card.Body>
            </Card>
        </>
    )
}