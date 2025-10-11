import React from 'react'

export default function CrearAsistencia() {
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
          <h1 className="h3 mb-0 text-gray-800">Registrar Asistencia</h1>
          <a
            href="listado-asistencias.html"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-list fa-sm text-white-50"></i> Listado
          </a>
        </div>

        {/* Content Row */}
        <div className="row">
          <div className="col-8">
            <form id="form-asistencia">
              {/* Información Básica */}
              <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <label className="form-label" htmlFor="estudiante-select">
                    Estudiante
                  </label>
                  <select id="estudiante-select" className="form-control" required>
                    <option value="">Seleccionar Estudiante</option>
                    <option value="1">Alan Brito - 10°</option>
                    <option value="2">Zoyla Vaca - 11°</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="asignatura-select">
                    Asignatura
                  </label>
                  <select id="asignatura-select" className="form-control" required>
                    <option value="">Seleccionar Asignatura</option>
                    <option value="matematicas">Matemáticas</option>
                    <option value="lenguaje">Lenguaje</option>
                    <option value="ciencias">Ciencias</option>
                    <option value="sociales">Sociales</option>
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <label className="form-label" htmlFor="fecha-clase">
                    Fecha de la Clase
                  </label>
                  <input type="date" id="fecha-clase" className="form-control" required />
                </div>
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="hora-clase">
                    Hora de la Clase
                  </label>
                  <input type="time" id="hora-clase" className="form-control" required />
                </div>
              </div>

              {/* Estado de Asistencia */}
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Estado de Asistencia</h6>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label className="form-label">Estado</label>
                    <div className="row">
                      <div className="col-md-3 mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="estado"
                            id="estado-presente"
                            value="presente"
                            defaultChecked
                          />
                          <label className="form-check-label" htmlFor="estado-presente">
                            <span className="badge badge-success">Presente</span>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="estado"
                            id="estado-ausente"
                            value="ausente"
                          />
                          <label className="form-check-label" htmlFor="estado-ausente">
                            <span className="badge badge-danger">Ausente</span>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="estado"
                            id="estado-tardanza"
                            value="tardanza"
                          />
                          <label className="form-check-label" htmlFor="estado-tardanza">
                            <span className="badge badge-warning">Tardanza</span>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="estado"
                            id="estado-justificado"
                            value="justificado"
                          />
                          <label className="form-check-label" htmlFor="estado-justificado">
                            <span className="badge badge-info">Justificado</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Campos condicionales */}
                  <div id="campo-tardanza" className="form-group" style={{ display: "none" }}>
                    <label className="form-label" htmlFor="minutos-tardanza">
                      Minutos de Tardanza
                    </label>
                    <input
                      type="number"
                      id="minutos-tardanza"
                      className="form-control"
                      min="1"
                      max="120"
                      placeholder="Ej: 15"
                    />
                  </div>

                  <div id="campo-justificacion" className="form-group" style={{ display: "none" }}>
                    <label className="form-label" htmlFor="tipo-justificacion">
                      Tipo de Justificación
                    </label>
                    <select id="tipo-justificacion" className="form-control">
                      <option value="">Seleccionar tipo</option>
                      <option value="enfermedad">Enfermedad</option>
                      <option value="cita_medica">Cita médica</option>
                      <option value="emergencia_familiar">Emergencia familiar</option>
                      <option value="actividad_institucional">Actividad institucional</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Información Adicional */}
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Información Adicional</h6>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label className="form-label" htmlFor="observaciones">
                      Observaciones
                    </label>
                    <textarea
                      className="form-control"
                      id="observaciones"
                      rows="3"
                      placeholder="Observaciones adicionales sobre la asistencia..."
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="evidencia">
                      Evidencia (Opcional)
                    </label>
                    <input
                      type="file"
                      id="evidencia"
                      className="form-control"
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                    <small className="form-text text-muted">
                      Formatos aceptados: PDF, JPG, PNG (Máx. 5MB)
                    </small>
                  </div>

                  <div className="form-group">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="notificar-familia" />
                      <label className="form-check-label" htmlFor="notificar-familia">
                        Notificar a la familia
                      </label>
                      <small className="form-text text-muted">
                        Enviará una notificación al acudiente principal
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botones */}
              <button type="button" className="btn-create btn btn-primary btn-block mb-4">
                Registrar Asistencia
              </button>
              <button
                type="button"
                className="d-none btn-update btn btn-success btn-block mb-4"
              >
                Actualizar Asistencia
              </button>
            </form>
          </div>

          {/* Panel de Información */}
          <div className="col-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Estadísticas del Estudiante</h6>
              </div>
              <div className="card-body">
                <div id="estadisticas-estudiante">
                  <p className="text-muted">Selecciona un estudiante para ver sus estadísticas</p>
                </div>
              </div>
            </div>

            <div className="card shadow">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Información del Sistema</h6>
              </div>
              <div className="card-body">
                <p className="small">
                  <strong>Nota:</strong> El sistema registra automáticamente:
                </p>
                <ul className="small">
                  <li>Fecha y hora del registro</li>
                  <li>Usuario que registra</li>
                  <li>IP del equipo</li>
                </ul>
                <p className="small text-muted">
                  Las asistencias se pueden filtrar y exportar para reportes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.container-fluid */}
    </div>
  </div>

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
</div>
    </div>
  )
}
