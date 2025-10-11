import React from 'react'
import { Link } from 'react-router-dom'

export default function CrearFamiliar() {
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
              <h1 className="h3 mb-0 text-gray-800">Crear Familiar</h1>
              <Link
                to="/ListarFamiliar"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i className="fas fa-list fa-sm text-white-50"></i> Listado
              </Link>
            </div>

            {/* Content Row */}
            <div className="row">
              <div className="col-8">
                <form id="form-familiar">
                  {/* Estudiante */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="estudiante-select">
                      Estudiante
                    </label>
                    <select id="estudiante-select" className="form-control" required>
                      <option value="">Seleccionar Estudiante</option>
                      <option value="1">Alan Brito</option>
                      <option value="2">Zoyla Vaca</option>
                    </select>
                  </div>

                  {/* Información del Familiar */}
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <label className="form-label" htmlFor="nombre-familiar">
                        Nombre
                      </label>
                      <input type="text" id="nombre-familiar" className="form-control" required />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="apellido-familiar">
                        Apellido
                      </label>
                      <input type="text" id="apellido-familiar" className="form-control" required />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <label className="form-label" htmlFor="parentesco">
                        Parentesco
                      </label>
                      <select id="parentesco" className="form-control" required>
                        <option value="">Seleccionar Parentesco</option>
                        <option value="Madre">Madre</option>
                        <option value="Padre">Padre</option>
                        <option value="Hermano/a">Hermano/a</option>
                        <option value="Abuelo/a">Abuelo/a</option>
                        <option value="Tío/a">Tío/a</option>
                        <option value="Primo/a">Primo/a</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="ocupacion">
                        Ocupación
                      </label>
                      <input type="text" id="ocupacion" className="form-control" />
                    </div>
                  </div>

                  {/* Información de Contacto */}
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <label className="form-label" htmlFor="telefono">
                        Teléfono
                      </label>
                      <input type="tel" id="telefono" className="form-control" required />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label" htmlFor="email">
                        Email
                      </label>
                      <input type="email" id="email" className="form-control" />
                    </div>
                  </div>

                  {/* Dirección */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="direccion">
                      Dirección
                    </label>
                    <input type="text" id="direccion" className="form-control" />
                  </div>

                  {/* Roles */}
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="acudiente" />
                        <label className="form-check-label" htmlFor="acudiente">
                          Es acudiente
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="emergencia" />
                        <label className="form-check-label" htmlFor="emergencia">
                          Contacto de emergencia
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Información Adicional */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="observaciones">
                      Observaciones
                    </label>
                    <textarea
                      className="form-control"
                      id="observaciones"
                      rows="4"
                      placeholder="Información adicional sobre el familiar"
                    ></textarea>
                  </div>

                  {/* Botones */}
                  <button type="button" className="btn-create btn btn-primary btn-block mb-4">
                    Crear Familiar
                  </button>
                  <button
                    type="button"
                    className="d-none btn-update btn btn-success btn-block mb-4"
                  >
                    Actualizar Familiar
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </div>
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
