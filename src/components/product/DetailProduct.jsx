import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

import Laptop from "../../asset/img/laptopPlaceholder.png";
import Token from "../../features/token";
import axios from "axios";
import Swal from "sweetalert2";

export default function DetailProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

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
        inputLabel: "Kuantitas",
        inputPlaceholder: "Kuantitas",
        inputAttributes: {
          min: "1",
        },
      });
      if (!quantity) return;

      const response = await axios.post(
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

      return response.data.data;
    } catch (error) {
      console.log(error);
      await Swal.fire("Terjadi Error", error.message, "error");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

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
                  <div class="featured-image mb-3">
                    <Image
                      src={product?.image}
                      width={400}
                      height={400}
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
                    <div class="header-text mb-3">
                      <h4>Nama Produk : {product?.name}</h4>
                    </div>
                    <div class="header-text mb-3">
                      <h5>Harga : Rp {product?.price}</h5>
                    </div>
                    <div class="header-text mb-3">
                      <h5>Deskripsi : {product?.description}</h5>
                    </div>
                    <div class="header-text mb-3">
                      <h5>Sisa Stock : {product?.stock}</h5>
                    </div>
                    <div>
                      <Button
                        type="submit"
                        variant="outline-danger"
                        className="mb-3 btn-lg w-100 fs-6"
                        onClick={() => navigate(-1)}
                      >
                        Kembali
                      </Button>

                      <Button
                        type="submit"
                        variant="primary"
                        className="mb-3 btn-lg w-100 fs-6"
                        onClick={addProductToChart}
                      >
                        Keranjang
                      </Button>

                      <Button
                        type="submit"
                        variant="primary"
                        className="mb-3 btn-lg w-100 fs-6"
                      >
                        Beli
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
