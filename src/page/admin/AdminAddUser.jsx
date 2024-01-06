import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserLogin } from "../../features/authSlice";

import FormAddUser from "../../components/user/FormAddUser";
import NavbarAdmin from "../../components/navBar/NavbarAdmin";

export default function AdminAddUser(){
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
            <NavbarAdmin/>
            <FormAddUser/>
        </>
    )
}