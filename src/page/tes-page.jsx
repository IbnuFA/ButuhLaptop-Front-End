import React from "react";

import CarouselProduk from "../components/main/carouselProduk";
import KategoriProduct from "../components/main/kategoriProduct";

import "bootstrap/dist/css/bootstrap.min.css";

export default function TesPage() {
  return (
    <>
      <KategoriProduct className="mb-4" />
      <CarouselProduk className="mb-4" />
    </>
  );
}
