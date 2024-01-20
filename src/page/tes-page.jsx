import React from "react";


import DetailKeranjang from "../components/user/DetailKeranjang";
import FormRegister from "../components/FromRegister";
import DetailCheckout from "../components/user/DetailCheckout";
import CarouselProduk from "../components/main/carouselProduk";


import CatalogProduct from "../components/main/CatalogProduct";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function TesPage() {
    return(
        <>
            {/* <CarouselMain className="mb-4"/>
            <NavAdmin className="mb-4"/> */}
            <FormRegister className="mb-4"/>
            <CatalogProduct className="mb-4"/>

            <CarouselProduk className="mb-4"/>
            <DetailKeranjang className="mb-4"/>
            <DetailCheckout className="mb-4"/>
        </>
    )
}