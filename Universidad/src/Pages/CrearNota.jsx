import React from 'react'

export default function CrearNota() {
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
              <h1 className="h3 mb-0 text-gray-800">Registrar Nota</h1>
              <a
                href="listado-notas.html"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i className="fas fa-list fa-sm text-white-50"></i> Listado
              </a>
            </div>

            {/* Content Row */}
            <div className="row">
              <div className="col-8">
                <form id="form-nota">
                  {/* Información Básica */}
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <label className="form-label" htmlFor="estudiante-select">
                        Estudiante
                      </label>
                      <select
                        id="estudiante-select"
                        className="form-control"
                        required
                      >
                        <option value="">Seleccionar Estudiante</option>
                        <option value="1">Alan Brito - 10°</option>
                        <option value="2">Zoyla Vaca - 11°</option>
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="asignatura-select">
                        Asignatura
                      </label>
                      <select
                        id="asignatura-select"
                        className="form-control"
                        required
                      >
                        <option value="">Seleccionar Asignatura</option>
                        <option value="matematicas">Matemáticas</option>
                        <option value="lenguaje">Lenguaje</option>
                        <option value="ciencias">Ciencias</option>
                        <option value="sociales">Sociales</option>
                        <option value="ingles">Inglés</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <label className="form-label" htmlFor="periodo-select">
                        Periodo Académico
                      </label>
                      <select
                        id="periodo-select"
                        className="form-control"
                        required
                      >
                        <option value="">Seleccionar Periodo</option>
                        <option value="1">Primer Trimestre 2024</option>
                        <option value="2">Segundo Trimestre 2024</option>
                        <option value="3">Tercer Trimestre 2024</option>
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="docente-select">
                        Docente
                      </label>
                      <select
                        id="docente-select"
                        className="form-control"
                        required
                      >
                        <option value="">Seleccionar Docente</option>
                        <option value="1">Prof. María González</option>
                        <option value="2">Prof. Carlos Rodríguez</option>
                        <option value="3">Prof. Ana Martínez</option>
                      </select>
                    </div>
                  </div>

                  {/* Calificaciones */}
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Calificaciones
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="form-group row">
                        <div className="col-sm-4 mb-3 mb-sm-0">
                          <label className="form-label" htmlFor="nota1">
                            Nota 1 (30%)
                          </label>
                          <input
                            type="number"
                            id="nota1"
                            className="form-control"
                            step="0.1"
                            min="0"
                            max="5"
                            required
                          />
                          <small className="form-text text-muted">
                            Primer corte evaluativo
                          </small>
                        </div>
                        <div className="col-sm-4">
                          <label className="form-label" htmlFor="nota2">
                            Nota 2 (30%)
                          </label>
                          <input
                            type="number"
                            id="nota2"
                            className="form-control"
                            step="0.1"
                            min="0"
                            max="5"
                            required
                          />
                          <small className="form-text text-muted">
                            Segundo corte evaluativo
                          </small>
                        </div>
                        <div className="col-sm-4">
                          <label className="form-label" htmlFor="nota3">
                            Nota 3 (40%)
                          </label>
                          <input
                            type="number"
                            id="nota3"
                            className="form-control"
                            step="0.1"
                            min="0"
                            max="5"
                            required
                          />
                          <small className="form-text text-muted">
                            Tercer corte evaluativo
                          </small>
                        </div>
                      </div>

                      {/* Promedio Automático */}
                      <div className="form-group">
                        <label className="form-label">
                          Promedio Calculado
                        </label>
                        <div className="alert alert-info" id="promedio-calculado">
                          <strong>0.0</strong> -{" "}
                          <span id="estado-promedio">Sin calificar</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Información Adicional */}
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Información Adicional
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="form-group">
                        <label className="form-label" htmlFor="observaciones">
                          Observaciones del Docente
                        </label>
                        <textarea
                          className="form-control"
                          id="observaciones"
                          rows="3"
                          placeholder="Observaciones sobre el desempeño del estudiante..."
                        ></textarea>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="recomendaciones">
                          Recomendaciones
                        </label>
                        <textarea
                          className="form-control"
                          id="recomendaciones"
                          rows="3"
                          placeholder="Recomendaciones para mejorar el rendimiento..."
                        ></textarea>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="fecha-evaluacion">
                          Fecha de Evaluación
                        </label>
                        <input
                          type="date"
                          id="fecha-evaluacion"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Botones */}
                  <button
                    type="button"
                    className="btn-create btn btn-primary btn-block mb-4"
                  >
                    Registrar Nota
                  </button>
                  <button
                    type="button"
                    className="d-none btn-update btn btn-success btn-block mb-4"
                  >
                    Actualizar Nota
                  </button>
                </form>
              </div>

              {/* Panel de Información */}
              <div className="col-4">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Escala de Calificación
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <span className="badge badge-success p-2">4.6 - 5.0</span>
                      <small className="text-muted">Excelente</small>
                    </div>
                    <div className="mb-3">
                      <span className="badge badge-primary p-2">4.0 - 4.5</span>
                      <small className="text-muted">Bueno</small>
                    </div>
                    <div className="mb-3">
                      <span className="badge badge-warning p-2">3.0 - 3.9</span>
                      <small className="text-muted">Aceptable</small>
                    </div>
                    <div className="mb-3">
                      <span className="badge badge-danger p-2">0.0 - 2.9</span>
                      <small className="text-muted">Reprobado</small>
                    </div>
                  </div>
                </div>

                <div className="card shadow">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Información del Sistema
                    </h6>
                  </div>
                  <div className="card-body">
                    <p className="small">
                      <strong>Nota:</strong> El sistema calcula automáticamente el
                      promedio con los siguientes pesos:
                    </p>
                    <ul className="small">
                      <li>Nota 1: 30% del promedio</li>
                      <li>Nota 2: 30% del promedio</li>
                      <li>Nota 3: 40% del promedio</li>
                    </ul>
                    <p className="small text-muted">
                      La nota mínima para aprobar es 3.0
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </div>
        {/* End of Main Content */}

        {/* Footer */}
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; Sistema Educativo 2024</span>
            </div>
          </div>
        </footer>
        {/* End of Footer */}
      </div>
      {/* End of Content Wrapper */}

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
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
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
