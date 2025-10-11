import React from 'react'
import { Link } from 'react-router-dom'

export default function CrearHistorial() {
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
              <h1 className="h3 mb-0 text-gray-800">Crear HV Estudiantil</h1>

              {/* 🔗 Link de navegación a Listado */}
              <Link
                to="ListarHistorial"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i className="fas fa-list fa-sm text-white-50"></i> Listado
              </Link>
            </div>

            {/* Content Row */}
            <div className="row">
              <div className="col-8">
                <form id="form-historial">
                  {/* Estudiante */}
                  <div className="form-group">
                    <label htmlFor="estudiante-select" className="form-label">
                      Estudiante
                    </label>
                    <select id="estudiante-select" className="form-control" required>
                      <option value="">Seleccionar Estudiante</option>
                      <option value="1">Alan Brito</option>
                      <option value="2">Zoyla Vaca</option>
                    </select>
                  </div>

                  {/* Información Académica Anterior */}
                  <div className="form-group">
                    <label htmlFor="institucion-anterior" className="form-label">
                      Institución Anterior
                    </label>
                    <input
                      type="text"
                      id="institucion-anterior"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <label htmlFor="anio-graduacion" className="form-label">
                        Año de Graduación
                      </label>
                      <input
                        type="number"
                        id="anio-graduacion"
                        className="form-control"
                        min="2000"
                        max="2030"
                        required
                      />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="promedio-anterior" className="form-label">
                        Promedio Anterior
                      </label>
                      <input
                        type="number"
                        id="promedio-anterior"
                        className="form-control"
                        step="0.1"
                        min="0"
                        max="5"
                        required
                      />
                    </div>
                  </div>

                  {/* Conducta */}
                  <div className="form-group">
                    <label htmlFor="conducta-anterior" className="form-label">
                      Conducta Anterior
                    </label>
                    <select id="conducta-anterior" className="form-control" required>
                      <option value="">Seleccionar Conducta</option>
                      <option value="Excelente">Excelente</option>
                      <option value="Buena">Buena</option>
                      <option value="Regular">Regular</option>
                      <option value="Mala">Mala</option>
                    </select>
                  </div>

                  {/* Logros */}
                  <div className="form-group">
                    <label htmlFor="logros" className="form-label">
                      Logros y Reconocimientos
                    </label>
                    <textarea
                      id="logros"
                      className="form-control"
                      rows="3"
                      placeholder="Ingrese los logros académicos, deportivos, culturales, etc."
                    ></textarea>
                  </div>

                  {/* Actividades */}
                  <div className="form-group">
                    <label htmlFor="actividades" className="form-label">
                      Actividades Extracurriculares
                    </label>
                    <textarea
                      id="actividades"
                      className="form-control"
                      rows="3"
                      placeholder="Ingrese actividades deportivas, culturales, voluntariado, etc."
                    ></textarea>
                  </div>

                  {/* Observaciones */}
                  <div className="form-group">
                    <label htmlFor="observaciones" className="form-label">
                      Observaciones
                    </label>
                    <textarea
                      id="observaciones"
                      className="form-control"
                      rows="4"
                      placeholder="Observaciones adicionales sobre el historial del estudiante"
                    ></textarea>
                  </div>

                  {/* Botones */}
                  <button type="button" className="btn-create btn btn-primary btn-block mb-4">
                    Crear HV
                  </button>
                  <button type="button" className="d-none btn-update btn btn-success btn-block mb-4">
                    Actualizar HV
                  </button>
                </form>
              </div>
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
              <Link className="btn btn-primary" to="/login">
                Cerrar Sesión
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
