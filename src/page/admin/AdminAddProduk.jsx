import React from "react";

import { Row, Col } from "react-bootstrap";

//import komponen
import NavHome from "../../components/navBar/NavHome";
import NavAdmin from "../../components/admin/NavAdmin";
import FormAddProduct from "../../components/product/FormAddProduct";

export default function AdminAddProduk() {
  return (
    <>
      <NavHome />
      <div>
        <Row>
          <Col md={3} sm={12} className="left-box">
            <NavAdmin />
          </Col>
          <Col md={9} sm={12} className="right-box">
            <FormAddProduct />
          </Col>
        </Row>
      </div>
    </>
  );
}
