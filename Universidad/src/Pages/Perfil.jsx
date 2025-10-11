import { Link } from 'react-router-dom'


export default function Perfil() {
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
              <h1 className="h3 mb-0 text-gray-800">Perfil de Usuario</h1>
              <Link
                to={`/Dashboard`}
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i className="fas fa-arrow-left fa-sm text-white-50"></i> Volver
                al Inicio
              </Link>
            </div>

            {/* Content Row */}
            <div className="row">
              {/* Columna izquierda */}
              <div className="col-lg-4 col-xl-3">
                {/* Perfil Card */}
                <div className="card shadow mb-4">
                  <div className="card-body text-center">
                    {/* Foto de perfil */}
                    <div className="position-relative d-inline-block">
                      <img
                        className="img-fluid rounded-circle mb-3"
                        src="img/undraw_profile.svg"
                        alt="Foto de perfil"
                        style={{
                          width: "150px",
                          height: "150px",
                          objectFit: "cover",
                        }}
                      />
                      <button
                        className="btn btn-primary btn-sm position-absolute bottom-0 end-0 rounded-circle"
                        style={{ width: "40px", height: "40px" }}
                      >
                        <i className="fas fa-camera"></i>
                      </button>
                      <input
                        type="file"
                        id="foto-perfil"
                        className="d-none"
                        accept="image/*"
                      />
                    </div>

                    <h4 className="font-weight-bold" id="nombre-perfil">
                      Admin Sistema
                    </h4>
                    <p className="text-muted mb-1" id="rol-perfil">
                      Administrador
                    </p>
                    <p className="text-muted mb-3" id="email-perfil">
                      admin@sistema.edu
                    </p>

                    <div className="small">
                      <i className="fas fa-calendar-alt mr-1"></i>
                      Miembro desde:{" "}
                      <span id="fecha-registro">Ene 2024</span>
                    </div>
                  </div>
                </div>

                {/* Información de Contacto */}
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Información de Contacto
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <strong>
                        <i className="fas fa-envelope mr-2"></i>Email
                      </strong>
                      <p className="text-muted mb-0" id="info-email">
                        admin@sistema.edu
                      </p>
                    </div>
                    <div className="mb-3">
                      <strong>
                        <i className="fas fa-phone mr-2"></i>Teléfono
                      </strong>
                      <p className="text-muted mb-0" id="info-telefono">
                        +57 300 123 4567
                      </p>
                    </div>
                    <div className="mb-0">
                      <strong>
                        <i className="fas fa-map-marker-alt mr-2"></i>Ubicación
                      </strong>
                      <p className="text-muted mb-0" id="info-ubicacion">
                        Bogotá, Colombia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna derecha */}
              <div className="col-lg-8 col-xl-9">
                {/* Información Personal */}
                <div className="card shadow mb-4">
                  <div className="card-header py-3 d-flex justify-content-between align-items-center">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Información Personal
                    </h6>
                    <button className="btn btn-primary btn-sm">
                      <i className="fas fa-edit fa-sm"></i> Editar
                    </button>
                  </div>
                  <div className="card-body">
                    <form id="form-perfil">
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Nombres</label>
                          <input
                            type="text"
                            className="form-control"
                            id="input-nombres"
                            value="Admin"
                            disabled
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Apellidos</label>
                          <input
                            type="text"
                            className="form-control"
                            id="input-apellidos"
                            value="Sistema"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="input-email"
                            value="admin@sistema.edu"
                            disabled
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Teléfono</label>
                          <input
                            type="tel"
                            className="form-control"
                            id="input-telefono"
                            value="+57 300 123 4567"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Dirección</label>
                        <textarea
                          className="form-control"
                          id="input-direccion"
                          rows="2"
                          disabled
                          defaultValue="Calle 123 #45-67"
                        ></textarea>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Ciudad</label>
                          <input
                            type="text"
                            className="form-control"
                            id="input-ciudad"
                            value="Bogotá"
                            disabled
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">País</label>
                          <input
                            type="text"
                            className="form-control"
                            id="input-pais"
                            value="Colombia"
                            disabled
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Cambio de Contraseña */}
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Cambio de Contraseña
                    </h6>
                  </div>
                  <div className="card-body">
                    <form id="form-password">
                      <div className="mb-3">
                        <label className="form-label">Contraseña Actual</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password-actual"
                          placeholder="Ingrese su contraseña actual"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Nueva Contraseña</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password-nueva"
                          placeholder="Ingrese nueva contraseña"
                        />
                        <small className="form-text text-muted">
                          La contraseña debe tener al menos 8 caracteres,
                          incluyendo mayúsculas, minúsculas y números.
                        </small>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Confirmar Nueva Contraseña
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="password-confirmar"
                          placeholder="Confirme la nueva contraseña"
                        />
                      </div>
                      <button type="button" className="btn btn-primary">
                        <i className="fas fa-key fa-sm"></i> Cambiar Contraseña
                      </button>
                    </form>
                  </div>
                </div>

                {/* Preferencias del Sistema */}
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Preferencias del Sistema
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="notificaciones-email"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="notificaciones-email"
                      >
                        Recibir notificaciones por email
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="modo-oscuro"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="modo-oscuro"
                      >
                        Activar modo oscuro
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Idioma preferido</label>
                      <select className="form-control" id="select-idioma" defaultValue="es">
                        <option value="es">Español</option>
                        <option value="en">English</option>
                        <option value="pt">Português</option>
                      </select>
                    </div>
                    <button type="button" className="btn btn-primary mt-2">
                      <i className="fas fa-save fa-sm"></i> Guardar Preferencias
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
