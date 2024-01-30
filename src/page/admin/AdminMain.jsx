import React from "react";

import NavbarAdmin from "../../components/navBar/NavbarAdmin";
import ListAllProduct from "../../components/admin/ListAllProduct";

export default function AdminMain(){
    return(
        <>
            <NavbarAdmin/>
            <ListAllProduct/>
        </>
    )
}