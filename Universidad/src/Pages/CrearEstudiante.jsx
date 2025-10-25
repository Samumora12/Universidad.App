import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function CrearEstudiante() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    contraseña: '',
    promedio: '0.0',
    fechaNacimiento: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    if (!formData.nombre || !formData.correo || !formData.contraseña) {
      setError('Por favor completa todos los campos obligatorios');
      setLoading(false);
      return;
    }

    if (!formData.fechaNacimiento) {
      setError('Por favor ingresa la fecha de nacimiento');
      setLoading(false);
      return;
    }

    try {
      // Paso 1: Crear el usuario
      const usuarioData = {
        nombre: formData.nombre,
        correo: formData.correo,
        contraseña: formData.contraseña,
        rol: 'Estudiante',
        estado: 'ACTIVO',
      };

      const usuarioResponse = await api.post('/usuarios', usuarioData);
      
      // Paso 2: Buscar el usuario recién creado para obtener su ID
      await new Promise(resolve => setTimeout(resolve, 200));
      const todosUsuarios = await api.get('/usuarios');
      const usuarioCreado = todosUsuarios.data.find(u => u.correo === formData.correo);

      if (usuarioCreado) {
        // Paso 3: Crear el perfil de estudiante
        const estudianteData = {
          promedio: parseFloat(formData.promedio),
          fechaNacimiento: formData.fechaNacimiento,
          usuario: {
            id: usuarioCreado.id
          }
        };

        await api.post('/estudiantes', estudianteData);
      }

      alert('¡Estudiante registrado exitosamente!');
      navigate('/ListarEstudiante');
    } catch (err) {
      console.error('Error completo:', err);
      setError(err.message || 'Error al registrar estudiante');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Registrar Estudiante</h1>
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
              <label htmlFor="contraseña">Contraseña *</label>
              <input
                type="password"
                className="form-control"
                id="contraseña"
                placeholder="Contraseña (mínimo 6 caracteres)"
                value={formData.contraseña}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="fechaNacimiento">Fecha de Nacimiento *</label>
                  <input
                    type="date"
                    className="form-control"
                    id="fechaNacimiento"
                    value={formData.fechaNacimiento}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="promedio">Promedio (opcional)</label>
                  <input
                    type="number"
                    step="0.01"
                    className="form-control"
                    id="promedio"
                    placeholder="Ej: 4.5"
                    value={formData.promedio}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={loading}
              >
                {loading ? 'Registrando...' : 'Registrar Estudiante'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CrearEstudiante;
