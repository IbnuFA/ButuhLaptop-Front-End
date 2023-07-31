import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserLogin } from "../../features/authSlice";

import {Row, Col} from "react-bootstrap";
import SidebarAdmin from "../../components/admin/SidebarAdmin";
import FormEditUser from "../../components/user/FornEditUser";

export default function AdminEditUser(){
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
            <div class="m-0">
                <Row>
                    <Col md={3} sm={12} className="left-box">
                        <SidebarAdmin/>
                    </Col>
                    <Col md={9} sm={12} className="right-box">              
                        <div className="overflow-auto" style={{height : '100vh'}}>
                            <FormEditUser/>
                        </div>          
                    </Col>
                </Row>
            </div>
        </>
    )
}