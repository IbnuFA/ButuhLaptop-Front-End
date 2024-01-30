import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Row,
  Col,
  Form,
  Button,
  Card,
  Container,
  Image,
} from "react-bootstrap";

//import icon
import { IoMdAdd  } from "react-icons/io";


import Token from "../../features/token";
import axios from "axios";
import Swal from "sweetalert2";
import { formatRupiah } from "../../features/utils";

export default function DetailProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/products/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${Token.getToken()}`,
          },
        }
      );

      setProduct(response.data);
      return response.data.data;
    } catch (error) {
      await Swal.fire("Terjadi Error", error.message, "error");
    }
  };

  const addProductToChart = async () => {
    try {
      const { value: quantity } = await Swal.fire({
        input: "number",
        title: "Masukkan Jumlah Pesananmu!",
        inputLabel: "Masukan Jumlah Barang yang ingin kamu Masukan ke Keranjangmu",
        inputPlaceholder: "Misal : 1",
        inputAttributes: {
          min: "1",
        },
      });
      if (!quantity) return;

      const response = await axios.post(
        `http://localhost:5000/cart`,
        {
          product_id: productId,
          quantity: parseInt(quantity),
        },
        {
          headers: {
            Authorization: `Bearer ${Token.getToken()}`,
          },
        }
      );

      return response.data.data;
    } catch (error) {
      console.log(error);
      await Swal.fire("Terjadi Error", error.message, "error");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const checkProductOrder = async () => {
    const response = await axios.get(`http://localhost:5000/order/check`, {
      headers: {
        Authorization: `Bearer ${Token.getToken()}`,
      },
      params: {
        productId,
      },
    });
    let order = response.data.data;

    if (!order) {
      return 0;
    }

    return (
      order.shippings.services.find(({ name }) => name.toLowerCase() === "reg")
        ?.cost || 0
    );
  };

  const handleProductCheckout = async () => {
    try {
      Swal.showLoading();

      const shipPrice = await checkProductOrder();

      const swalResult = await Swal.fire({
        title: "Konfirmasi Order Shipping!",
        html: `Pengiriman JNE REG: ${formatRupiah(shipPrice)}
          <br>
          Harga total Order: ${formatRupiah(product?.price)}
          <br>
          Total Keseluruhan : ${formatRupiah(product?.price + shipPrice)}`,
        showCancelButton: true,
        confirmButtonText: "Konfirmasi",
      });

      if (swalResult.isConfirmed) {
        await checkOutProduct();

        await Swal.fire('Sukses', 'Produk Berhasil di order', 'success')

        await getProduct();
      }
    } catch (error) {
      await Swal.fire("Terjadi Error", error.message, "error");
    }
  };

  const checkOutProduct = async () => {
    await axios.post(
      `http://localhost:5000/order/product`,
      {
        product_id: productId,
      },
      {
        headers: {
          Authorization: `Bearer ${Token.getToken()}`,
        },
      }
    );
  };

  return (
    <>
      <Card className="col-md-11 mx-auto mt-4">
        <Card.Header className="cardHeader">Detail Produk</Card.Header>
        <Card.Body>
          <Container
            fluid
            border="primary"
            className="d-flex justify-content-center align-items-center "
          >
            {product && (
              <Row>
                <Col
                  md={6}
                  sm={12}
                  className="rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
                >
                  <div class="featured-image mb-3 ">
                    <Image
                      className="border border-primary"
                      src={product?.image}
                      width={400}
                      height={400}
                      roundedCircle
                      fluid
                    />
                  </div>
                </Col>
                <Col
                  md={6}
                  sm={12}
                  className="rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
                >
                  <div class="row align-items-center">
                    <div class="header-text">
                      <h4>{product?.name}</h4>
                    </div>
                    <div class="header-text mb-4">
                      <a className="Low-Level-Text">Sisa Stock </a> <a> : {product?.stock}</a>
                    </div>
                    <div class="header-text mb-3">
                      <h3>{formatRupiah(product?.price)}</h3>
                    </div>
                    <div class="header-text">
                      <h6>Spesifikasi Produk : </h6>
                    </div>
                    <div class="header-text mb-3">
                      <h6>{product?.description}</h6>
                    </div>
                    <div>
                      {/* <Button
                        type="submit"
                        variant="outline-danger"
                        className="mb-3 btn-lg w-100 fs-6"
                        onClick={() => navigate(-1)}
                      >
                        Kembali
                      </Button> */}

                      <Button
                        type="submit"
                        variant="primary"
                        className="mb-3 btn-lg w-100 fs-6"
                        onClick={addProductToChart}
                      >
                        <IoMdAdd  size={20}/> Keranjang
                      </Button>

                      <Button
                        type="submit"
                        variant="primary"
                        className="mb-3 btn-lg w-100 fs-6"
                        onClick={handleProductCheckout}
                      >
                        Beli Langsung
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            )}
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}
