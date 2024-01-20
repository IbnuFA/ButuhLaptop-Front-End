import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserLogin } from "../../features/authSlice";

import NavHome from "../../components/navBar/NavHome";
import ListCheckout from "../../components/user/ListCheckout";

export default function UserListCheckout(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError} = useSelector((state => state.auth));

    //cek user login
    // useEffect(() => {
    //     dispatch(getUserLogin())
    // }, [dispatch]);

    // useEffect(() => {
    //     if(isError){
    //         navigate("*");
    //     }
    // }, [isError, navigate])
    
    return(
        <>
            <NavHome/>
            <ListCheckout/>
        </>
    )
}