import React from "react";

import NavLogin from "../../components/navBar/NavLogin";
import FormLogin from "../../components/FormLogin";
import FormFeedback from "../../components/FormFeedback";

export default function Login() {
    return(
        <>
            <NavLogin/>
            <FormLogin/>

            <FormFeedback/>
        </>
    )
}