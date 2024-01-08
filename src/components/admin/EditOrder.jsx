import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import '../../App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    Row, 
    Col, 
    Form, 
    Button, 
    Table, 
    Card, 
    Toast, 
    Image 
} from "react-bootstrap";

import Laptop from '../../asset/img/laptopPlaceholder.png'

export default function EditOrder(){
    const Navigate = useNavigate()
    const {id} = useParams();
    
    //variable
    const [showToast, setShowToast] = useState(false);
    const [status, setStatus] = useState("")

    const toggleShowToast = () => setShowToast(!showToast);

    useEffect(() => {
        const getOrderById = async () => {
            try {
                
            } catch (error) {
                
            }
        }
        getOrderById();
    }, [id])

    const updateOrder = async(e) => {
        e.preventDefault();

        try {
            
        } catch (error) {
            
        }
    }

    return(
        <> 
        <Card className="col-md-10 col-sm-11 mx-auto mt-4 mb-4">
            <Card.Header className="cardHeader">Detail Pesanan</Card.Header>
                <Card.Body>
                    <Table>
                        <tbody>
                            <tr>
                                <td>Nomor Invoice</td>
                                <td> : </td>
                                <td>dsadaasfa</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td> : </td>
                                <td>
                                    <Form onSubmit={updateOrder}>
                                    <Form.Group as={Col} md="4">
                                        <Form.Select 
                                            aria-label ="Default select example" 
                                            className="form-control input bg-light"
                                            size="sm"
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                        >
                                            <option>Plilih Status</option>
                                            <option value="lunas">Lunas</option>
                                            <option value="belumDibayar">Belum Dibayar</option>
                                            <option value="dikirim">Dikirim</option>
                                            <option value="selesai">Selesai</option>
                                            <option value="batal">Batal</option>
                                        </Form.Select>
                                    </Form.Group>
                                    </Form>
                                </td>
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
                    

                    <Button type="submit" variant="primary" className="me-3">Simpan</Button>
                    {/* Toast Daftar Produk */}
                    <Button onClick={toggleShowToast}>
                        Daftar Produk
                    </Button>
                    <Toast show={showToast} onClose={toggleShowToast}>
                        <Toast.Header>
                            <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                            />
                            <strong className="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>
                            <Table responsive className="col-md-10 col-sm-11 mx-auto">
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
                        </Toast.Body>
                    </Toast>
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