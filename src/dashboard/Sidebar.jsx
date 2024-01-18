import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import user from "../assets/images/user.png";
import logoRT from "../assets/images/Link → SVG.png";
import MenuItems from "./MenuItems";

export default function Sidebar() {
  const sidebarMenu1 = [
    {
      MenuItemIcon: "bi-columns-gap",
      MenuItemName: "Dashbord",
      MenuPath: "/timeline/stats",
    },
    {
      MenuItemIcon: "bi-people",
      MenuItemName: "Listes des hotels",
      MenuPath: "/timeline/cards",
    },
  ];
  return (
    <div className="h-100 sidebar">
      {/* Photo de profil du user _______________________start___ */}
      <div className="d-flex justify-content-center mb-3 mt-2">
        <img src={logoRT} alt="" />
        <h2 className="text-white ms-3 fs-4">RED PRODUCT</h2>
      </div>
      {/* _______________________________________________end_____ */}

      <span>Principal</span>
      {/* Menu1 de navigation ___________________________start___ */}
      <ul className="ps-0 " id="menu1">
        {sidebarMenu1.map((item) => (
          <MenuItems {...item} />
        ))}
      </ul>
      {/* _______________________________________________end_____ */}

      {/* Menu1 de navigation ___________________________start___ */}
      <div className="d-flex pt-3 sidebarProfil">
        <img src={user} className="my-auto mx-2 homeIMG" alt="profil" />
        <div className="d-flex flex-column">
          <h3 className="fs-6">Mouhamet Badiane</h3>
          <span className="text-secondary">en ligne</span>
        </div>
      </div>
      {/* _______________________________________________end_____ */}
    </div>
  );
}
