import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Card, Table } from "react-bootstrap";

//import icon
import { BsInfoCircle, BsTrash3 } from "react-icons/bs";
import { RiEdit2Line } from "react-icons/ri";

export default function AdminListProduct() {
  const Navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  return (
    <>
      <Card className="col-md-12 mx-auto mt-4">
        <Card.Body>
          <Container fluid className="mt-3 mb-3">
            <div class="row align-items-center">
              <div class="header-text">
                <h3>List Order</h3>
              </div>
              <Button
                className="primary me-1"
                onClick={() => Navigate("/admin/addproduct")}
              >
                Add Product
              </Button>
            </div>
            <Table responsive>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Gambar</th>
                  <th>Nama Produk</th>
                  <th>Harga</th>
                  <th>Sisa Stock</th>
                  <th>Kategori</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => {
                  return (
                    <>
                      <tr key={product.uuid}>
                        <td>{index + 1}</td>
                        <td>Table cell</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        <td>{product.category}</td>
                        <td>
                          <Button variant="success" size="sm" className="me-1">
                            <BsInfoCircle size={20} />
                          </Button>
                          <Button variant="primary" size="sm" className="me-1">
                            <RiEdit2Line size={20} />
                          </Button>
                          <Button variant="outline-danger" size="sm">
                            <BsTrash3 size={20} />
                          </Button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </Table>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}
