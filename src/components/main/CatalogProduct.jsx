import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Button,
  Card,
  Row,
  Col,
  Table,
  Form,
  InputGroup,
} from "react-bootstrap";

import Swal from "sweetalert2";
import Token from "../../features/token";
import { formatRupiah } from "../../features/utils";
import { getProductStatus } from "../../features/productStatus";

export default function CatalogProduct() {
  const [products, setProducts] = useState([]);
  const [productItems, setproductItems] = useState([]);
  const [msg, setMsg] = useState("");
  const [search, setSearch] = useState(products);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    Swal.showLoading();
    try {
      const response = await axios.get(`http://localhost:5000/products`, {
        headers: {
          Authorization: `Bearer ${Token.getToken()}`,
        },
      });
      setproductItems([
        ...new Set(response.data.map((value) => value.category)),
      ]);
      setProducts(response.data);
      setSearch(response.data);
      Swal.close();
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadmore] = useState(true);

    const toggleReadMore = () => {
      setIsReadmore(!isReadMore);
    };

    return (
      <p>
        {isReadMore ? text.slice(0, 15) : text}
        <span
          onClick={toggleReadMore}
          className="read-or-hide"
          style={{ color: "blue" }}
        >
          {isReadMore ? "...Read more" : " Show less"}
        </span>
      </p>
    );
  };

  const searchProduct = (event) => {
    setSearch(
      products.filter((e) => e.name.toLowerCase().includes(event.target.value))
    );
  };

  const filteredItems = (value) => {
    const newItems = products.filter(
      (newFilter) => newFilter.category === value
    );
    setSearch(newItems);
  };

  const FilterButton = ({ productItems, filteredItems, setSearch }) => {
    return (
      <div className="d-flex justify-content-start">
        <Button
          variant="success"
          className="me-1"
          onClick={() => setSearch(products)}
        >
          All
        </Button>
        {productItems.map((value) => (
          <Button
            variant="success"
            className="me-1"
            onClick={() => filteredItems(value)}
          >
            {getProductStatus(value)}
          </Button>
        ))}
      </div>
    );
  };

  return (
    <>
      <Container className="cardHeader mx-auto mt-4 pt-3 pb-3" fluid>
        <h2 className="searchEngineHeader">Cari yang Kamu Butuh!</h2>
        <h5 className="searchEngineHeader">
          Yuk, cari Produk yang kamu butuhkan disini
        </h5>

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
              <td className="textTable">Sortir Kategori Penggunaan</td>
              <td> : </td>
              <td>
                <FilterButton
                  productItems={productItems}
                  filteredItems={filteredItems}
                  setSearch={setSearch}
                />
              </td>
            </tr>
          </tbody>
        </Table>

        {/* Segmen Asli */}
        <Row>
          {search.map((product) => {
            return (
              <>
                <Col sm={6} md={4} lg={3} key={product.id}>
                  <Card className="mb-3">
                    <Card.Img
                      variant="top"
                      className="Catalog-Custom-Img"
                      src={product.image}
                      alt={product.name}
                    />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>
                        <h5>{formatRupiah(product.price)}</h5>
                        <h6>Stok Barang : {product.stock}</h6>
                        <h6>
                          <ReadMore>{product.description}</ReadMore>
                        </h6>
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
            );
          })}
        </Row>
      </Container>
    </>
  );
}
