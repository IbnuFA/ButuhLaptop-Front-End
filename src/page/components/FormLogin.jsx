import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../../features/authSlice"

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Form, Button, Card, Container, Image } from "react-bootstrap";

import IlustLogin from '../../asset/img/login.jpg'
import Login from "../home/Login";

export default function FormLogin (){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isError, isSuccess, isLoading, message } = useSelector(
      (state) => state.auth
    );
  
    useEffect(() => {
      if (user || isSuccess) {
        navigate("/user");
      }
      dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]);
  
    const Auth = (e) => {
      e.preventDefault();
      dispatch(LoginUser({ email, password }));
    };

    return(
        <>
            <Card className="col-md-10 mx-auto mt-4">
                <Card.Body>
                    <Container fluid border="primary" className="d-flex justify-content-center align-items-center ">
                        <Row>
                            <Col md={6} sm={12} className="rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                                <div class="featured-image mb-3">
                                    <Image src={IlustLogin} fluid width={400} height={400}/>
                                </div>
                            </Col>
                            <Col md={6} sm={12} className="right-box">
                                <div class="row align-items-center">
                                    <div class="header-text mb-3">
                                        <h2>Login Dulu Yuk</h2>
                                        <p>Biar mempermudah kamu dalam mencari laptop impianmu.</p>
                                    </div>
                                    {isError && <p className="outline-error">{message}</p>}
                                    <Form onSubmit={Auth}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter email"
                                            className="form-control form-control-lg bg-light fs-6"
                                            required
                                        />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            lassName="form-control form-control-lg bg-light fs-6"
                                            required
                                        />
                                        </Form.Group>

                                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Remember me" />
                                        </Form.Group> */}

                                        <Button type="submit" variant="primary" className="mb-3 btn-lg w-100 fs-6">
                                            Login
                                        </Button>

                                        <Button type="submit" variant="light" className="mb-3 btn-lg w-100 fs-6">
                                            Google
                                        </Button>
                                    </Form>
                                    <div class="input-group mb-5 d-flex justify-content-between">
                                        {/* <div class="row">
                                            <small>Don't have account? <a href="#">Sign Up</a></small>
                                        </div>
                                        <div class="forgot">
                                            <small><a href="#">Forgot Password?</a></small>
                                        </div> */}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </>
    )
}