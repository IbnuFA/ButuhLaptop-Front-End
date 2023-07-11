import React from "react";

import {Row, Col} from "react-bootstrap";
import SidebarAdmin from "../../components/admin/SidebarAdmin";
import ListAllProduct from "../../components/admin/ListAllProduct";

export default function AdminMain(){
    return(
        <>
            <div class="m-0">
                <Row>
                    <Col md={3} sm={12} className="left-box">
                        <SidebarAdmin/>
                    </Col>
                    <Col md={9} sm={12} className="right-box">              
                        <div className="overflow-auto" style={{height : '100vh'}}>
                            <ListAllProduct/>
                        </div>          
                    </Col>
                </Row>
            </div>
        </>
    )
}