import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserLogin } from "../../features/authSlice";

import NavUser from "../../components/navBar/NavUser";
import DetailUser from "../../components/user/DetailUser";

export default function UserMain(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError} = useSelector((state => state.auth));

    // useEffect(() => {
    //     dispatch(getUserLogin())
    // }, [dispatch]);

    // useEffect(() => {
    //     if(isError){
    //         navigate("/");
    //     }
    // }, [isError, navigate])

    return(
        <>
            <NavUser/>
            <DetailUser/>
        </>
    )
}