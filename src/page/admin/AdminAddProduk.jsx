import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserLogin } from "../../features/authSlice";

import {Row, Col} from "react-bootstrap";

//import komponen
import NavHome from "../../components/navBar/NavHome";
import NavAdmin from "../../components/admin/NavAdmin";
import FormAddProduct from "../../components/product/FormAddProduct";


export default function AdminAddProduk(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError, user} = useSelector((state => state.auth));

    //cek user login
    // useEffect(() => {
    //     dispatch(getUserLogin())
    // }, [dispatch]);

    // useEffect(() => {
    //     if(isError){
    //             navigate("*");
    //     }
    //     if (user && user.role !== "admin") {
    //             navigate("/adminOnly");
    //         }
    // }, [isError, user, navigate])
    
    return(
        <>
            <NavHome/>
            <div>
                <Row>
                    <Col md={3} sm={12} className="left-box">
                        <NavAdmin/>    
                    </Col>
                    <Col md={9} sm={12} className="right-box">              
                        
                        <FormAddProduct/>
                                  
                    </Col>
                </Row>
            </div>
        </>
    )
}