import React , {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Card, Row, Col, Table, Form } from "react-bootstrap";
import Token from "../../features/token";

export default function CatalogProduct (){
    const Navigate = useNavigate()
    const [products, setProducts] = useState([]);
    const [msg, setMsg] = useState("");

    useEffect(()=>{
        getProducts();
    },[])

    const getProducts = async() => {
        try {
            const response = await axios.get(`http://localhost:5000/products`, {
                headers: {
                    Authorization: `Bearer ${Token.getToken()}`
                }
            })
            setProducts(response.data);
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return(
        <Container className="mt-3 mb-3">
            <h2 className="searchEngineHeader">Katalog Produk</h2>

            <Table>
                <tbody>
                    <tr>
                        <td className="textTable">Sortir Kategori Harga</td>
                        <td> : </td>
                        <td>
                            <Form >
                            <Form.Group as={Col} md="4">
                                <Form.Select 
                                    aria-label ="Default select example" 
                                    className="form-control input bg-light"
                                    size="sm"
                                >
                                    <option>Plilih Status</option>
                                    <option value="lunas">Duit Pas</option>
                                    <option value="belumDibayar">Ada Modal</option>
                                    <option value="dikirim">Modal Banyak</option>
                                    <option value="selesai">Sultan</option>
                                </Form.Select>
                            </Form.Group>
                            </Form>
                        </td>
                    </tr>
                    <tr>
                        <td className="textTable">Sortir Kategori Penggunaan</td>
                        <td> : </td>
                        <td>
                            <Button variant="success" size="sm" className="me-1">Kerja</Button>
                            <Button variant="primary" size="sm" className="me-1">Gaming</Button>
                            <Button variant="outline-danger" size="sm">Daily Use</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
             

            <Row>
                {/* Segmen Asli */}
                {products.map((product)=>{
                    return(
                        <>
                            <Col sm={6} md={4} lg={3} key={product.id}>
                                <Card className="">
                                    <Card.Img variant="top" src={product.image} alt={product.name} />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>
                                            <h5>{product.price}</h5>
                                            <h6>Stok Barang : {product.stock}</h6>
                                            <h6>{product.description}</h6>
                                        </Card.Text>

                                        <Container className="d-flex justify-content-center">
                                            <Link to={`/product/${product.id}`}>
                                                <Button 
                                                    className="mx-auto" 
                                                    variant="primary" 
                                                    size="lg"
                                                >
                                                Cek Sekarang
                                                </Button>
                                            </Link>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </>
                    )
                })}

                {/* Segmen Tambahan Buat Contoh */}
                {/* {products.map((products)=>{
                    return(
                        <>
                            <Col md={3} sm={6} key={products.id}>
                                <Card className="col-sm-12 mb-3">
                                    <Card.Img variant="top" src={products.image} alt={products.name} />
                                    <Card.Body>
                                        <Card.Title>{products.name}</Card.Title>
                                        <Card.Text>
                                            <h5>{products.price}</h5>
                                            <h6>Stok Barang : {products.stock}</h6>
                                            <h6>{products.description}</h6>
                                        </Card.Text>

                                        <Container className="d-flex justify-content-center">
                                            <Button className="mx-auto" variant="primary" size="lg">Cek Sekarang!</Button>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </>
                    )
                })} */}
 
           </Row>
        </Container>
    )
}