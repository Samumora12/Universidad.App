import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Dash = () => {
  return (
    <div id="wrapper">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          {/* Topbar */}
          <Topbar />

          {/* Aquí se mostrará el contenido de cada ruta interna */}
          <div className="container-fluid">
            <Outlet />
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Dash;
