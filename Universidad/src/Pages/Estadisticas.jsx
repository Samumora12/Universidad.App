import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto";

const Estadisticas = () => {
  return (
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
              <h1 className="h3 mb-0 text-gray-800">Estadísticas del Sistema</h1>
              <a
                href="#"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                id="btn-exportar"
              >
                <i className="fas fa-download fa-sm text-white-50"></i> Exportar Reporte
              </a>
            </div>

            {/* Filtros */}
            <div className="row mb-4">
              <div className="col-md-3">
                <label className="form-label">Año Académico</label>
                <select id="filtro-anio" className="form-control">
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
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
                <label className="form-label">Período</label>
                <select id="filtro-periodo" className="form-control">
                  <option value="">Todo el año</option>
                  <option value="1">Primer Trimestre</option>
                  <option value="2">Segundo Trimestre</option>
                  <option value="3">Tercer Trimestre</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label">&nbsp;</label>
                <button className="btn btn-primary w-100">
                  <i className="fas fa-chart-bar"></i> Generar Reporte
                </button>
              </div>
            </div>

            {/* Resumen Estadístico */}
            <div className="row mb-4">
              {/* Total Estudiantes */}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          Total Estudiantes
                        </div>
                        <div
                          className="h5 mb-0 font-weight-bold text-gray-800"
                          id="total-estudiantes"
                        >
                          0
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-users fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Promedio General */}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                          Promedio General
                        </div>
                        <div
                          className="h5 mb-0 font-weight-bold text-gray-800"
                          id="promedio-general"
                        >
                          0%
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-chart-line fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Asistencia Promedio */}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                          Asistencia Promedio
                        </div>
                        <div
                          className="h5 mb-0 font-weight-bold text-gray-800"
                          id="asistencia-promedio"
                        >
                          0%
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-calendar-check fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Casos de Bienestar */}
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                          Casos de Bienestar
                        </div>
                        <div
                          className="h5 mb-0 font-weight-bold text-gray-800"
                          id="casos-bienestar"
                        >
                          0
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-heartbeat fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gráficos */}
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Distribución de Notas</h6>
                  </div>
                  <div className="card-body">
                    <div className="chart-bar">
                      <canvas id="graficoNotas" width="400" height="200"></canvas>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Asistencia por Grado</h6>
                  </div>
                  <div className="card-body">
                    <div className="chart-bar">
                      <canvas id="graficoAsistencia" width="400" height="200"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Casos de Bienestar por Tipo
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="chart-pie pt-4 pb-2">
                      <canvas id="graficoBienestar" width="400" height="200"></canvas>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Rendimiento por Materia</h6>
                  </div>
                  <div className="card-body">
                    <div className="chart-bar">
                      <canvas id="graficoMaterias" width="400" height="200"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tablas */}
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Top 10 Mejores Estudiantes
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        className="table table-bordered"
                        id="tablaTopEstudiantes"
                        width="100%"
                        cellSpacing="0"
                      >
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Estudiante</th>
                            <th>Grado</th>
                            <th>Promedio</th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Materias con Mejor Rendimiento
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table
                        className="table table-bordered"
                        id="tablaTopMaterias"
                        width="100%"
                        cellSpacing="0"
                      >
                        <thead>
                          <tr>
                            <th>Materia</th>
                            <th>Promedio</th>
                            <th>Estudiantes</th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
      
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
  );
};

export default Estadisticas;
