import React from "react";

//import komponen
import EditOrder from "../../components/admin/EditOrder";
import NavbarAdmin from "../../components/navBar/NavbarAdmin";

export default function AdminEditOrder() {
  return (
    <>
      <NavbarAdmin />
      <EditOrder />
    </>
  );
}
