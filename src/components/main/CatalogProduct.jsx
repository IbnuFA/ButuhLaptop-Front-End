import React , {useState, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Card, Row, Col, Table, Form, InputGroup } from "react-bootstrap";
import Token from "../../features/token";

import { RiAddBoxLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";

export default function CatalogProduct (){
    const Navigate = useNavigate()
    const [products, setProducts] = useState([]);
    const [filterParam, setFilterParam] = useState(["All"]);
    const [msg, setMsg] = useState("");
    const [search, setSearch] = useState(products)
    const [searchParam] = useState(["category"]);

    const location = useLocation();

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
            setSearch(response.data)
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    const searchProduct = (event) => {
        setSearch(products.filter(e => e.name.toLowerCase().includes(event.target.value)))
    }

    //filter product by daily category

    // const dailyProductsFilter = (products) => {
    //     const dailyProducts = products.filter((product) => {
    //         return product.category.value === 'daily';
    //     })

    //     const filteredProductId = dailyProducts.map((product) => {
    //         return product.id;
    //     })

    //     if(filteredProductId){
    //         Navigate(`/product?daily`)
    //     }else{
    //         Navigate(`/`)
    //     }
    //     setRefreshData(true);
    // }

    //filter product by gaming category

    //filter product by kerja category

    return(
        <>
            <Container className="cardHeader mx-auto mt-4 pt-3 pb-3" fluid>
                <h2 className="searchEngineHeader">Cari yang Kamu Butuh!</h2>
                <h5 className="searchEngineHeader">Yuk, cari Produk yang kamu butuhkan disini</h5>

                <Row>
                    <Col md={11} sm={12} className="mx-auto">
                        <Form>
                            <Row className="mb-3">
                                <InputGroup as={Col} md="10">
                                    <Form.Control
                                        type="text"
                                        placeholder="Cari Barangmu"
                                        className="form-control bg-light fs-6"
                                        
                                        onChange={searchProduct} 
                                    />
                                </InputGroup>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <Container className="mt-3 mb-3">
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
                                        // onChange={(e) => {filteredProduct(e.target.value)}}
                                    >
                                        <option value="All">Semua</option>
                                        <option value="daily">Daily</option>
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
                                <Button 
                                    variant="outline-danger" 
                                    size="sm"
                                    // onClick={()=> dailyProductsFilter(products)}
                                >
                                    Daily Use
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                {/* Segmen Asli */}
                <Row>
                    {search.map((product)=>{
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
                </Row>
            </Container>
        </>
    )
}