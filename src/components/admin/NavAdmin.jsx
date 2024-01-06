import React from "react";
import { useNavigate } from "react-router-dom";
import '../../App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, Button, Table, Card, Container, Image } from "react-bootstrap";

//import icon
import { MdSpaceDashboard, MdShoppingCart, MdLogout } from "react-icons/md";
import { FaBoxes, FaUser } from "react-icons/fa";

export default function NavAdmin(){
    const Navigate = useNavigate()

    return(
        <>         
            <Card className="col-md-11 col-sm-11 mx-auto mt-4 mb-4">
                <Card.Header className="cardHeader">Menu Navigasi</Card.Header>
                <Card.Body>
                    <div className="d-grid gap-3">
                        <Button variant="primary" className="custom-button">
                            <MdSpaceDashboard className="icon"/> Dashboard
                        </Button>
                        <Button variant="primary" className="custom-button">
                            <FaBoxes className="icon"/> Produk
                        </Button>
                        <Button variant="primary" className="custom-button">
                            <MdShoppingCart className="icon"/> Order
                        </Button>
                        <Button variant="primary" className="custom-button">
                            < FaUser className="icon"/> User
                        </Button>
                        <Button variant="primary" className="custom-button">
                            <MdLogout className="icon"/> Logout
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}