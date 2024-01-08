import React from "react";
import { useNavigate } from "react-router-dom";
import '../../App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table, Card, Image } from "react-bootstrap";

import Laptop from '../../asset/img/laptopPlaceholder.png'

export default function DetailCheckout(){
    const Navigate = useNavigate()

    return(
        <> 
            <Card className="col-md-10 col-sm-11 mx-auto mt-4 mb-4">
                <Card.Header className="cardHeader">Detail Checkout</Card.Header>
                    <Card.Body>
                        <div class="header-text d-flex justify-content-center mb-1">
                                <h5>Detail Checkout</h5>
                        </div>
                        <Table>
                            <tbody>
                                <tr>
                                    <td>Nomor Invoice</td>
                                    <td> : </td>
                                    <td>dsadaasfa</td>
                                </tr>
                                <tr>
                                    <td>Tanggal Pesan</td>
                                    <td> : </td>
                                    <td>21-06-2023</td>
                                </tr>
                                <tr>
                                    <td>Alamat Pengiriman</td>
                                    <td> : </td>
                                    <td>Sorong</td>
                                </tr>
                                <tr>
                                    <td>Kurir</td>
                                    <td> : </td>
                                    <td>Si Lambat</td>
                                </tr>
                                <tr>
                                    <td>Total Harga Produk</td>
                                    <td> : </td>
                                    <td>3.000.000</td>
                                </tr>
                                <tr>
                                    <td>Ongkir</td>
                                    <td> : </td>
                                    <td>50.000</td>
                                </tr>
                                <tr>
                                    <td>Total Harga Produk</td>
                                    <td> : </td>
                                    <td>3.050.000</td>
                                </tr>
                            </tbody>
                        </Table>

                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className="col-md-10 col-sm-11 mx-auto">
            <Card.Header className="cardHeader">Detail Produk</Card.Header>
                <Card.Body>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Gambar</th>
                                <th>Nama Barang</th>
                                <th>Jumlah</th>
                                <th>Harga</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><Image src={Laptop} fluid width={100} height={100}/></td>
                                <td>HP Butuh Garansi</td>
                                <td>1</td>
                                <td>Rp 1.000.000</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><Image src={Laptop} fluid width={100} height={100}/></td>
                                <td>21-06-2023</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    )
}