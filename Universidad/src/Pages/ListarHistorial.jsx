import React from 'react'
import { Link } from 'react-router-dom'

export default function ListarHistorial() {
  return (
    <div>
      <div id="wrapper">
      {/* Sidebar */}
      <div id="sidebar-wrapper"></div>

      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Topbar */}
          <div id="topbar-wrapper"></div>

          {/* Begin Page Content */}
          <div className="container-fluid">
            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Listado de HV Estudiantil</h1>
              <Link
                to="CrearHistorial"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i className="fas fa-plus fa-sm text-white-50"></i> Crear Registro
              </Link>
            </div>

            {/* Content Row */}
            <div className="row">
              {/* Buscador */}
              <div className="input-group mb-3 rounded-pill overflow-hidden border w-50">
                <span
                  className="input-group-text bg-white border-0 pe-1"
                  id="basic-addon1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </span>
                <input
                  id="search-input"
                  type="search"
                  className="form-control hide-focus border-0"
                  placeholder="Buscar Estudiante"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              {/* Tabla de HV Estudiantil */}
              <table
                id="table-historial"
                className="table align-middle mb-0 bg-white"
              >
                <thead className="bg-light">
                  <tr>
                    <th>#</th>
                    <th>Estudiante</th>
                    <th>Institución Anterior</th>
                    <th>Año Graduación</th>
                    <th>Promedio</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Alan Brito</td>
                    <td>Colegio Los Alamos</td>
                    <td>2023</td>
                    <td>4.5</td>
                    <td>
                      <span className="badge badge-success">Completo</span>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-warning btn-edit"
                        data-id="1"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-danger btn-delete"
                        data-id="1"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-info btn-view"
                        data-id="1"
                      >
                        <i className="fas fa-eye"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Zoyla Vaca</td>
                    <td>Colegio Las Violetas</td>
                    <td>2023</td>
                    <td>4.2</td>
                    <td>
                      <span className="badge badge-warning">Pendiente</span>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-warning btn-edit"
                        data-id="2"
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-danger btn-delete"
                        data-id="2"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-info btn-view"
                        data-id="2"
                      >
                        <i className="fas fa-eye"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Paginación */}
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <button className="page-link">Anterior</button>
                  </li>
                  <li className="page-item">
                    <span className="page-link">1</span>
                  </li>
                  <li className="page-item">
                    <button className="page-link">Siguiente</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* /.container-fluid */}
        </div>

        {/* Footer */}
      </div>

      {/* Scroll to Top Button */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      {/* Modal Logout */}
      <div
        className="modal fade"
        id="logoutModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                ¿Listo para salir?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Selecciona "Cerrar Sesión" si estás listo para finalizar tu sesión
              actual.
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" type="button" data-dismiss="modal">
                Cancelar
              </button>
              <Link className="btn btn-primary" to="/login">
                Cerrar Sesión
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Ver HV Estudiantil */}
      <div
        className="modal fade"
        id="verHistorialModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="verHistorialModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="verHistorialModalLabel">
                <i className="fas fa-history fa-sm fa-fw mr-2 text-gray-400"></i>
                Detalles del HV Estudiantil
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        Información del Estudiante
                      </div>
                      <div className="mb-2">
                        <strong>Estudiante:</strong>
                        <div id="modal-estudiante-nombre" className="text-gray-800"></div>
                      </div>
                      <div className="mb-2">
                        <strong>Institución Anterior:</strong>
                        <div id="modal-institucion" className="text-gray-800"></div>
                      </div>
                      <div className="mb-2">
                        <strong>Año de Graduación:</strong>
                        <div id="modal-anio-graduacion" className="text-gray-800"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                      <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                        Rendimiento Académico
                      </div>
                      <div className="mb-2">
                        <strong>Promedio:</strong>
                        <div id="modal-promedio" className="text-gray-800"></div>
                      </div>
                      <div className="mb-2">
                        <strong>Puesto en Clase:</strong>
                        <div id="modal-puesto" className="text-gray-800"></div>
                      </div>
                      <div className="mb-2">
                        <strong>Conducta:</strong>
                        <div id="modal-conducta" className="text-gray-800"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-12">
                  <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                      <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                        Información Adicional
                      </div>
                      <div id="modal-informacion-adicional" className="text-gray-800"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" type="button" data-dismiss="modal">
                Cerrar
              </button>
              <button className="btn btn-primary" type="button">
                <i className="fas fa-edit fa-sm fa-fw mr-2"></i>Editar HV
              </button>
              <button className="btn btn-success" type="button">
                <i className="fas fa-print fa-sm fa-fw mr-2"></i>Imprimir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
