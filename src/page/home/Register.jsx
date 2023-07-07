import React from "react";

import NavLogin from "../components/navBar/NavLogin";
import FormRegister from "../components/FromRegister";

export default function Register() {
    return(
        <>
            <NavLogin/>
            <h1>Ini Halaman Register</h1>

            <FormRegister/>
        </>
    )
}