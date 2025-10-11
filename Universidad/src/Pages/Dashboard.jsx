import React from "react";

const Dashboard = () => {
  return (
    <>
      {/* Begin Page Content */}
      <div className="container-fluid">

        {/* Page Heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <a
            href="#"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-download fa-sm text-white-50"></i> Generar Reporte
          </a>
        </div>

        {/* Content Row */}
        <div className="row">

          {/* Total Estudiantes */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Total Estudiantes
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">245</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-user-graduate fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Asistencia Mensual */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Asistencia (Mes)
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">92%</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-calendar-check fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rendimiento Académico */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-info shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                      Rendimiento
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col-auto">
                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                          78%
                        </div>
                      </div>
                      <div className="col">
                        <div className="progress progress-sm mr-2">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "78%" }}
                            aria-valuenow="78"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-chart-line fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pendientes */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Pendientes
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">12</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Row */}
        <div className="row">

          {/* Gráfico de Rendimiento */}
          <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">
                  Rendimiento por Asignatura
                </h6>
              </div>
              <div className="card-body">
                <div className="chart-area">
                  <canvas id="rendimientoChart"></canvas>
                </div>
              </div>
            </div>
          </div>

          {/* Distribución por Grado */}
          <div className="col-xl-4 col-lg-5">
            <div className="card shadow mb-4">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">
                  Distribución por Grado
                </h6>
              </div>
              <div className="card-body">
                <div className="chart-pie pt-4 pb-2">
                  <canvas id="gradoChart"></canvas>
                </div>
                <div className="mt-4 text-center small">
                  <span className="mr-2">
                    <i className="fas fa-circle text-primary"></i> Primaria
                  </span>
                  <span className="mr-2">
                    <i className="fas fa-circle text-success"></i> Secundaria
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* End Page Content */}
    </>
  );
};

export default Dashboard;
