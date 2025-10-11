import React from 'react'

export default function ListarAsistencia() {
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
          <h1 className="h3 mb-0 text-gray-800">Control de Asistencias</h1>
          <a
            href="crear-asistencia.html"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-plus fa-sm text-white-50"></i> Registrar Asistencia
          </a>
        </div>

        {/* Filtros */}
        <div className="row mb-4">
          <div className="col-md-3">
            <label className="form-label">Fecha</label>
            <input type="date" id="filtro-fecha" className="form-control" />
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
            <label className="form-label">Asignatura</label>
            <select id="filtro-asignatura" className="form-control">
              <option value="">Todas las asignaturas</option>
              <option value="matematicas">Matemáticas</option>
              <option value="lenguaje">Lenguaje</option>
              <option value="ciencias">Ciencias</option>
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label">Estado</label>
            <select id="filtro-estado" className="form-control">
              <option value="">Todos los estados</option>
              <option value="presente">Presente</option>
              <option value="ausente">Ausente</option>
              <option value="justificado">Justificado</option>
              <option value="tardanza">Tardanza</option>
            </select>
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
              placeholder="Buscar Estudiante"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          {/* Tabla de Asistencias */}
          <table id="table-asistencias" className="table align-middle mb-0 bg-white">
            <thead className="bg-light">
              <tr>
                <th>#</th>
                <th>Estudiante</th>
                <th>Grado</th>
                <th>Asignatura</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Estado</th>
                <th>Observaciones</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Alan Brito</td>
                <td>10°</td>
                <td>Matemáticas</td>
                <td>2024-03-15</td>
                <td>08:00 AM</td>
                <td>
                  <span className="badge badge-success">Presente</span>
                </td>
                <td>-</td>
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
                <td>Zoyla Vaca</td>
                <td>11°</td>
                <td>Matemáticas</td>
                <td>2024-03-15</td>
                <td>08:15 AM</td>
                <td>
                  <span className="badge badge-warning">Tardanza</span>
                </td>
                <td>Llegó 15 minutos tarde</td>
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
                <td>Alan Brito</td>
                <td>10°</td>
                <td>Lenguaje</td>
                <td>2024-03-16</td>
                <td>10:00 AM</td>
                <td>
                  <span className="badge badge-danger">Ausente</span>
                </td>
                <td>Enfermedad</td>
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
              <tr>
                <td>4</td>
                <td>Zoyla Vaca</td>
                <td>11°</td>
                <td>Ciencias</td>
                <td>2024-03-17</td>
                <td>09:00 AM</td>
                <td>
                  <span className="badge badge-info">Justificado</span>
                </td>
                <td>Cita médica</td>
                <td>
                  <button className="btn btn-sm btn-warning btn-edit" data-id="4">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="btn btn-sm btn-danger btn-delete" data-id="4">
                    <i className="fas fa-trash"></i>
                  </button>
                  <button className="btn btn-sm btn-info btn-view" data-id="4">
                    <i className="fas fa-eye"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Estadísticas Rápidas */}
          <div className="row mt-4">
            {/* Tarjetas */}
            {[
              {
                titulo: "Asistencia Total",
                valor: "92%",
                color: "success",
                icono: "fa-check-circle",
              },
              {
                titulo: "Ausencias",
                valor: "5%",
                color: "danger",
                icono: "fa-times-circle",
              },
              {
                titulo: "Tardanzas",
                valor: "3%",
                color: "warning",
                icono: "fa-clock",
              },
              {
                titulo: "Justificados",
                valor: "2%",
                color: "info",
                icono: "fa-file-medical",
              },
            ].map((card, i) => (
              <div className="col-md-3" key={i}>
                <div className={`card border-left-${card.color} shadow h-100 py-2`}>
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div
                          className={`text-xs font-weight-bold text-${card.color} text-uppercase mb-1`}
                        >
                          {card.titulo}
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          {card.valor}
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className={`fas ${card.icono} fa-2x text-gray-300`}></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
</div>

    </div>
  )
}
