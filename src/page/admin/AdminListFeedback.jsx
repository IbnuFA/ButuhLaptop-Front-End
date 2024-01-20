import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavbarAdmin from "../../components/navBar/NavbarAdmin";
import ListFeedback from "../../components/admin/ListFeedback";

export default function AdminListFeedback(){

    return(
        <>
            <NavbarAdmin/>
            <ListFeedback/>
        </>
    )
}