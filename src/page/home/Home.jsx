import React from "react";
import { useNavigate } from "react-router-dom"

import NavHome from "../../components/navBar/NavHome";
import ListAllProduct from "../../components/admin/ListAllProduct";
import ListAllUser from "../../components/admin/ListAllUser";
import FormAddProduct from "../../components/product/FormAddProduct";
import FormEditProduct from "../../components/product/FormEditProduct";
import ListAllOrder from "../../components/admin/ListAllOrder";
import Footer from "../../components/Footer";

export default function Home() {
    const Navigate = useNavigate()

    return(
        <>
            <NavHome/>
            <h1>Ini Home Page</h1>

            <ListAllOrder/>
            <ListAllUser/>

             <button onClick={() => Navigate('about')}>ke halaman About</button>
            
            <FormAddProduct/>
            <FormEditProduct/>
            <br />

            <ListAllProduct/>

            <br />

            {/* <FormLogin/> */}

           

            <Footer/>
        </>
    )
}