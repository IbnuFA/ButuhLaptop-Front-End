import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, Button, Card, FormGroup} from "react-bootstrap";

//import icon
import { FaStar } from "react-icons/fa";

export default function FormFeedback(){
    const navigate = useNavigate()
    const [rate, setRate] = useState(null)
    const [feedback, setFeedback] = useState("")
    const [hover, setHover] = useState(null)
    const [msg, setMsg] = useState("");


    const addFeedback = async (e) => {
        e.preventDefault();
        try {
           

            await axios.post("http://localhost:5000/feedback", {
                rate: rate,
                feedback: feedback
            })
            navigate("/")
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }
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
                                    <Form onSubmit={addFeedback}>
                                        <FormGroup>
                                            <Form.Label className="me-3">Rating : </Form.Label>
                                            {[...Array(5)].map((star, index) => {
                                                const currentRating = index + 1;
                                                return(
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="rate"
                                                            value={currentRating}
                                                            onClick={()=> setRate(currentRating)}
                                                    />
                                                        <FaStar 
                                                            className="star" 
                                                            size={25}
                                                            color={currentRating <= (hover || rate) ? "#ffc107" : "#e4e5e9"}
                                                            onMouseEnter={() => setHover(currentRating)}
                                                            onMouseLeave={() => setHover(null)}
                                                        />
                                                    </label>
                                                )
                                            })}
                                        </FormGroup>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Feedback</Form.Label>
                                            <Form.Control 
                                                as="textarea" 
                                                rows={4}
                                                onChange={(e) => setFeedback(e.target.value)}
                                            />
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