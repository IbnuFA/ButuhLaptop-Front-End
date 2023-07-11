import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, Button, Card, ToggleButton, ToggleButtonGroup, FormGroup} from "react-bootstrap";

export default function FormFeedback(){
    return(
        <>
            <Card className="col-md-10 mx-auto mt-4">
                <Card.Body>   
                        <Row>
                            <Col md={10} sm={12} className="mx-auto">
                                <div class="row align-items-center">
                                    <div class="header-text mb-4">
                                        <h2>Isi Feedback</h2>
                                    </div>
                                    <Form>
                                        <FormGroup>
                                            <Form.Label className="me-3">Rating : </Form.Label>
                                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                                <ToggleButton id="tbg-radio-1" value={1}>
                                                    Bintang 1
                                                </ToggleButton>
                                                <ToggleButton id="tbg-radio-2" value={2}>
                                                    Bintang 2
                                                </ToggleButton>
                                                <ToggleButton id="tbg-radio-3" value={3}>
                                                    Bintang 3
                                                </ToggleButton>
                                                <ToggleButton id="tbg-radio-2" value={4}>
                                                    Bintang 4
                                                </ToggleButton>
                                                <ToggleButton id="tbg-radio-3" value={5}>
                                                    Bintang 5
                                                </ToggleButton>
                                            </ToggleButtonGroup>
                                        </FormGroup>
                                        
                                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Rating</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder=""
                                                className="form-control bg-light fs-6"
                                                required
                                            />
                                        </Form.Group> */}

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Feedback</Form.Label>
                                            <Form.Control as="textarea" rows={4} />
                                        </Form.Group>
                                        
                                        <Row>
                                            <Col className="d-flex flex-row-reverse">
                                                <Button type="submit" variant="primary" className="mb-3 btn-lg ">
                                                    Submit
                                                </Button>    
                                            </Col>
                                        </Row> 

                                    </Form>
                                </div>
                            </Col>
                        </Row>
                </Card.Body>
            </Card>
        </>
    )
}