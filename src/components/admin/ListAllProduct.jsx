import React , {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Card, Row, Col, Table } from "react-bootstrap";
import Laptop from '../../asset/img/laptopPlaceholder.png'

import Swal from "sweetalert2";

//import icon
import { BsInfoCircle, BsTrash3 } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";
import { RiEdit2Line } from "react-icons/ri";

export default function ListAllProduct (){
    const Navigate = useNavigate()
    const [products, setProducts] = useState([]);
    const [msg, setMsg] = useState("");

    useEffect(()=>{
        getProducts();
    },[])

    const getProducts = async() => {
        try {
            const response = await axios.get(`http://localhost:5000/products`)
            setProducts(response.data);
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    
    const deleteProduct = async(id) => {
        try {
            await axios.delete(`http://localhost:5000/products/${id}`);
            getProducts();
        } catch (error) {
            const message = error.message
            console.error('There was an error!', message)
        }
    }
    
    const handleDelete = async(id) => {
        Swal.fire({
            title: 'Apakah anda yakin?',
            text: "Produk yang dipilih akan dihapus",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Batal',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Hapus'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(id)
                Swal.fire(
                    'Terhapus!',
                    'Produk telah dihapus.',
                    'success'
                )
            }
        })
    }
    
    return(
        <>
            <Card className="col-md-11 col-md-11 mx-auto mt-4">
                <Card.Header className="cardHeader">List Semua Produk</Card.Header>
                <Card.Body>
                    <Container fluid className="mb-3">
                        <Button 
                            className="primary me-1" 
                            onClick={() => Navigate('/admin/addproduct')}
                        >
                            <IoMdAddCircleOutline size={20} /> Tambah Produk
                        </Button>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Gambar</th>
                                    <th>Nama Produk</th>
                                    <th>Harga</th>
                                    <th>Sisa Stock</th>
                                    <th>Kategori</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Contoh Data */}
                                <tr>
                                    <td>1</td>
                                    <td>Gambar</td>
                                    <td>Tes</td>
                                    <td>Harga</td>
                                    <td>5</td>
                                    <td>Kategori</td>
                                    <td>
                                        <Button 
                                            variant="success" 
                                            size="sm" 
                                            className="me-1"
                                        >
                                                <BsInfoCircle size={20}/>
                                        </Button>
                                        <Button 
                                            variant="primary" 
                                            size="sm" className="me-1" 
                                            onClick={() => Navigate(`/admin/editproduct`)}
                                        >
                                                <RiEdit2Line size={20}/>
                                        </Button>
                                        <Button 
                                            variant="outline-danger" 
                                            size="sm" 
                                            onClick={() => handleDelete()}
                                        >
                                                <BsTrash3 size={20}/>
                                        </Button>
                                    </td>
                                </tr>

                                {products.map((product, index)=>{
                                    return(
                                        <>
                                            <tr key={product.id}>
                                                <td>{index + 1}</td>
                                                <td>Gambar</td>
                                                <td>{product.name}</td>
                                                <td>{product.price}</td>
                                                <td>{product.stock}</td>
                                                <td>{product.category}</td>
                                                <td>
                                                    <Button 
                                                        variant="success" 
                                                        size="sm" 
                                                        className="me-1"
                                                    >
                                                            <BsInfoCircle size={20}/>
                                                    </Button>
                                                    <Button 
                                                        variant="primary" 
                                                        size="sm" className="me-1" 
                                                        onClick={() => Navigate(`/admin/editproduct/${product.id}`)}
                                                    >
                                                            <RiEdit2Line size={20}/>
                                                    </Button>
                                                    <Button 
                                                        variant="outline-danger" 
                                                        size="sm" 
                                                        onClick={() => handleDelete(product.id)}
                                                    >
                                                            <BsTrash3 size={20}/>
                                                    </Button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </Container>   
                </Card.Body>
            </Card>
       </>
    )
}