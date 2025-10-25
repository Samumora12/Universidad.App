import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

function EditarDocente() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const docenteInicial = location.state?.docente;

  const [formData, setFormData] = useState({
    correo: '',
    nombre: '',
    contraseña: '',
    rol: 'Docente',
    estado: 'Activo',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!docenteInicial) {
      alert('No se recibieron datos del docente');
      navigate('/ListarDocente');
      return;
    }

    setFormData({
      correo: docenteInicial.correo,
      nombre: docenteInicial.nombre,
      contraseña: '',
      rol: docenteInicial.rol || 'Docente',
      estado: docenteInicial.estado || 'Activo',
    });
  }, [docenteInicial, navigate]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validaciones
    if (!formData.nombre || !formData.correo) {
      setError('Por favor completa todos los campos obligatorios');
      setLoading(false);
      return;
    }

    // Validar contraseña solo si se ingresó una nueva
    if (formData.contraseña && formData.contraseña.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      setLoading(false);
      return;
    }

    try {
      // Paso 1: Buscar el ID del docente usando el endpoint
      const docenteResponse = await api.get(`/usuarios/correo/${docenteInicial.correo}`);
      
      if (!docenteResponse.data || !docenteResponse.data.id) {
        setError('Error: No se pudo encontrar el ID del docente');
        setLoading(false);
        return;
      }

      const docenteId = docenteResponse.data.id;

      // Paso 2: Buscar el ID del admin
      const adminResponse = await api.get(`/usuarios/correo/${user?.correo}`);
      
      if (!adminResponse.data || !adminResponse.data.id) {
        setError('Error: No se pudo obtener el ID del administrador');
        setLoading(false);
        return;
      }

      const adminId = adminResponse.data.id;

      // Paso 3: Preparar datos del usuario
      const usuarioData = {
        nombre: formData.nombre,
        correo: formData.correo,
        rol: formData.rol,
        estado: formData.estado,
      };

      // Solo incluir contraseña si se ingresó una nueva
      if (formData.contraseña && formData.contraseña.trim() !== '') {
        usuarioData.contraseña = formData.contraseña;
      }

      // Paso 4: Actualizar usuario como admin
      await api.put(`/usuarios/admin/${adminId}/usuarios/${docenteId}`, usuarioData);

      alert('¡Docente actualizado exitosamente!');
      navigate('/ListarDocente');
    } catch (err) {
      console.error('Error completo:', err);
      setError(err.response?.data || err.message || 'Error al actualizar docente');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Editar Docente</h1>
      </div>

      {/* Formulario */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Datos del Docente
          </h6>
        </div>
        <div className="card-body">
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre Completo *</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Ingresa el nombre completo"
                value={formData.nombre}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="correo">Correo Electrónico *</label>
              <input
                type="email"
                className="form-control"
                id="correo"
                placeholder="ejemplo@correo.com"
                value={formData.correo}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contraseña">Nueva Contraseña (opcional)</label>
              <input
                type="password"
                className="form-control"
                id="contraseña"
                placeholder="Dejar vacío para mantener la contraseña actual"
                value={formData.contraseña}
                onChange={handleChange}
                disabled={loading}
              />
              <small className="form-text text-muted">
                Solo completa este campo si deseas cambiar la contraseña (mínimo 6 caracteres)
              </small>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="rol">Rol *</label>
                  <select
                    className="form-control"
                    id="rol"
                    value={formData.rol}
                    onChange={handleChange}
                    disabled={loading}
                  >
                    <option value="Docente">Docente</option>
                    <option value="Administrador">Administrador</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="estado">Estado *</label>
                  <select
                    className="form-control"
                    id="estado"
                    value={formData.estado}
                    onChange={handleChange}
                    disabled={loading}
                  >
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                    <option value="Especial">Especial</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={loading}
              >
                {loading ? 'Actualizando...' : 'Actualizar Docente'}
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-block mt-2"
                onClick={() => navigate('/ListarDocente')}
                disabled={loading}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditarDocente;
