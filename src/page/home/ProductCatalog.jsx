import React from "react";
import { useNavigate } from "react-router-dom"

import NavHome from "../../components/navBar/NavHome";
import Footer from "../../components/Footer";

import SearchProduct from "../../components/main/SearchProduct";
import CatalogProduct from "../../components/main/CatalogProduct";

import CarouselProduk from "../../components/main/carouselProduk";
import KategoriHarga from "../../components/main/kategoriHarga";
import KategoriProduct from "../../components/main/kategoriProduct";


export default function ProductCatalog() {
    const Navigate = useNavigate()

    return(
        <>
            <NavHome/>

            <SearchProduct className="mb-4" />
            <CatalogProduct className="mb-4"/>

            <Footer/>
        </>
    )
}