import React from 'react'

export default function ListarNota() {
  return (
    <div>
      {/* Page Wrapper */}
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
                <h1 className="h3 mb-0 text-gray-800">Seguimiento de Notas</h1>
                <a
                  href="crear-nota.html"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-plus fa-sm text-white-50"></i> Registrar Nota
                </a>
              </div>

              {/* Filtros */}
              <div className="row mb-4">
                <div className="col-md-3">
                  <label className="form-label">Periodo Académico</label>
                  <select id="filtro-periodo" className="form-control">
                    <option value="">Todos los periodos</option>
                    <option value="1">Primer Trimestre 2024</option>
                    <option value="2">Segundo Trimestre 2024</option>
                    <option value="3">Tercer Trimestre 2024</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Asignatura</label>
                  <select id="filtro-asignatura" className="form-control">
                    <option value="">Todas las asignaturas</option>
                    <option value="matematicas">Matemáticas</option>
                    <option value="lenguaje">Lenguaje</option>
                    <option value="ciencias">Ciencias</option>
                    <option value="sociales">Sociales</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Grado</label>
                  <select id="filtro-grado" className="form-control">
                    <option value="">Todos los grados</option>
                    <option value="10">10°</option>
                    <option value="11">11°</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label">Estado</label>
                  <select id="filtro-estado" className="form-control">
                    <option value="">Todos los estados</option>
                    <option value="aprobado">Aprobado</option>
                    <option value="reprobado">Reprobado</option>
                  </select>
                </div>
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

                {/* Tabla de Notas */}
                <table id="table-notas" className="table align-middle mb-0 bg-white">
                  <thead className="bg-light">
                    <tr>
                      <th>#</th>
                      <th>Estudiante</th>
                      <th>Asignatura</th>
                      <th>Periodo</th>
                      <th>Nota 1</th>
                      <th>Nota 2</th>
                      <th>Nota 3</th>
                      <th>Promedio</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Alan Brito</td>
                      <td>Matemáticas</td>
                      <td>Trimestre 1</td>
                      <td>4.5</td>
                      <td>4.2</td>
                      <td>4.8</td>
                      <td>4.5</td>
                      <td>
                        <span className="badge badge-success">Aprobado</span>
                      </td>
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
                      <td>Alan Brito</td>
                      <td>Lenguaje</td>
                      <td>Trimestre 1</td>
                      <td>3.8</td>
                      <td>4.0</td>
                      <td>4.2</td>
                      <td>4.0</td>
                      <td>
                        <span className="badge badge-success">Aprobado</span>
                      </td>
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
                    <tr>
                      <td>3</td>
                      <td>Zoyla Vaca</td>
                      <td>Matemáticas</td>
                      <td>Trimestre 1</td>
                      <td>2.8</td>
                      <td>3.0</td>
                      <td>2.5</td>
                      <td>2.8</td>
                      <td>
                        <span className="badge badge-danger">Reprobado</span>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-warning btn-edit" data-id="3">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="btn btn-sm btn-danger btn-delete" data-id="3">
                          <i className="fas fa-trash"></i>
                        </button>
                        <button className="btn btn-sm btn-info btn-view" data-id="3">
                          <i className="fas fa-eye"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Estadísticas Rápidas */}
                <div className="row mt-4">
                  <div className="col-md-3">
                    <div className="card border-left-primary shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                              Promedio General
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">3.8</div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-chart-line fa-2x text-gray-300"></i>
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
                              Aprobados
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">75%</div>
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
                              En Riesgo
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">15%</div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-exclamation-triangle fa-2x text-gray-300"></i>
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
                              Reprobados
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">10%</div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-times-circle fa-2x text-gray-300"></i>
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
          </div>
        </div>
      </div>


    </div>
  )
}
