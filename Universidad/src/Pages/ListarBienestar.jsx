import React from 'react'

export default function ListarBienestar() {
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
              <h1 className="h3 mb-0 text-gray-800">Bienestar Estudiantil</h1>
              <a
                href="crear-bienestar.html"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i className="fas fa-plus fa-sm text-white-50"></i> Nuevo
                Registro
              </a>
            </div>

            {/* Filtros */}
            <div className="row mb-4">
              <div className="col-md-3">
                <label className="form-label">Estudiante</label>
                <input
                  type="text"
                  id="filtro-estudiante"
                  className="form-control"
                  placeholder="Buscar estudiante..."
                />
              </div>
              <div className="col-md-3">
                <label className="form-label">Tipo</label>
                <select id="filtro-tipo" className="form-control">
                  <option value="">Todos</option>
                  <option value="salud">Salud</option>
                  <option value="psicologico">Psicológico</option>
                  <option value="academico">Académico</option>
                  <option value="social">Social</option>
                  <option value="disciplinario">Disciplinario</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label">Estado</label>
                <select id="filtro-estado" className="form-control">
                  <option value="">Todos</option>
                  <option value="activo">Activo</option>
                  <option value="seguimiento">En Seguimiento</option>
                  <option value="resuelto">Resuelto</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label">Fecha</label>
                <input type="date" id="filtro-fecha" className="form-control" />
              </div>
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
                  placeholder="Buscar en registros..."
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                />
              </div>

              {/* Tabla de Bienestar */}
              <table id="table-bienestar" className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                  <tr>
                    <th>#</th>
                    <th>Estudiante</th>
                    <th>Tipo</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                    <th>Descripción</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>{/* Los registros se cargarán dinámicamente */}</tbody>
              </table>

              {/* Estadísticas Rápidas */}
              <div className="row mt-4">
                <div className="col-md-3">
                  <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Total Registros
                          </div>
                          <div
                            className="h5 mb-0 font-weight-bold text-gray-800"
                            id="total-registros"
                          >
                            0
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Resueltos
                          </div>
                          <div
                            className="h5 mb-0 font-weight-bold text-gray-800"
                            id="total-resueltos"
                          >
                            0
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-check-circle fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            En Seguimiento
                          </div>
                          <div
                            className="h5 mb-0 font-weight-bold text-gray-800"
                            id="total-seguimiento"
                          >
                            0
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-clock fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="card border-left-danger shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                            Casos Activos
                          </div>
                          <div
                            className="h5 mb-0 font-weight-bold text-gray-800"
                            id="total-activos"
                          >
                            0
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-exclamation-circle fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Paginación */}
              <nav aria-label="Page navigation example" className="mt-3">
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

      {/* Scroll to Top Button */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      {/* Logout Modal */}
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
    </div>
    </div>
  )
}
