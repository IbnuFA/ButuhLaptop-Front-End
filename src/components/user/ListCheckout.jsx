import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Row,
  Col,
  Form,
  Button,
  Card,
  Container,
  Table,
} from "react-bootstrap";

//import icon
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";

//import sweetalert
import Swal from "sweetalert2";
import axios from "axios";
import Token from "../../features/token";
import { getOrderStatus } from "../../features/OrderStatus";

export default function DetailCheckout() {
  const Navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
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

  useEffect(() => {
    getOrders();
  }, []);

  //cancel Checkout
  const cancelCheckout = async (id) => {
    console.log("ini cancel checkout");
  };

  //setting sweetalert cara pembayaran
  const handleCheckout = async () => {
    Swal.fire({
      title: "Cara Pembayaran!",
      html: `
            <ol>
                <li align="left">Pembayaran bisa dilakukan secara Online menggunakan Barcode QRIS Diatas.</li>
                <li align="left">Setelah pembayran, uukti pembayaran bisa di-screenshoot dan dikirim ke Admin pada nomor <a href="#">WA berikut</a></li>
                <li align="left">Admin akan segera memproses pesanan anda segera setelah bukti telah dikonfirmasi</li>
            </ol> 
            `,
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };

  //setting sweetalert cancel checkout
  const handleCancelCheckout = async (id) => {
    Swal.fire({
      title: "Apakah anda yakin membatalkan pesanan?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Batal",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yakin",
    }).then((result) => {
      if (result.isConfirmed) {
        cancelCheckout(id);
        Swal.fire("Pesanan kamu telah dibatalkan");
      }
    });
  };

  return (
    <>
      <Card className="col-md-10 mx-auto mt-4">
        <Card.Header className="cardHeader">Checkout Kamu</Card.Header>
        <Card.Body>
          <Row>
            <Col className="d-flex">
              <Button
                type=""
                variant="primary"
                className="mb-3 ms-3 btn-md "
                onClick={() => handleCheckout()}
              >
                <FaRegQuestionCircle size={20} /> Cara Pembayaran
              </Button>
            </Col>
          </Row>
          <Container
            fluid
            border="primary m-0"
            className="d-flex justify-content-center align-items-center "
          >
            <Col>
              <Row>
                <div className="overflow-auto" style={{ height: "auto" }}>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Order Id</th>
                        <th>Tanggal Pemesanan</th>
                        <th>Status Pembayaran</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, orderIdx) => (
                        <tr key={order?.id}>
                          <td>{orderIdx + 1}</td>
                          <td>{order?.id}</td>
                          <td>{order?.createdAt}</td>
                          <td>{getOrderStatus(order?.status)}</td>
                          <td>
                            <Link to={`/user/detailcheckout/${order?.id}`}>
                              <Button
                                variant="primary"
                                size="sm"
                                className="me-1"
                              >
                                <BsInfoCircle size={20} />
                              </Button>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Row>
            </Col>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}
