import React from 'react'
import { Link } from 'react-router-dom'

export default function ListarEstudiante() {
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
          <h1 className="h3 mb-0 text-gray-800">Crear Estudiante</h1>
          <Link
            to={`/CrearEstudiante`}
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-list fa-sm text-white-50"></i> Listado
          </Link>
        </div>

        {/* Content Row */}
        <div className="row">
          <div className="col-8">
            <form id="form-estudiante">
              {/* Nombre */}
              <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <label className="form-label" htmlFor="nombre-estudiante">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre-estudiante"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="apellido-estudiante">
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="apellido-estudiante"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="form-group">
                <label className="form-label" htmlFor="email-estudiante">
                  Email
                </label>
                <input
                  type="email"
                  id="email-estudiante"
                  className="form-control"
                  required
                />
              </div>

              {/* Celular */}
              <div className="form-group">
                <label className="form-label" htmlFor="celular-estudiante">
                  Celular
                </label>
                <input
                  type="tel"
                  id="celular-estudiante"
                  className="form-control"
                  required
                />
              </div>

              {/* Grado */}
              <div className="form-group">
                <label className="form-label" htmlFor="grado-estudiante">
                  Grado
                </label>
                <select
                  id="grado-estudiante"
                  className="form-control"
                  required
                >
                  <option value="">Seleccionar Grado</option>
                  <option value="1°">1° Primaria</option>
                  <option value="2°">2° Primaria</option>
                  <option value="3°">3° Primaria</option>
                  <option value="4°">4° Primaria</option>
                  <option value="5°">5° Primaria</option>
                  <option value="6°">6° Primaria</option>
                  <option value="7°">7° Secundaria</option>
                  <option value="8°">8° Secundaria</option>
                  <option value="9°">9° Secundaria</option>
                  <option value="10°">10° Secundaria</option>
                  <option value="11°">11° Secundaria</option>
                </select>
              </div>

              {/* Direcciones */}
              <div className="form-group row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <label className="form-label" htmlFor="direccion-estudiante">
                    Dirección Principal
                  </label>
                  <input
                    type="text"
                    id="direccion-estudiante"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label" htmlFor="direccion2-estudiante">
                    Dirección Secundaria
                  </label>
                  <input
                    type="text"
                    id="direccion2-estudiante"
                    className="form-control"
                  />
                </div>
              </div>

              {/* Información Académica */}
              <div className="form-group">
                <label className="form-label" htmlFor="info-academica">
                  Información Académica
                </label>
                <textarea
                  className="form-control"
                  id="info-academica"
                  rows="4"
                ></textarea>
              </div>

              {/* Botones */}
              <button
                type="button"
                className="btn-create btn btn-primary btn-block mb-4"
              >
                Crear Estudiante
              </button>
              <button
                type="button"
                className="d-none btn-update btn btn-success btn-block mb-4"
              >
                Actualizar Estudiante
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* /.container-fluid */}
    </div>
    {/* End of Main Content */}
  </div>
  {/* End of Content Wrapper */}
</div>
    </div>
  )
}
