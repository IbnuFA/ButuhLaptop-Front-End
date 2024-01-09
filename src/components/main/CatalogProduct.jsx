import React , {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Card, Row, Col } from "react-bootstrap";
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
            <Row className="justify-content-between">
                {/* Segmen Asli */}
                {products.map((products)=>{
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
                                            <Button 
                                                className="mx-auto" 
                                                variant="primary" 
                                                size="lg"
                                                onClick={() => Navigate(`/user`)}
                                            >
                                                Cek Sekarang!
                                            </Button>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </>
                    )
                })}

                {/* Segmen Tambahan Buat Contoh */}
                {products.map((products)=>{
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
                })}
 
           </Row>
        </Container>
    )
}