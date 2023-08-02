import React , {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Form, Button, Card, InputGroup} from "react-bootstrap";

//import icon
import { GiCancel } from "react-icons/gi";
import { RiAddBoxLine } from "react-icons/ri";

export default function FormAddProduct(){
    //function
    const navigate = useNavigate()
    
    //variable
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price,setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [msg, setMsg] = useState("");

    const addProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/products", {
                name : name,
                category: category,
                price : price,
                stock : stock,
                image : image,
                description : description
            })
            navigate("/admin/listproduct")
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    } 

    return(
        <>
            <Card className="col-md-11 mx-auto mt-4">
                <Card.Body>
                        <Row>
                            <Col md={11} sm={12} className="mx-auto">
                                <div class="row align-items-center">
                                    <div class="header-text mb-4">
                                        <h2>Tambah Produk</h2>
                                    </div>
                                    <Form onSubmit={addProduct}>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="8" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Nama Produk</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    className="form-control input bg-light fs-6"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    required
                                                />
                                            </Form.Group>
                                            
                                            <Form.Group as={Col} md="4">
                                                <Form.Label>Kategori Produk</Form.Label>
                                                <Form.Select 
                                                    aria-label="Default select example" 
                                                    className="form-control input bg-light"
                                                    value={category}
                                                    onChange={(e) => setCategory(e.target.value)}
                                                >
                                                    <option>Plilih Kategori</option>
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
                                                    placeholder=""
                                                    className="form-control input bg-light fs-6"
                                                    value={price}
                                                    onChange={(e) => setPrice(e.target.value)}
                                                    required
                                            />
                                            </Form.Group>
                                            
                                            {/* <Form.Group as={Col} md="4">
                                                <Form.Label>Kategori Harga</Form.Label>
                                                <Form.Select aria-label="Default select example" className="form-control bg-light">
                                                    <option>Plilih Kategori</option>
                                                    <option value="pas">Duit Pas</option>
                                                    <option value="modal_dikit">Ada Modal Dikit</option>
                                                    <option value="modal_banyak">Modal Banyak</option>
                                                    <option value="sultan">Sultan</option>    
                                                </Form.Select>
                                            </Form.Group> */}
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Group as={Col} md="6" controlId="formFile" className="mb-3">
                                                <Form.Label>Gambar Produk</Form.Label>
                                                <Form.Control 
                                                    type="file" 
                                                    className="form-control input bg-light fs-6"
                                                    value={image}
                                                    onChange={(e) => setImage(e.target.value)}
                                                />
                                            </Form.Group>
                                            
                                            <Form.Group as={Col} md="6" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Stock Produk</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder=""
                                                    className="form-control input bg-light fs-6"
                                                    value={stock}
                                                    onChange={(e) => setStock(e.target.value)}
                                                />
                                            </Form.Group>
                                        </Row>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Deskripsi Produk</Form.Label>
                                            <Form.Control 
                                                as="textarea" 
                                                className="form-control input bg-light fs-6" 
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