import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Sidebar() {
  const { user } = useAuth();
  
  // Estados para controlar cada dropdown
  const [openDropdown, setOpenDropdown] = useState(null);
  
  // Determinar roles
  const isEstudiante = user?.rol === 'Estudiante';
  const isDocente = user?.rol === 'Docente';
  const isAdmin = user?.rol === 'Administrador';

  // Permisos
  const canManageStudents = isDocente || isAdmin;
  const canViewAllData = isDocente || isAdmin;
  const canManageGrades = isDocente || isAdmin;
  const canViewStatistics = isDocente || isAdmin;

  // Función para abrir/cerrar dropdowns
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <>
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        {/* Sidebar - Brand */}
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Sistema Educativo</div>
        </Link>

        {/* Divider */}
        <hr className="sidebar-divider my-0" />

        {/* Nav Item - Dashboard - TODOS pueden ver */}
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider" />

        {/* Heading */}
        <div className="sidebar-heading">Módulos Educativos</div>

        {/* Nav Item - Mis Estudiantes - SOLO Docentes y Admin */}
        {canManageStudents && (
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown('misEstudiantes');
              }}
              aria-expanded={openDropdown === 'misEstudiantes'}
            >
              <i className="fas fa-fw fa-user-graduate"></i>
              <span>Mis Estudiantes</span>
            </a>
            <div 
              className={`collapse ${openDropdown === 'misEstudiantes' ? 'show' : ''}`}
              id="collapseMisEstudiantes"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Acciones:</h6>
                <Link className="collapse-item" to="/ListarEstudiante">Ver Estudiantes</Link>
                <Link className="collapse-item" to="/CrearEstudiante">Registrar Estudiante</Link>
              </div>
            </div>
          </li>
        )}

        {/* Nav Item - Mis Docentes - SOLO Admin */}
        {isAdmin && (
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown('misDocentes');
              }}
              aria-expanded={openDropdown === 'misDocentes'}
            >
              <i className="fas fa-fw fa-chalkboard-teacher"></i>
              <span>Mis Docentes</span>
            </a>
            <div 
              className={`collapse ${openDropdown === 'misDocentes' ? 'show' : ''}`}
              id="collapseMisDocentes"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Acciones:</h6>
                <Link className="collapse-item" to="/ListarDocente">Ver Docentes</Link>
                <Link className="collapse-item" to="/CrearDocente">Registrar Docente</Link>
              </div>
            </div>
          </li>
        )}


        {/* Nav Item - Historial estudiantil - TODOS pueden ver el suyo */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown('historial');
            }}
            aria-expanded={openDropdown === 'historial'}
          >
            <i className="fas fa-fw fa-history"></i>
            <span>{isEstudiante ? 'Mi Historial' : 'Historial estudiantil'}</span>
          </a>
          <div 
            className={`collapse ${openDropdown === 'historial' ? 'show' : ''}`}
            id="collapseHistorial"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Acciones:</h6>
              <Link className="collapse-item" to="/ListarHistorial">Ver Historial</Link>
              {canViewAllData && <Link className="collapse-item" to="/CrearHistorial">Crear Registro</Link>}
            </div>
          </div>
        </li>

        {/* Nav Item - Seguimiento de notas - TODOS pueden ver */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown('notas');
            }}
            aria-expanded={openDropdown === 'notas'}
          >
            <i className="fas fa-fw fa-clipboard-list"></i>
            <span>{isEstudiante ? 'Mis Notas' : 'Seguimiento de notas'}</span>
          </a>
          <div 
            className={`collapse ${openDropdown === 'notas' ? 'show' : ''}`}
            id="collapseNotas"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Acciones:</h6>
              <Link className="collapse-item" to="/ListarNota">Ver Notas</Link>
              {canManageGrades && <Link className="collapse-item" to="/CrearNota">Registrar Nota</Link>}
            </div>
          </div>
        </li>

        {/* Nav Item - Asistencias - TODOS pueden ver */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown('asistencias');
            }}
            aria-expanded={openDropdown === 'asistencias'}
          >
            <i className="fas fa-fw fa-calendar-check"></i>
            <span>{isEstudiante ? 'Mi Asistencia' : 'Asistencias'}</span>
          </a>
          <div 
            className={`collapse ${openDropdown === 'asistencias' ? 'show' : ''}`}
            id="collapseAsistencias"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Acciones:</h6>
              <Link className="collapse-item" to="/ListarAsistencia">Ver Asistencias</Link>
              {canViewAllData && <Link className="collapse-item" to="/CrearAsistencia">Registrar Asistencia</Link>}
            </div>
          </div>
        </li>

        {/* Nav Item - Bienestar Estudiantil - TODOS pueden ver */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown('bienestar');
            }}
            aria-expanded={openDropdown === 'bienestar'}
          >
            <i className="fas fa-fw fa-heart"></i>
            <span>Bienestar Estudiantil</span>
          </a>
          <div 
            className={`collapse ${openDropdown === 'bienestar' ? 'show' : ''}`}
            id="collapseBienestar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Acciones:</h6>
              <Link className="collapse-item" to="/ListarBienestar">Ver Registros</Link>
              {canViewAllData && <Link className="collapse-item" to="/CrearBienestar">Crear Registro</Link>}
            </div>
          </div>
        </li>

        {/* Nav Item - Estadísticas - SOLO Docentes y Admin */}
        {canViewStatistics && (
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown('estadisticas');
              }}
              aria-expanded={openDropdown === 'estadisticas'}
            >
              <i className="fas fa-fw fa-chart-bar"></i>
              <span>Estadísticas</span>
            </a>
            <div 
              className={`collapse ${openDropdown === 'estadisticas' ? 'show' : ''}`}
              id="collapseEstadisticas"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Acciones:</h6>
                <Link className="collapse-item" to="/Estadisticas">Ver Reportes</Link>
              </div>
            </div>
          </li>
        )}

        {/* Divider */}
        <hr className="sidebar-divider" />

        {/* Sidebar Toggler */}
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
      </ul>
    </>
  );
}

export default Sidebar;
