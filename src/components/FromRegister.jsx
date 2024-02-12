import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { Reg, reset } from "../features/authSlice";

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

import IlustLogin from "../asset/img/laptopPlaceholder.png";

export default function FormRegister() {
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
    province_id: null,
    postal_code: "",
    city_id: null,
    address: "",
  });
  const [currProvince, setCurrProvince] = useState(null);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const fetchProvinces = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/logistic/provinces"
      );

      const data = response.data;
      setProvinces(data);
    } catch (error) {
      Swal.fire(
        "Terjadi Error !",
        "API raja ongkir tidak dapat dimuat",
        "error"
      );
    }
  };

  const fetchCities = async () => {
    try {
      Swal.showLoading();
      const response = await axios.get(
        "http://localhost:5000/logistic/cities",
        {
          params: {
            provinceId: formValues.province_id,
          },
        }
      );

      const data = response.data;
      setCities(data);

      Swal.close();
    } catch (error) {
      Swal.fire(
        "Terjadi Error !",
        "API raja ongkir tidak dapat dimuat",
        "error"
      );
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/user");
    } else {
      dispatch(reset());
    }

    fetchProvinces();
  }, [user, isSuccess, dispatch, navigate]);

  useEffect(() => {
    fetchCities();
  }, [formValues.province_id]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/register", {
        ...formValues,
      });

      await Swal.fire(response.data.msg, "", "success");
      navigate("/login");
    } catch (error) {
      console.log(error);
      Swal.fire("Terjadi Error!", "", "error");
    }
  };

  return (
    <>
      <Card className="col-md-10 mx-auto mt-4">
        <Card.Body>
          <Container
            fluid
            border="primary"
            className="d-flex justify-content-center align-items-center "
          >
            <Row>
              <Col
                md={6}
                sm={12}
                className="d-flex justify-content-center align-items-center flex-column left-box"
              >
                <div class="featured-image mb-3">
                  <Image src={IlustLogin} fluid width={400} height={400} />
                </div>
              </Col>
              <Col md={6} sm={12} className="right-box">
                <div class="row align-items-center">
                  <div class="header-text mb-4">
                    <h2>Register Dulu Yuk</h2>
                    <p>Biar mempermudah kamu dalam mencari laptop impianmu.</p>
                  </div>
                  <Form onSubmit={submitHandler}>
                    <Row>
                      <Form.Group
                        as={Col}
                        md="6"
                        className="mb-3"
                        controlId="formBasicFirstName"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Nama Depan"
                          className="form-control form-control-lg bg-light fs-6"
                          value={formValues.first_name}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              first_name: e.target.value,
                            })
                          }
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="6"
                        className="mb-3"
                        controlId="formBasicLastName"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Nama Belakang"
                          className="form-control form-control-lg bg-light fs-6"
                          value={formValues.last_name}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              last_name: e.target.value,
                            })
                          }
                          required
                        />
                      </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        className="form-control form-control-lg bg-light fs-6"
                        value={formValues.email}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            email: e.target.value,
                          })
                        }
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        lassName="form-control form-control-lg bg-light fs-6"
                        value={formValues.password}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            password: e.target.value,
                          })
                        }
                        required
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="formBasicConfirmPassword"
                    >
                      <Form.Control
                        type="password"
                        placeholder="Konfirmasi Password"
                        lassName="form-control form-control-lg bg-light fs-6"
                        value={formValues.confirmPassword}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            confirmPassword: e.target.value,
                          })
                        }
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicaddress">
                      <Form.Control
                        type="text"
                        placeholder="Alamat lengkap"
                        className="form-control form-control-lg bg-light fs-6"
                        value={formValues.address}
                        onChange={(e) =>
                          setFormValues({
                            ...formValues,
                            address: e.target.value,
                          })
                        }
                        required
                      />
                    </Form.Group>

                    <Row>
                      <Form.Group as={Col} md="4">
                        <Form.Select
                          aria-label="Provinces"
                          className="mb-3"
                          onChange={(e) => {
                            setFormValues({
                              ...formValues,
                              province_id: e.target.value,
                            });
                          }}
                          required
                        >
                          <option selected disabled>
                            Pilih provinsi
                          </option>
                          {provinces.map((province) => (
                            <option value={province.province_id}>
                              {province.province}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>

                      <Form.Group as={Col} md="4">
                        <Form.Select
                          aria-label="Cities"
                          className="mb-3"
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              city_id: e.target.value,
                            })
                          }
                          required
                        >
                          {formValues?.province_id ? (
                            <>
                              <option selected disabled>
                                Pilih Kota
                              </option>
                              {cities.map((province) => (
                                <option value={province.city_id}>
                                  {province.city_name}
                                </option>
                              ))}
                            </>
                          ) : (
                            <option selected disabled>
                              Pilih provinsi terlebih dahulu
                            </option>
                          )}
                        </Form.Select>
                      </Form.Group>

                      <Form.Group
                        as={Col}
                        md="4"
                        className="mb-3"
                        controlId="formBasicPostalCode"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Kode Pos"
                          className="form-control form-control-lg bg-light fs-6"
                          value={formValues.postal_code}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              postal_code: e.target.value,
                            })
                          }
                          required
                        />
                      </Form.Group>
                    </Row>

                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group> */}

                    <Button
                      type="submit"
                      variant="primary"
                      className="mb-3 btn-lg w-100 fs-6"
                    >
                      Register
                    </Button>

                    {/* <Button type="submit" variant="light" className="mb-3 btn-lg w-100 fs-6">
                            Google
                        </Button> */}
                    <div class="input-group mb-5 d-flex justify-content-between">
                      <div class="row">
                        <small>
                          Sudah Punya Akun? <a href="*">Login</a>
                        </small>
                      </div>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}
