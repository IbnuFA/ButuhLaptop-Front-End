import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Token from "../../features/token";

import Swal from "sweetalert2";

import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Card, Row, Col, Table } from "react-bootstrap";

//import icon
import { BiCart } from "react-icons/bi";
import { IoBagHandleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function AdminMainComponent() {
  const navigate = useNavigate();
  const { user, isSuccess } = useSelector((state) => state.auth);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  const [msg, setMsg] = useState("");

  useEffect(() => {
    getProducts();
    getOrders();
    getUser();
    getFeedbacks();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/products`, {
        headers: {
          Authorization: `Bearer ${Token.getToken()}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const getOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5000/admin/order", {
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

  const getUser = async () => {
    Swal.showLoading();

    try {
      const response = await axios.get(`http://localhost:5000/admin/users`, {
        headers: {
          Authorization: `Bearer ${Token.getToken()}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
    Swal.close();
  };

  const getFeedbacks = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/feedbacks`, {
        headers: {
          Authorization: `Bearer ${Token.getToken()}`,
        },
      });
      setFeedbacks(response.data);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <>
      <Card className="col-md-11 col-md-11 mx-auto mt-4">
        <Card.Header className="cardHeader">Halo, Admin {user?.first_name} {user?.last_name}</Card.Header>
        <Card.Body>
          <Container
            fluid
            border="primary"
            className="d-flex justify-content-evenly align-items-center mt-3 mb-3"
          >
            <Row>
              <Col md={5} sm={10}>
                <Card className="mt-3">
                  <Card.Body>
                    <Card.Title>
                      Jumlah Produk : {products.length}
                    </Card.Title>
                    <Card.Text>
                      Jumlah Barang yg berada pada keranjangmu saat ini. Ayo
                      Checkout Sekarang!
                    </Card.Text>
                    <Button
                      type="submit"
                      variant="primary"
                      className="mb-3 btn-lg w-100 fs-6"
                      onClick={() => navigate("/admin/listproduct")}
                      >
                      <BiCart size={20} className="me-2" /> Daftar Produk
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={5} sm={10}>
                <Card className="mt-3">
                  <Card.Body>
                    <Card.Title>Jumlah Order : {orders.length}</Card.Title>
                    <Card.Text>
                      Pesananmu yang sedang berlansung. Cek secara berkala untuk
                      mengetahui progesnya!
                    </Card.Text>
                    <Button
                      type="submit"
                      variant="primary"
                      className="mb-3 btn-lg w-100 fs-6"
                      onClick={() => navigate("/admin/listorder")}
                      >
                      <IoBagHandleOutline size={20} className="me-2" />{" "}
                      Order Masuk
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={5} sm={10}>
                <Card className="mt-3">
                  <Card.Body>
                    <Card.Title>Jumlah User Terdaftar : {users.length}</Card.Title>
                    <Card.Text>
                      Pesananmu yang sedang berlansung. Cek secara berkala untuk
                      mengetahui progesnya!
                    </Card.Text>
                    <Button
                      type="submit"
                      variant="primary"
                      className="mb-3 btn-lg w-100 fs-6"
                      onClick={() => navigate("/admin/listuser")}
                      >
                      <IoBagHandleOutline size={20} className="me-2" />{" "}
                      User Terdaftar
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={5} sm={10}>
                <Card className="mt-3">
                  <Card.Body>
                    <Card.Title>Jumlah Feedback Masuk : {feedbacks.length}</Card.Title>
                    <Card.Text>
                      Pesananmu yang sedang berlansung. Cek secara berkala untuk
                      mengetahui progesnya!
                    </Card.Text>
                    <Button
                      type="submit"
                      variant="primary"
                      className="mb-3 btn-lg w-100 fs-6"
                      onClick={() => navigate("/admin/listfeedback")}
                      >
                      <IoBagHandleOutline size={20} className="me-2" />{" "}
                      Feedback Masuk
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}
