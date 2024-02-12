import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Token from "../../features/token";

import Swal from "sweetalert2";

import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Table, Button, Image } from "react-bootstrap";

//import icon
import {
  BsInfoCircle,
  BsTrash3,
  BsPersonAdd,
  BsPersonGear,
} from "react-icons/bs";

export default function ListAllUser() {
  const [users, setUsers] = useState([]);
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    Swal.showLoading();

    try {
      const response = await axios.get(`http://localhost:5000/admin/users`, {
        headers: {
          Authorization: `Bearer ${Token.getToken()}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
    Swal.close();
  };

  const deleteUser = async (uuid) => {
    try {
      await axios.delete(`http://localhost:5000/admin/users/${uuid}`, {
        headers: {
          Authorization: `Bearer ${Token.getToken()}`,
        },
      });
      getUser();
    } catch (error) {
      const message = error.message;
      console.error("There was an error!", message);
    }
  };

  const handleDelete = async (uuid) => {
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
        deleteUser(uuid);
        Swal.fire("Terhapus!", "Produk telah dihapus.", "success");
      }
    });
  };

  return (
    <>
      <Card className="col-md-11 mx-auto mt-4">
        <Card.Header className="cardHeader">List User</Card.Header>
        <Card.Body>
          <Container fluid className="mb-3">
            <Table responsive>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Level</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => {
                  return (
                    <>
                      <tr key={user.uuid}>
                        <td>{index + 1}</td>
                        <td>
                          {user.first_name} {user.last_name}
                        </td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                          <Button
                            variant="success"
                            size="sm"
                            className="me-1"
                            onClick={() => navigate("/admin/detailuser")}
                          >
                            <BsInfoCircle size={20} />
                          </Button>
                          <Button variant="primary" size="sm" className="me-1">
                            <BsPersonGear size={20} />
                          </Button>
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => handleDelete(user.uuid)}
                          >
                            <BsTrash3 size={20} />
                          </Button>
                        </td>
                      </tr>
                    </>
                  );
                })}
                {/* <tr>
                                        <td>1</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>Table cell</td>
                                        <td>
                                            <Button variant="success" size="sm" className="me-1" onClick={() => navigate('/admin/detailuser')}><BsInfoCircle size={20}/></Button>
                                            <Button variant="primary" size="sm" className="me-1"><BsPersonGear size={20}/></Button>
                                            <Button variant="outline-danger" size="sm"><BsTrash3 size={20}/></Button>
                                        </td>
                                    </tr> */}
              </tbody>
            </Table>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}
