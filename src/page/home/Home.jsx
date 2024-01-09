import React from "react";
import { useNavigate } from "react-router-dom"

import NavHome from "../../components/navBar/NavHome";
import Footer from "../../components/Footer";

import CarouselMain from "../../components/main/carouselMain";
import CarouselProduk from "../../components/main/carouselProduk";
import KategoriHarga from "../../components/main/kategoriHarga";
import KategoriProduct from "../../components/main/kategoriProduct";

import ListAllProduct from "../../components/admin/ListAllProduct";
import ListAllUser from "../../components/admin/ListAllUser";
import FormAddProduct from "../../components/product/FormAddProduct";
import FormEditProduct from "../../components/product/FormEditProduct";
import ListAllOrder from "../../components/admin/ListAllOrder";

export default function Home() {
    const Navigate = useNavigate()

    return(
        <>
            <NavHome/>
            
            <CarouselMain/>

            <KategoriProduct className="mb-4"/>
            <KategoriHarga className="mb-4"/>

            <CarouselProduk className="mb-4"/>

            <br />

            <button onClick={() => Navigate('about')}>ke halaman About</button>

            <Footer/>
        </>
    )
}