import React from "react";

import NavUser from "../components/navBar/NavUser";
import ListKeranjang from "../components/user/ListKeranjang";

export default function UserListKeranjang(){
    return(
        <>
            <NavUser/>
            <ListKeranjang/>
        </>
    )
}