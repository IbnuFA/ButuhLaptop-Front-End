import React from "react";

// import componen
import NavHome from "../../components/navBar/NavHome";
import Footer from "../../components/Footer";

import CarouselMain from "../../components/main/carouselMain";
import CarouselProduk from "../../components/main/carouselProduk";
import KategoriProduct from "../../components/main/kategoriProduct";

export default function Home() {

    return(
        <>
            <NavHome/>
            
            <CarouselMain/>

            <KategoriProduct className="mb-4"/>

            <CarouselProduk className="mb-4"/>

            <Footer/>
        </>
    )
}