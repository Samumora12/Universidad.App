import React from 'react'
import { Link } from 'react-router-dom'

export default function CrearEstudiante() {
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
          <h1 className="h3 mb-0 text-gray-800">Listado de Estudiantes</h1>
          <Link
            to={`/ListarEstudiante`}
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-plus fa-sm text-white-50"></i> Crear Estudiante
          </Link>
        </div>

        {/* Content Row */}
        <div className="row">
          {/* Buscador */}
          <div className="input-group mb-3 rounded-pill overflow-hidden border w-50">
            <span className="input-group-text bg-white border-0 pe-1" id="basic-addon1">
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

          {/* Tabla de Estudiantes */}
          <table id="table-estudiantes" className="table align-middle mb-0 bg-white">
            <thead className="bg-light">
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Celular</th>
                <th>Dirección</th>
                <th>Grado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Alan</td>
                <td>Brito</td>
                <td>alanbrito@gmail.com</td>
                <td>323399999</td>
                <td>Calle ciega 123</td>
                <td>10°</td>
                <td>
                  <button className="btn btn-sm btn-warning btn-edit" data-id="1">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="btn btn-sm btn-danger btn-delete" data-id="1">
                    <i className="fas fa-trash"></i>
                  </button>
                  <button className="btn btn-sm btn-info btn-view" data-id="1">
                    <i className="fas fa-eye"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Zoyla</td>
                <td>Vaca</td>
                <td>zoylavaca@gmail.com</td>
                <td>322131444</td>
                <td>Cra no se meta 12</td>
                <td>11°</td>
                <td>
                  <button className="btn btn-sm btn-warning btn-edit" data-id="2">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="btn btn-sm btn-danger btn-delete" data-id="2">
                    <i className="fas fa-trash"></i>
                  </button>
                  <button className="btn btn-sm btn-info btn-view" data-id="2">
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
    {/* End of Main Content */}
  </div>
  {/* End of Content Wrapper */}
</div>
{/* End of Page Wrapper */}

{/* Scroll to Top Button*/}
<a className="scroll-to-top rounded" href="#page-top">
  <i className="fas fa-angle-up"></i>
</a>

{/* Logout Modal*/}
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
        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
        Selecciona "Cerrar Sesión" si estás listo para finalizar tu sesión actual.
      </div>
      <div className="modal-footer">
        <button className="btn btn-secondary" type="button" data-dismiss="modal">
          Cancelar
        </button>
        <a className="btn btn-primary" href="login.html">
          Cerrar Sesión
        </a>
      </div>
    </div>
  </div>
</div>

{/* Modal Ver Estudiante */}
<div
  className="modal fade"
  id="verEstudianteModal"
  tabIndex="-1"
  role="dialog"
  aria-labelledby="verEstudianteModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="verEstudianteModalLabel">
          <i className="fas fa-user-graduate fa-sm fa-fw mr-2 text-gray-400"></i>
          Información del Estudiante
        </h5>
        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>

      <div className="modal-body">
        <div className="row">
          {/* Datos Personales */}
          <div className="col-md-6">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Datos Personales
                    </div>
                    <div className="mb-2">
                      <strong>Nombre Completo:</strong>
                      <div id="modal-nombre-completo" className="text-gray-800"></div>
                    </div>
                    <div className="mb-2">
                      <strong>Email:</strong>
                      <div id="modal-email" className="text-gray-800"></div>
                    </div>
                    <div className="mb-2">
                      <strong>Celular:</strong>
                      <div id="modal-celular" className="text-gray-800"></div>
                    </div>
                    <div className="mb-2">
                      <strong>Grado:</strong>
                      <div id="modal-grado" className="text-gray-800"></div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-user fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Direcciones */}
          <div className="col-md-6">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Direcciones
                    </div>
                    <div className="mb-2">
                      <strong>Dirección Principal:</strong>
                      <div id="modal-direccion" className="text-gray-800"></div>
                    </div>
                    <div className="mb-2">
                      <strong>Dirección Secundaria:</strong>
                      <div id="modal-direccion2" className="text-gray-800"></div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-map-marker-alt fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Información Académica */}
        <div className="row mt-3">
          <div className="col-12">
            <div className="card border-left-info shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                      Información Académica
                    </div>
                    <div id="modal-informacion-academica" className="text-gray-800"></div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-graduation-cap fa-2x text-gray-300"></i>
                  </div>
                </div>
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
          <i className="fas fa-edit fa-sm fa-fw mr-2"></i>Editar Estudiante
        </button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
