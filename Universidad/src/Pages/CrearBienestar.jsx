import React from 'react'

export default function CrearBienestar() {
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
                <h1 className="h3 mb-0 text-gray-800">Registrar Caso de Bienestar</h1>
                <a
                  href="listado-bienestar.html"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-list fa-sm text-white-50"></i> Listado
                </a>
              </div>

              {/* Content Row */}
              <div className="row">
                <div className="col-8">
                  <form id="form-bienestar">
                    {/* Información Básica */}
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <label className="form-label" htmlFor="estudiante-select">
                          Estudiante *
                        </label>
                        <select id="estudiante-select" className="form-control" required>
                          <option value="">Seleccionar Estudiante</option>
                          <option value="1">Alan Brito - 10°</option>
                          <option value="2">Zoyla Vaca - 11°</option>
                        </select>
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="tipo-caso">
                          Tipo de Caso *
                        </label>
                        <select id="tipo-caso" className="form-control" required>
                          <option value="">Seleccionar Tipo</option>
                          <option value="salud">Salud</option>
                          <option value="psicologico">Psicológico</option>
                          <option value="academico">Académico</option>
                          <option value="social">Social</option>
                          <option value="disciplinario">Disciplinario</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <label className="form-label" htmlFor="fecha-registro">
                          Fecha del Reporte *
                        </label>
                        <input type="date" id="fecha-registro" className="form-control" required />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="estado-caso">
                          Estado *
                        </label>
                        <select id="estado-caso" className="form-control" required>
                          <option value="activo">Activo</option>
                          <option value="seguimiento">En Seguimiento</option>
                          <option value="resuelto">Resuelto</option>
                        </select>
                      </div>
                    </div>

                    {/* Descripción del Caso */}
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Descripción del Caso</h6>
                      </div>
                      <div className="card-body">
                        <div className="form-group">
                          <label className="form-label" htmlFor="descripcion">
                            Descripción *
                          </label>
                          <textarea
                            className="form-control"
                            id="descripcion"
                            rows="4"
                            required
                            placeholder="Describa el caso o situación..."
                          ></textarea>
                        </div>

                        <div className="form-group">
                          <label className="form-label" htmlFor="acciones-tomadas">
                            Acciones Tomadas
                          </label>
                          <textarea
                            className="form-control"
                            id="acciones-tomadas"
                            rows="3"
                            placeholder="Acciones implementadas..."
                          ></textarea>
                        </div>

                        <div className="form-group">
                          <label className="form-label" htmlFor="observaciones">
                            Observaciones
                          </label>
                          <textarea
                            className="form-control"
                            id="observaciones"
                            rows="2"
                            placeholder="Observaciones adicionales..."
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    {/* Seguimiento */}
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Seguimiento</h6>
                      </div>
                      <div className="card-body">
                        <div className="form-group">
                          <label className="form-label" htmlFor="proximos-pasos">
                            Próximos Pasos
                          </label>
                          <textarea
                            className="form-control"
                            id="proximos-pasos"
                            rows="3"
                            placeholder="Próximas acciones a realizar..."
                          ></textarea>
                        </div>

                        <div className="form-group">
                          <label className="form-label" htmlFor="fecha-seguimiento">
                            Fecha de Próximo Seguimiento
                          </label>
                          <input type="date" id="fecha-seguimiento" className="form-control" />
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
                      Registrar Caso
                    </button>
                    <button
                      type="button"
                      className="d-none btn-update btn btn-success btn-block mb-4"
                    >
                      Actualizar Caso
                    </button>
                  </form>
                </div>

                {/* Panel de Información */}
                <div className="col-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">Información del Estudiante</h6>
                    </div>
                    <div className="card-body">
                      <div id="info-estudiante">
                        <p className="text-muted">
                          Selecciona un estudiante para ver su información
                        </p>
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
                        Los casos de bienestar son confidenciales y solo accesibles para personal autorizado.
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
          {/* End of Footer */}
        </div>
        {/* End of Content Wrapper */}
      </div>
      {/* End of Page Wrapper */}

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
  )
}
