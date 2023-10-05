import React , {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Card, Row, Col, Table } from "react-bootstrap";
import Laptop from '../../asset/img/laptopPlaceholder.png'

import Swal from "sweetalert2";

//import icon
import { BsInfoCircle, BsTrash3 } from "react-icons/bs";
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
            <Card className="col-md-12 mx-auto mt-4">
                <Card.Body>
                    <Container fluid className="mt-3 mb-3">
                        <div class="row align-items-center">
                            <div class="header-text">
                                <h3>List Product</h3>
                            </div>
                        </div>
                            <Button className="primary me-1" onClick={() => Navigate('/admin/addproduct')}>Add Product</Button>
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