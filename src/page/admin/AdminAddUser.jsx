import React from "react";

import {Row, Col} from "react-bootstrap";
import SidebarAdmin from "../components/admin/SidebarAdmin";
import FormAddUser from "../components/user/FormAddUser";

export default function AdminAddUser(){
    return(
        <>
            <div class="m-0">
                <Row>
                    <Col md={3} sm={12} className="left-box">
                        <SidebarAdmin/>
                    </Col>
                    <Col md={9} sm={12} className="right-box">              
                        <div className="overflow-auto" style={{height : '100vh'}}>
                            <FormAddUser/>
                        </div>          
                    </Col>
                </Row>
            </div>
        </>
    )
}