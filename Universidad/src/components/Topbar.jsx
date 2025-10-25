import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Topbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    logout(); // Limpia localStorage y estado
    navigate('/login'); // Redirige al login
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* Sidebar Toggle (Topbar) */}
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
        </button>

        {/* Topbar Search */}
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-0 small"
              placeholder="Buscar..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>

        {/* Topbar Navbar */}
        <ul className="navbar-nav ml-auto">
          {/* Nav Item - User Information */}
          <li className="nav-item dropdown no-arrow" ref={dropdownRef}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown();
              }}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              <span id="nombre-usuario" className="mr-2 d-none d-lg-inline text-gray-600 small">
                {user?.nombre || 'Usuario'} - {user?.rol || 'Rol'}
              </span>
              <img
                className="img-profile rounded-circle"
                src="img/undraw_profile.svg"
                alt="Perfil"
              />
            </a>

            {/* Dropdown - User Information */}
            <div
              className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${dropdownOpen ? 'show' : ''}`}
              aria-labelledby="userDropdown"
            >
              <Link 
                className="dropdown-item" 
                to="/Perfil"
                onClick={closeDropdown}
              >
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Perfil
              </Link>
              <div className="dropdown-divider"></div>
              <a
                className="dropdown-item"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  closeDropdown();
                  handleLogout();
                }}
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Cerrar Sesión
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
