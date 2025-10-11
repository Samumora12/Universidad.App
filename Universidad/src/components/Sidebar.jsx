import React from 'react'
import { Link, Links } from 'react-router-dom'

function Sidebar() {
  return (
    <>
    
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
  {/* Sidebar - Brand */}
  <Link className="sidebar-brand d-flex align-items-center justify-content-center" to={`/dashboard`}>
    <div className="sidebar-brand-icon rotate-n-15">
      <i className="fas fa-graduation-cap"></i>
    </div>
    <div className="sidebar-brand-text mx-3">Sistema Educativo</div>
  </Link>

  {/* Divider */}
  <hr className="sidebar-divider my-0" />

  {/* Nav Item - Dashboard */}
  <li className="nav-item">
    <Link className="nav-link" to={`/dashboard`}>
      <i className="fas fa-fw fa-tachometer-alt"></i>
      <span>Dashboard</span>
    </Link>
  </li>

  {/* Divider */}
  <hr className="sidebar-divider" />

  {/* Heading */}
  <div className="sidebar-heading">Módulos Educativos</div>

  {/* Nav Item - Ingreso y registro */}
  <li className="nav-item">
    <a
      className="nav-link collapsed"
      href="#"
      data-toggle="collapse"
      data-target="#collapseIngreso"
      aria-expanded="true"
      aria-controls="collapseIngreso"
    >
      <i className="fas fa-fw fa-user-plus"></i>
      <span>Ingreso y registro</span>
    </a>
    <div id="collapseIngreso" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
        <h6 className="collapse-header">Acciones:</h6>
        <Link className="collapse-item" to={`/CrearEstudiante`}>Ver Estudiantes</Link>
        <Link className="collapse-item" to={`/ListarEstudiante`}>Crear Estudiante</Link>
      </div>
    </div>
  </li>

  {/* Nav Item - Hy estudiantil */}
  <li className="nav-item">
    <a
      className="nav-link collapsed"
      href="#"
      data-toggle="collapse"
      data-target="#collapseHistorial"
      aria-expanded="true"
      aria-controls="collapseHistorial"
    >
      <i className="fas fa-fw fa-history"></i>
      <span>Hy estudiantil</span>
    </a>
    <div id="collapseHistorial" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
        <h6 className="collapse-header">Acciones:</h6> 
        <Link className="collapse-item" to={`/ListarHistorial`} >Ver Historial</Link>
        <Link className="collapse-item" to={`/CrearHistorial`}>Crear Registro</Link>
      </div>
    </div>
  </li>

  {/* Nav Item - Módulo Familiar */}
  <li className="nav-item">
    <a
      className="nav-link collapsed"
      href="#"
      data-toggle="collapse"
      data-target="#collapseFamiliar"
      aria-expanded="true"
      aria-controls="collapseFamiliar"
    >
      <i className="fas fa-fw fa-users"></i>
      <span>Módulo Familiar</span>
    </a>
    <div id="collapseFamiliar" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
        <h6 className="collapse-header">Acciones:</h6>
        <Link className="collapse-item" to={`/ListarFamiliar`}>Ver Familiares</Link>
        <Link className="collapse-item" to={`/CrearFamiliar`}>Crear Familiar</Link>
      </div>
    </div>
  </li>

  {/* Nav Item - Seguimiento de notas */}
  <li className="nav-item">
    <a
      className="nav-link collapsed"
      href="#"
      data-toggle="collapse"
      data-target="#collapseNotas"
      aria-expanded="true"
      aria-controls="collapseNotas"
    >
      <i className="fas fa-fw fa-clipboard-list"></i>
      <span>Seguimiento de notas</span>
    </a>
    <div id="collapseNotas" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
        <h6 className="collapse-header">Acciones:</h6>
        <Link className="collapse-item" to={`/ListarNota`}>Ver Notas</Link>
        <Link className="collapse-item" to={`/CrearNota`}>Registrar Nota</Link>
      </div>
    </div>
  </li>

  {/* Nav Item - Asistencias */}
  <li className="nav-item">
    <a
      className="nav-link collapsed"
      href="#"
      data-toggle="collapse"
      data-target="#collapseAsistencias"
      aria-expanded="true"
      aria-controls="collapseAsistencias"
    >
      <i className="fas fa-fw fa-calendar-check"></i>
      <span>Asistencias</span>
    </a>
    <div id="collapseAsistencias" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
        <h6 className="collapse-header">Acciones:</h6>
        <Link className="collapse-item" to={`/ListarAsistencia`}>Ver Asistencias</Link>
        <Link className="collapse-item" to={`/CrearAsistencia`}>Registrar Asistencia</Link>
      </div>
    </div>
  </li>

  {/* Nav Item - Bienestar Estudiantil */}
  <li className="nav-item">
    <a
      className="nav-link collapsed"
      href="#"
      data-toggle="collapse"
      data-target="#collapseBienestar"
      aria-expanded="true"
      aria-controls="collapseBienestar"
    >
      <i className="fas fa-fw fa-heart"></i>
      <span>Bienestar Estudiantil</span>
    </a>
    <div id="collapseBienestar" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
        <h6 className="collapse-header">Acciones:</h6>
        <Link className="collapse-item" to={`/ListarBienestar`}>Ver Registros</Link>
        <Link className="collapse-item" to={`/CrearBienestar`}>Crear Registro</Link>
      </div>
    </div>
  </li>

  {/* Nav Item - Estadísticas */}
  <li className="nav-item">
    <a
      className="nav-link collapsed"
      href="#"
      data-toggle="collapse"
      data-target="#collapseEstadisticas"
      aria-expanded="true"
      aria-controls="collapseEstadisticas"
    >
      <i className="fas fa-fw fa-chart-bar"></i>
      <span>Estadísticas</span>
    </a>
    <div id="collapseEstadisticas" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
        <h6 className="collapse-header">Acciones:</h6>
        <Link className="collapse-item" to={`/Estadisticas`}>Ver Reportes</Link>
      </div>
    </div>
  </li>

  {/* Divider */}
  <hr className="sidebar-divider" />

  {/* Sidebar Toggler */}
  <div className="text-center d-none d-md-inline">
    <button className="rounded-circle border-0" id="sidebarToggle"></button>
  </div>
    </ul>
</>
  )
}

export default Sidebar
