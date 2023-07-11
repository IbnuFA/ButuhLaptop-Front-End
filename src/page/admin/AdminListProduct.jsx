import React from "react";

import {Row, Col} from "react-bootstrap";
import SidebarAdmin from "../../components/admin/SidebarAdmin";
import AdminListProduct from "../../components/admin/AdminListProduk";

export default function AdminListProduk(){
    return(
        <>
            <div class="m-0">
                <Row>
                    <Col md={3} sm={12} className="left-box">
                        <SidebarAdmin/>
                    </Col>
                    <Col md={9} sm={12} className="right-box">              
                        <div className="overflow-auto" style={{height : '100vh'}}>
                            <AdminListProduct/>
                        </div>          
                    </Col>
                </Row>
            </div>
        </>
    )
}