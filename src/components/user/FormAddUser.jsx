import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form, Button, Card } from "react-bootstrap";

//import icon
import { GiCancel } from "react-icons/gi";
import { RiAddBoxLine } from "react-icons/ri";

export default function AddUser() {
  return (
    <>
      <Card className="col-md-11 mx-auto mt-4">
        <Card.Header className="cardHeader">Tambah User</Card.Header>
        <Card.Body>
          <Row>
            <Col md={11} sm={12} className="mx-auto">
              <Form>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Nama Depan</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      className="form-control bg-light fs-6"
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Nama Belakang</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      className="form-control bg-light fs-6"
                      required
                    />
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="8"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      className="form-control bg-light fs-6"
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Pilih Role User</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="form-control bg-light"
                    >
                      <option>Plilih Role</option>
                      <option value="pas">User</option>
                      <option value="modal_dikit">Admin</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="form-control form-control-lg bg-light fs-6 mb-3"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="form-control form-control-lg bg-light fs-6 mb-3"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Row>
                  <Col className="d-flex flex-row-reverse">
                    <Button
                      type=""
                      variant="outline-danger"
                      className="mb-3 ms-3 btn-md "
                    >
                      <GiCancel size={20} /> Batal
                    </Button>

                    <Button
                      type="submit"
                      variant="primary"
                      className="mb-3 btn-md "
                    >
                      <RiAddBoxLine size={20} /> Edit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
