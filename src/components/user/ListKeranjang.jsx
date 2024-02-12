import React, { useEffect, useState } from "react";
import "../../App.css";
import axios from "axios";
import Token from "../../features/token";
import { formatRupiah } from "../../features/utils";

import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Table, Button, Card, Image } from "react-bootstrap";

//import icon
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

//import sweetalert
import Swal from "sweetalert2";

export default function ListKeranjang() {
  const [carts, setCarts] = useState([]);
  const [shipPrice, setShipPrice] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);

  const getCarts = async () => {
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

        await checkOrder();
        const prices = newCart.reduce((a, b) => a + b.totalPrices, 0);
        setCartPrice(prices);

        return;
      }

      setCarts([]);
      setCartPrice(0);
      setShipPrice(0);
    } catch (error) {
      await Swal.fire("Terjadi Error", error.message, "error");
    }
  };

  const checkOrder = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/order/check`, {
        headers: {
          Authorization: `Bearer ${Token.getToken()}`,
        },
      });
      let order = response.data.data;

      if (order) {
        setShipPrice(
          order.shippings.services.find(
            ({ name }) => name.toLowerCase() === "reg"
          )?.cost
        );
      }
    } catch (error) {
      await Swal.fire("Terjadi Error", error.message, "error");
    }
  };

  useEffect(() => {
    getCarts();
  }, []);

  const addQuantityCart = async (productId, quantity = 1) => {
    try {
      Swal.showLoading();

      await axios.post(
        `http://localhost:5000/cart`,
        {
          product_id: productId,
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${Token.getToken()}`,
          },
        }
      );

      await getCarts();
      await Swal.fire("Update Success", "Item berhasil ditambahkan", "success");
    } catch (error) {
      await Swal.fire("Terjadi Error", error.message, "error");
    }
  };

  const decreaseQuantityCart = async (productId) => {
    try {
      Swal.showLoading();

      await axios.delete(`http://localhost:5000/cart/${productId}`, {
        headers: {
          Authorization: `Bearer ${Token.getToken()}`,
        },
      });

      await getCarts();
      await Swal.fire("Update Success", "Item berhasil dihapus", "success");
    } catch (error) {
      await Swal.fire("Terjadi Error", error.message, "error");
    }
  };

  //checkout
  const checkoutProduct = async () => {
    Swal.showLoading();

    await axios.post(
      `http://localhost:5000/order`,
      {},
      {
        headers: {
          Authorization: `Bearer ${Token.getToken()}`,
        },
      }
    );
  };

  //setting sweetalert
  const handleCheckout = async () => {
    try {
      const { isConfirmed } = await Swal.fire({
        title: "Apakah anda yakin?",
        text: "Produk yang dipilih akan dicheckout",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Batal",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Checkout",
      });

      if (isConfirmed) {
        await checkoutProduct();
        await Swal.fire(
          "Checkout!",
          "Hore! Produkmu telah berhasil Checkout.",
          "success"
        );
        await getCarts();
      }
    } catch (error) {
      await Swal.fire("Terjadi Error", error.message, "error");
    }
  };

  return (
    <>
      <Card className="col-md-10 mx-auto mt-4 mb-4">
        <Card.Header className="cardHeader"> Keranjangmu</Card.Header>
        <Card.Body>
          <Col>
            <Row>
              <div className="overflow-auto" style={{ height: "auto" }}>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Gambar</th>
                      <th>Nama Barang</th>
                      <th>Jumlah</th>
                      <th>Harga Satuan</th>
                      <th>Total Harga</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts &&
                      carts.map((cart, idx) => {
                        const { product } = cart;
                        return (
                          <tr key={cart.id}>
                            <td>{idx + 1}</td>
                            <td>
                              <Image
                                src={product?.image}
                                fluid
                                width={100}
                                height={100}
                              />
                            </td>
                            <td>{product?.name}</td>
                            <td>
                              <Button
                                variant="danger"
                                size="sm"
                                className="me-1"
                                onClick={() =>
                                  decreaseQuantityCart(product?.id)
                                }
                              >
                                <BsDashLg size={20} />
                              </Button>
                              <span className="mx-3">{cart?.quantity}</span>
                              <Button
                                variant="success"
                                size="sm"
                                className="me-1"
                                onClick={() => addQuantityCart(product?.id)}
                              >
                                <BsPlusLg size={20} />
                              </Button>
                            </td>
                            <td>{formatRupiah(product?.price)}</td>
                            <td>{formatRupiah(cart?.totalPrices)}</td>
                          </tr>
                        );
                      })}
                    {carts && (
                      <tr>
                        <td colSpan={4}></td>
                        <td>Harga ongkir JNE Regular : </td>
                        <td className="bold-text">{formatRupiah(shipPrice)}</td>
                      </tr>
                    )}
                    <tr>
                      <td colSpan={4}></td>
                      <td>Total : </td>
                      <td className="bold-text">
                        {formatRupiah(cartPrice + shipPrice)}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Row>
          </Col>
          {carts.length > 0 && (
            <Row>
              <Col className="d-flex flex-row-reverse">
                <Button
                  type=""
                  variant="primary"
                  className="mb-3 ms-3 btn-md "
                  onClick={() => handleCheckout()}
                >
                  <FaCheck size={20} /> Checkout
                </Button>
              </Col>
            </Row>
          )}
        </Card.Body>
      </Card>
    </>
  );
}
