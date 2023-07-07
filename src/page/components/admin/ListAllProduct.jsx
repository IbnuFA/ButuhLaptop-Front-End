import React , {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import Laptop from '../../../asset/img/laptopPlaceholder.png'


export default function ListAllProduct (){
    const Navigate = useNavigate()
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts();
    },[])

    const getProducts = async() => {
        const response = await axios.get('http://localhost:5000/products')
        setProducts(response.data);
    }

    return(
        <Container fluid className="m-0 mt-3 mb-3 ">
            <Button className="primary me-1" onClick={() => Navigate('/admin/addproduct')}>Add Product</Button>
            <Button className="primary" onClick={() => Navigate('/admin/editproduct')}>Edit Product</Button>
            <Row className="justify-content-between overflow-auto">\
                {products.map((product)=>{
                    return(
                        <>
                             <Col key={product.uuid} md={3} sm={12}>
                                <Card className="col-sm-12 mb-4">
                                    <Card.Img variant="top" src={Laptop} alt="poster-product"/>
                                    <Card.Body>
                                        <Card.Title className="text-center">{product.product_name}</Card.Title>
                                        <Card.Text className="text-left">Harga : {product.price}</Card.Text>
                                        <Card.Text className="text-left">Sisa Stok : {product.stock}</Card.Text>
                                        <Card.Text className="text-left">Sisa Stok : {product.category}</Card.Text>
                                        <Card.Text className="text-left">{product.product_description}</Card.Text>
                                        <Button variant="primary">Detail</Button>
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