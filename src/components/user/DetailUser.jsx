import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../features/authSlice";
import axios from "axios";
import Token from "../../features/token";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button, Card, Container } from "react-bootstrap";

//import icon
import { BiCart } from "react-icons/bi";
import { IoBagHandleOutline } from "react-icons/io5";

import Swal from "sweetalert2";

export default function DetailUser (){
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [orders, setOrders] = useState([]);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        getUserCart();
        getUserOrder();
    }, [])

    const {user} = useSelector((state => state.auth));

    const getUserCart = async() => {
        try {
            Swal.showLoading();
            const response = await axios.get(`http://localhost:5000/cart`, {
              headers: {
                Authorization: `Bearer ${Token.getToken()}`,
              },
            });
            Swal.close();
            let newCart = response.data.data;
            if (newCart.length > 0) {
              newCart = newCart.map((item) => {
                const totalPrices = item.quantity * item.product.price;
                return {
                  ...item,
                  totalPrices,
                };
              });
              setCarts(newCart);
              return;
            }
      
            setCarts([]);
            
          } catch (error) {
            await Swal.fire("Terjadi Error", error.message, "error");
          }
    }


    const getUserOrder = async() => {
        try {
            const response = await axios.get("http://localhost:5000/order/me/list", {
              headers: {
                Authorization: `Bearer ${Token.getToken()}`,
              },
            });
      
            const newOrders = response.data.data;
      
            if (newOrders.length > 0) {
              setOrders(newOrders);
              return;
            }
      
            setOrders([]);
          } catch (error) {
            await Swal.fire("Terjadi Error", error.message, "error");
          }
    };
    

    const getCartLenght = (data) => {
        var data = Object.keys(data).length;
    }

    const logout = () => {
        dispatch(LogOut());
        dispatch(reset());
        navigate("/login")
    }

    return(
        <>
            <Card className="col-md-10 mx-auto mt-4 mb-4">
                <Card.Header className="cardHeader">Profil Kamu</Card.Header>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col md="auto">
                                <div className="profil-user d-flex align-items-center justify-content-center border border-primary rounded-circle">
                                    {Array.from(user?.first_name)[0]}{Array.from(user?.last_name)[0]}
                                </div>
                            </Col>
                            <Col md="auto" >
                                <div className="profil-bio d-flex flex-column align-items-center justify-content-center">
                                    <b>{user?.first_name} {user?.last_name}</b>
                                    <b>Level : Emas</b>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid border="primary" className="d-flex justify-content-evenly align-items-center mt-3 mb-3">
                        <Col md={5} sm={10}>
                            <Card >
                                <Card.Body>
                                    <Card.Title>Barang di Keranjang : {carts.length}</Card.Title>
                                    <Card.Text>
                                        Jumlah Barang yg berada pada keranjangmu saat ini. Ayo Checkout Sekarang!
                                    </Card.Text>
                                    <Button type="submit" variant="primary" className="mb-3 btn-lg w-100 fs-6" onClick={()=> navigate('/user/keranjang')}>
                                        <BiCart size={20} className="me-2"/> Keranjangmu
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={5} sm={10}>
                            <Card >
                                <Card.Body>
                                    <Card.Title>Jumlah Checkout : {orders.length}</Card.Title>
                                    <Card.Text>
                                        Pesananmu yang sedang berlansung. Cek secara berkala untuk mengetahui progesnya!
                                    </Card.Text>
                                    <Button type="submit" variant="primary" className="mb-3 btn-lg w-100 fs-6" onClick={()=> navigate('/user/checkout')}>
                                        <IoBagHandleOutline size={20} className="me-2"/> Pesananmu
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Container>
                </Card.Body>
            </Card>
        </>
    )
}