import React, { useState, useEffect } from "react";

import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Table, Button } from "react-bootstrap";

//import icon
import { BsCheckLg, BsXLg, BsPencilSquare } from "react-icons/bs";
import { RiEdit2Line } from "react-icons/ri";
import Swal from "sweetalert2";
import axios from "axios";
import Token from "../../features/token";
import { getOrderStatus } from "../../features/OrderStatus";

export default function ListAllOrder() {
  const [orders, setOrders] = useState([]);

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

  const acceptOrder = async (orderId, approval = true) => {
    try {
      Swal.showLoading();
      const response = await axios.put(
        `http://localhost:5000/order/approval/accept/${orderId}`,
        { approval },
        {
          headers: {
            Authorization: `Bearer ${Token.getToken()}`,
          },
        }
      );

      await Swal.fire("Order telah di update", "", "success");
      await getOrders();
    } catch (error) {
      await Swal.fire("Terjadi Error", error.message, "error");
    }
  };

  const checkOrder = async (orderId) => {
    const response = await axios.get(`http://localhost:5000/order/check`, {
      headers: {
        Authorization: `Bearer ${Token.getToken()}`,
      },
      params: {
        orderId,
      },
    });
    const order = response.data.data;

    return order;
  };

  const insertShipInfo = async (orderId) => {
    try {
      Swal.showLoading();
      const orderDetail = await checkOrder(orderId);
      
      const orderShipping = orderDetail.shippings.services.find(({ name }) => name.toLowerCase() === 'reg');

      const swalResult = await Swal.fire({
        title: "Konfirmasi Order Shipping!",
        html: `Pengiriman JNE REG: ${orderShipping.cost}
          <br>
          Harga total Order: ${orderDetail.products_price}
          <br>
          Total Keseluruhan : ${orderDetail.products_price + orderShipping.cost} `,
        showCancelButton: true,
        confirmButtonText: "Konfirmasi",
      });

      if (swalResult.isConfirmed) {
        Swal.showLoading();

        await axios.put(`http://localhost:5000/order/shipping/info/${orderId}`, {
          provider: 'jne',
          provider_service: 'REG',
          shipping_price: orderShipping.cost,
          etd: orderShipping.etd,
        }, {
          headers: {
            Authorization: `Bearer ${Token.getToken()}`,
          }
        });

        await Swal.fire('Order berhasil dibuat.', '', 'success');
        await getOrders();
      }

    } catch (error) {
      await Swal.fire("Terjadi Error", error.message, "error");
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <Card className="col-md-11 mx-auto mt-4">
        <Card.Header className="cardHeader">List Order Masuk</Card.Header>
        <Card.Body>
          <Container fluid className="mt-3 mb-3">
            <Table responsive>
              <thead>
                <tr>
                  <th>No</th>
                  <th>ID Pesanan</th>
                  <th>Tanggal Pesan</th>
                  <th>User Pemesan</th>
                  <th>Harga Pesanan</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, orderIdx) => (
                  <tr key={order.id}>
                    <td>{orderIdx + 1}</td>
                    <td>{order?.id}</td>
                    <td>{order?.createdAt}</td>
                    <td>
                      {order?.user?.first_name} {order?.user?.last_name}
                    </td>
                    <td>{order?.products_price}</td>
                    <td>{getOrderStatus(order?.status)}</td>
                    <td>
                      {order.status === 0 && (
                        <>
                          <Button
                            variant="success"
                            size="sm"
                            className="me-1"
                            onClick={() => acceptOrder(order?.id, true)}
                          >
                            <BsCheckLg size={20} />
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            className="me-1"
                            onClick={() => acceptOrder(order?.id, false)}
                          >
                            <BsXLg size={20} />
                          </Button>
                        </>
                      )}

                      {order.status === 1 && (
                        <>
                          <Button
                            variant="info"
                            size="sm"
                            className="me-1"
                            onClick={() => insertShipInfo(order?.id)}
                          >
                            <BsPencilSquare size={20} />
                          </Button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}
