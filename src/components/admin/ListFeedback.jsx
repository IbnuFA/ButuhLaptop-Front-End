import React, { useEffect, useState } from "react";
import axios from "axios";
import Token from "../../features/token";

import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, Card, Container, Table } from "react-bootstrap";

//import icon
import { MdOutlineCancel } from "react-icons/md";
import { FaStar } from "react-icons/fa";

//import sweetalert
import Swal from "sweetalert2";

export default function ListFeedback() {
  const [feedback, setFeedback] = useState([]);
  const [msg, setMsg] = useState("");

  const getFeedbacks = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/feedbacks`, {
        headers: {
          Authorization: `Bearer ${Token.getToken()}`,
        },
      });
      setFeedback(response.data);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const deleteFeedback = async (id) => {
    Swal.fire({
      title: "Apakah anda yakin?",
      text: "Produk yang dipilih akan dihapus",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Batal",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Hapus",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
        } catch (error) {}
        Swal.fire("Terhapus!", "Produk telah dihapus.", "success");
      }
    });
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  return (
    <>
      <Card className="col-md-10 mx-auto mt-4">
        <Card.Header className="cardHeader">List Feedback</Card.Header>
        <Card.Body>
          <Container
            fluid
            border="primary m-0"
            className="d-flex justify-content-center align-items-center "
          >
            <Col>
              <Row>
                <div className="overflow-auto" style={{ height: "auto" }}>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Rate Feedback</th>
                        <th>Isi Feedback</th>

                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feedback.map((feedback, index) => {
                        return (
                          <>
                            <tr key={feedback.id}>
                              <td>{index + 1}</td>
                              <td>
                                {feedback.rate}{" "}
                                <FaStar color="#ebcb16" size={15} />
                              </td>
                              <td>{feedback.feedback}</td>
                              <td>
                                <Button
                                  variant="outline-danger"
                                  size="sm"
                                  onClick={() => deleteFeedback(feedback.id)}
                                >
                                  <MdOutlineCancel size={20} /> Hapus
                                </Button>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              </Row>
            </Col>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}
