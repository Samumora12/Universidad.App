import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

function EditarEstudiante() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const estudianteInicial = location.state?.estudiante;

  const [formData, setFormData] = useState({
    correo: '',
    nombre: '',
    contraseña: '',
    rol: 'Estudiante',
    estado: 'Activo',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!estudianteInicial) {
      alert('No se recibieron datos del estudiante');
      navigate('/ListarEstudiante');
      return;
    }

    setFormData({
      correo: estudianteInicial.correo,
      nombre: estudianteInicial.nombre,
      contraseña: '',
      rol: estudianteInicial.rol || 'Estudiante',
      estado: estudianteInicial.estado || 'Activo',
    });
  }, [estudianteInicial, navigate]);

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

    if (formData.contraseña && formData.contraseña.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      setLoading(false);
      return;
    }

    try {
      // Paso 1: Buscar el ID del estudiante usando el nuevo endpoint
      const estudianteResponse = await api.get(`/usuarios/correo/${estudianteInicial.correo}`);
      if (!estudianteResponse.data || !estudianteResponse.data.id) {
        setError('Error: No se pudo encontrar el ID del estudiante');
        setLoading(false);
        return;
      }
      const estudianteId = estudianteResponse.data.id;

      // Paso 2: Buscar el ID y el rol del usuario actual
      const adminResponse = await api.get(`/usuarios/correo/${user?.correo}`);
      if (!adminResponse.data || !adminResponse.data.id) {
        setError('Error: No se pudo obtener el ID del usuario actual');
        setLoading(false);
        return;
      }
      const adminId = adminResponse.data.id;
      const userRole = user?.rol;

      // Paso 3: Preparar datos del usuario
      const usuarioData = {
        nombre: formData.nombre,
        correo: formData.correo,
        rol: formData.rol,
        estado: formData.estado,
      };

      if (formData.contraseña && formData.contraseña.trim() !== '') {
        usuarioData.contraseña = formData.contraseña;
      }

      // Paso 4: Actualizar usuario según el rol
      if (userRole === 'Administrador') {
        await api.put(`/usuarios/admin/${adminId}/usuarios/${estudianteId}`, usuarioData);
      } else if (userRole === 'Docente') {
        await api.put(`/usuarios/${estudianteId}`, usuarioData);
      } else {
        throw new Error('No tienes permisos para editar usuarios');
      }

      alert('¡Estudiante actualizado exitosamente!');
      navigate('/ListarEstudiante');
    } catch (err) {
      console.error('Error completo:', err);
      setError(err.response?.data || err.message || 'Error al actualizar estudiante');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Editar Estudiante</h1>
      </div>

      {/* Formulario */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Datos del Estudiante
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
                    <option value="Estudiante">Estudiante</option>
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
                {loading ? 'Actualizando...' : 'Actualizar Estudiante'}
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-block mt-2"
                onClick={() => navigate('/ListarEstudiante')}
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

export default EditarEstudiante;
