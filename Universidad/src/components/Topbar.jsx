import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Topbar() {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  if (!user) return null; // No mostrar topbar si no hay usuario logueado

  const prefix = user.rol.toLowerCase();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* Sidebar Toggle (Topbar) */}
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>

      {/* Topbar Navbar */}
      <ul className="navbar-nav ml-auto" ref={dropdownRef}>
        {/* Nav Item - User Information */}
        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={dropdownOpen ? "true" : "false"}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span
              id="nombre-usuario"
              className="mr-2 d-none d-lg-inline text-gray-600 small"
            >
              {user.firstName} {user.lastName}
            </span>
            <img
              className="img-profile rounded-circle"
              src="img/undraw_profile.svg"
              alt="Perfil"
            />
          </a>

          {/* Dropdown - User Information */}
          {dropdownOpen && (
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in show"
              aria-labelledby="userDropdown"
            >
              <Link className="dropdown-item" to={`/${prefix}/perfil`} onClick={closeDropdown}>
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Perfil
              </Link>

              <div className="dropdown-divider"></div>

              <button
                className="dropdown-item"
                onClick={() => {
                  closeDropdown();
                  handleLogout();
                }}
                style={{ cursor: "pointer" }}
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Cerrar Sesión
              </button>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}
