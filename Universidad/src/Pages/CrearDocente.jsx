import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function CrearDocente() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    contraseña: '',
    rol: 'Docente',
    estado: 'Activo',
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

    if (!formData.nombre || !formData.correo || !formData.contraseña) {
      setError('Por favor completa todos los campos obligatorios');
      setLoading(false);
      return;
    }

    if (formData.contraseña.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      setLoading(false);
      return;
    }

    try {
      const usuarioData = {
        nombre: formData.nombre,
        correo: formData.correo,
        contraseña: formData.contraseña,
        rol: 'Docente',
        estado: formData.estado,
      };

      await api.post('/usuarios', usuarioData);
      
      alert('¡Docente registrado exitosamente!');
      navigate('/ListarDocente');
    } catch (err) {
      console.error('Error completo:', err);
      setError(err.response?.data || err.message || 'Error al registrar docente');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Registrar Docente</h1>
      </div>

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
              </select>
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={loading}
              >
                {loading ? 'Registrando...' : 'Registrar Docente'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CrearDocente;
