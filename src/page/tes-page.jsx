import React from "react";

import ListKeranjang from "../components/user/ListKeranjang";
import ListCheckout from "../components/user/ListCheckout";
import DetailKeranjang from "../components/user/DetailKeranjang";
import DetailCheckout from "../components/user/DetailCheckout";
import KategoriHarga from "../components/main/kategoriHarga";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function TesPage() {
    return(
        <>
            <KategoriHarga className="mb-4"/>
            <DetailKeranjang className="mb-4"/>
            <DetailCheckout className="mb-4"/>
            <ListKeranjang className="mb-4"/>
            <ListCheckout className="mb-4"/>
        </>
    )
}