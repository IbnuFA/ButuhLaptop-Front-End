import React from "react";

import NavHome from "../../components/navBar/NavHome";
import Footer from "../../components/Footer";
import CatalogProduct from "../../components/main/CatalogProduct";

export default function ProductCatalog() {
  return (
    <>
      <NavHome />
      <CatalogProduct className="mb-4" />
      <Footer />
    </>
  );
}
