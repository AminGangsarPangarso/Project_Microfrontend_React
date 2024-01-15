import React from "react";
import SidebarApp from "./components/SidebarApp";
import NavbarApp from "./components/NavbarApp";
import FooterApp from "./components/FooterApp";
import ProductsApp from "./components/ProductsApp";
export default () => {
    return <div>

        <NavbarApp />
        <SidebarApp />
        <ProductsApp />
        <FooterApp />
    </div>
}