import React , {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Token from "../../features/token";

import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Form, Button, Card} from "react-bootstrap";

//import icon
import { GiCancel } from "react-icons/gi";
import { RiAddBoxLine } from "react-icons/ri";

export default function FormEditProduct(){
    //function
    const navigate = useNavigate()
    const { id } = useParams();

    const [products, setProducts] = useState([]);
    
    //variable
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price,setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [weight, setWeight] = useState("")
    const [msg, setMsg] = useState("");

    const getProductById = async () => {
        try {
            const response = await axios.get(
                `http://localhost:5000/products/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${Token.getToken()}`
                    }
            });
            
            setProducts(response.data)
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    const updateProduct = async(e) => {
        e.preventDefault();
        try {
            const form = new FormData()
            form.append('name', name);
            form.append('description', description);
            form.append('category', category);
            form.append('price', price);
            form.append('stock', stock);
            if (image[0]) {
                form.append('image', image[0]);
              }
            form.append('weight', weight);

            await axios.patch(`http://localhost:5000/admin/product/${id}`, form, {
                headers: {
                    Authorization: `Bearer ${Token.getToken()}`
                }
            })
            navigate("/admin/listproduct")
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
      }

      useEffect(() => {
        getProductById();
      }, [id]);

      return(
        <>
            <Card className="col-md-11 col-sm-11 mx-auto mt-4">
                <Card.Header className="cardHeader">Edit Produk</Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={11} sm={12} className="mx-auto">
                            <div class="row align-items-center">
                                
                                    <Form onSubmit={updateProduct}>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="8" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Nama Produk</Form.Label>
                                            <Form.Control
                                                type="text"
                                                className="form-control input bg-light fs-6"
                                                placeholder={products.name}
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                            />
                                        </Form.Group>
                                        
                                        <Form.Group as={Col} md="4">
                                            <Form.Label>Kategori Produk</Form.Label>
                                            <Form.Select 
                                                aria-label ="Default select example" 
                                                className="form-control input bg-light"
                                                value={category}
                                                onChange={(e) => setCategory(e.target.value)}
                                                required
                                            >
                                                <option>Ubah Kategori</option>
                                                <option value="kerja">Kerja</option>
                                                <option value="gaming">Gaming</option>
                                                <option value="daily">Daily Use</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="8" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Harga Produk</Form.Label>
                                            <Form.Control
                                                type="text"
                                                className="form-control input bg-light fs-6"
                                                placeholder={products.price}
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                                required
                                        />
                                        </Form.Group>
                                        
                                        <Form.Group as={Col} md="4">
                                                <Form.Label>Berat Barang</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    className="form-control input bg-light fs-6"
                                                    placeholder={products.weight}
                                                    value={weight}
                                                    onChange={(e) => setWeight(e.target.value)}
                                                    required
                                            />
                                        </Form.Group>
                                    </Row>

                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="6" controlId="formFile" className="mb-3">
                                            <Form.Label>Gambar Produk</Form.Label>
                                            <Form.Control 
                                                type="file" 
                                                className="form-control input bg-light fs-6"
                                                onChange={(e) => setImage(e.target.files)}
                                            />
                                        </Form.Group>
                                        
                                        <Form.Group as={Col} md="6" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Stock Produk</Form.Label>
                                            <Form.Control
                                                type="text"
                                                className="form-control input bg-light fs-6"
                                                placeholder={products.stock}
                                                value={stock}
                                                onChange={(e) => setStock(e.target.value)}
                                                required
                                            />
                                        </Form.Group>
                                    </Row>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Deskripsi Produk</Form.Label>
                                        <Form.Control 
                                            as="textarea" 
                                            className="form-control input bg-light fs-6"
                                            placeholder={products.description}
                                            rows={3}
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </Form.Group>
                                    
                                    <Row>
                                        <Col className="d-flex flex-row-reverse">
                                            <Button type="" variant="outline-danger" className="mb-3 ms-3 btn-md ">
                                                <GiCancel size={20}/> Batal
                                            </Button>

                                            <Button type="submit" variant="primary" className="mb-3 btn-md ">
                                                <RiAddBoxLine size={20}/> Tambah
                                            </Button>    
                                        </Col>
                                    </Row>                       
                                </Form>
                                
                                
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}