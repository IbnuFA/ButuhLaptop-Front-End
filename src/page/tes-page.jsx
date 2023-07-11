import React from "react";
import NavLink from "react-bootstrap";

import ListKeranjang from "../components/user/ListKeranjang";
import ListCheckout from "../components/user/ListCheckout";
import DetailKeranjang from "../components/user/DetailKeranjang";
import DetailCheckout from "../components/user/DetailCheckout";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button } from "react-bootstrap";


export default function TesPage() {
    return(
        <>
            <DetailKeranjang className="mb-4"/>
            <DetailCheckout className="mb-4"/>
            <ListKeranjang className="mb-4"/>
            <ListCheckout className="mb-4"/>
        </>
    )
}