import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table, Card, Image, Toast, Accordion } from "react-bootstrap";
import { FaRegQuestionCircle } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";

import Swal from "sweetalert2";
import axios from "axios";
import Token from "../../features/token";
import { formatRupiah } from "../../features/utils";
import { getOrderStatus } from "../../features/OrderStatus";

export default function DetailCheckout() {
  const navigate = useNavigate();
  const { id: orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const toggleShowToast = () => setShowToast(!showToast);

  const checkOrder = async () => {
    Swal.showLoading();
    const response = await axios.get("http://localhost:5000/order/check", {
      headers: {
        Authorization: `Bearer ${Token.getToken()}`,
      },
      params: {
        orderId,
      },
    });

    const newOrders = response.data.data;
    Swal.close();

    return newOrders;
  };

  const getOrder = async () => {
    try {
      const response = await axios.get("http://localhost:5000/order/me/list", {
        headers: {
          Authorization: `Bearer ${Token.getToken()}`,
        },
        params: {
          orderId,
        },
      });

      const newOrders = response.data.data;

      if (newOrders.length > 0) {
        const newOrder = newOrders[0];

        if (!newOrder.total_price) {
          const detailOrder = await checkOrder();
          newOrder.total_price =
            newOrder.products_price +
            detailOrder.shippings.services.find(
              ({ name }) => name.toLowerCase() === "reg"
            )?.cost;
        }

        return setOrder(newOrder);
      }

      setOrder(null);
      
    } catch (error) {
      await Swal.fire("Terjadi Error", error.message, "error");
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  const handlePay = async () => {
    const swalResult = await Swal.fire({
      title: "Upload bukti pembayaran",
      input: "file",
      inputAttributes: {
        accept: "image/*",
        "aria-label": "Upload bukti pembayaranmu",
      },
    });

    if (swalResult.value) {
      try {
        const form = new FormData();

        form.append("file", swalResult.value);

        await axios.put(
          `http://localhost:5000/order/payment/${orderId}`,
          form,
          {
            headers: {
              Authorization: `Bearer ${Token.getToken()}`,
            },
          }
        );

        await Swal.fire(
          "Sukses",
          "Bukti pembayaran berhasil di upload",
          "success"
        );
        await getOrder();
      } catch (error) {
        await Swal.fire("Terjadi Error", error.message, "error");
      }
    }
  };

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

  const handleOrderComplete = async (approval = true) => {
    try {
      const swalResult = await Swal.fire({
        title: "Apa kamu yakin?",
        text: "Pastikan barang sudah kamu terima.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya!",
        cancelButtonText: 'Tidak.'
      });

      if (swalResult.isConfirmed) {
        Swal.showLoading();

        await axios.put(
          `http://localhost:5000/order/confirmation/receive/${orderId}`,
          {
            approval,
          },
          {
            headers: {
              Authorization: `Bearer ${Token.getToken()}`,
            },
          }
        );

        await Swal.fire("Order selesai!", "", "success");
        await getOrder();
      }
    } catch (error) {
      await Swal.fire("Terjadi Error", error.message, "error");
    }
  };

  return (
    <>
      <Card className="col-md-10 col-sm-11 mx-auto mt-4 mb-4">
        <Card.Header className="cardHeader">Detail Checkout</Card.Header>
        <Card.Body>
          <div class="header-text d-flex justify-content-center mb-1">
            <h5>Detail Checkout</h5>
          </div>
          <Table>
            <tbody>
              <tr>
                <td>Id Checkout</td>
                <td> : </td>
                <td>{order?.id || "-"}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td> : </td>
                <td>{getOrderStatus(order?.status)}</td>
              </tr>
              <tr>
                <td>Tanggal Pesan</td>
                <td> : </td>
                <td>{order?.createdAt || "-"}</td>
              </tr>
              <tr>
                <td>Alamat Pengiriman</td>
                <td> : </td>
                <td>{order?.user?.address || "-"}</td>
              </tr>
              <tr>
                <td>Kurir</td>
                <td> : </td>
                <td>{order ? "JNE" : ""}</td>
              </tr>
              <tr>
                <td>Total Harga Produk</td>
                <td> : </td>
                  <td>{formatRupiah(order?.products_price || "-")}</td>
              </tr>
              <tr>
                <td>Ongkir</td>
                <td> : </td>
                <td>
                  {formatRupiah(order ? order?.total_price - order?.products_price : "-")}
                </td>
              </tr>
              <tr>
                <td>Total Harga Produk</td>
                <td> : </td>
                <td>
                  {formatRupiah(order?.total_price || "-")}
                </td>
              </tr>
            </tbody>
          </Table>

          <div className="d-flex flex-column align-items-center">
            {order?.status === 2 && (
              <>
                <Button
                  variant="success"
                  className="mb-2"
                  style={{ width: 300 }}
                  onClick={() => handlePay()}
                >
                  Upload Bukti pembayaran
                </Button>
                <Button
                  variant="primary"
                  style={{ width: 300 }}
                  onClick={() => handleCheckout()}
                >
                  <FaRegQuestionCircle size={20} /> Cara Pembayaran
                </Button>
              </>
            )}

            {order?.status === 4 && (
              <>
                <Button
                  variant="success"
                  className="mb-2"
                  style={{ width: 300 }}
                  onClick={() => handleOrderComplete()}
                >
                  Konfirmasi Pengiriman selesai
                </Button>
              </>
            )}
          </div>

          <Accordion defaultActiveKey="0" className="mb-1">
            <Accordion.Item eventKey="1">
              <Accordion.Header>List Pesanan Produk</Accordion.Header>
              <Accordion.Body>
              <Table className="mt-1" responsive>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Gambar</th>
                    <th>Nama Barang</th>
                    <th>Jumlah</th>
                    <th>Harga</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {order?.order_details?.map((detail, idx) => (
                    <tr key={detail.id}>
                      <td>{idx + 1}</td>
                      <td>
                        <Image
                          src={detail?.product?.image}
                          fluid
                          width={100}
                          height={100}
                        />
                      </td>
                      <td>{detail?.product?.name}</td>
                      <td>{detail?.quantity}</td>
                      <td>Rp {detail?.quantity * detail?.product?.price}</td>
                      <td>
                        <Button onClick={() => navigate(`/product/${detail?.product?.id}`)}>
                          <BsInfoCircle size={20}/>
                        </Button>
                        </td>
                    </tr>
                    ))}
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </>
  );
}
