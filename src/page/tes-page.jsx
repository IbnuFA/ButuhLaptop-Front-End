import React from "react";

import ListKeranjang from "../components/user/ListKeranjang";
import ListCheckout from "../components/user/ListCheckout";
import DetailKeranjang from "../components/user/DetailKeranjang";
import DetailCheckout from "../components/user/DetailCheckout";
import KategoriHarga from "../components/main/kategoriHarga";
import KategoriProduct from "../components/main/kategoriProduct";
import CarouselMain from "../components/main/carouselMain";
import CarouselProduk from "../components/main/carouselProduk";
import NavAdmin from "../components/admin/NavAdmin";

import CatalogProduct from "../components/main/CatalogProduct";
import SearchProduct from "../components/main/SearchProduct";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function TesPage() {
    return(
        <>
            {/* <CarouselMain className="mb-4"/>
            <NavAdmin className="mb-4"/> */}
            <SearchProduct className="mb-4" />
            <CatalogProduct className="mb-4"/>

            <KategoriProduct className="mb-4"/>
            <KategoriHarga className="mb-4"/>
            <CarouselProduk className="mb-4"/>
            <DetailKeranjang className="mb-4"/>
            <DetailCheckout className="mb-4"/>
            <ListKeranjang className="mb-4"/>
            <ListCheckout className="mb-4"/>
        </>
    )
}