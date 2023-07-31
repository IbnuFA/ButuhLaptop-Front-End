import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserLogin } from "../../features/authSlice";

import NavUser from "../../components/navBar/NavUser";
import ListKeranjang from "../../components/user/ListKeranjang";

export default function UserListKeranjang(){
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
            <NavUser/>
            <ListKeranjang/>
        </>
    )
}