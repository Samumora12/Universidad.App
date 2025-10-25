import React, { useState, useEffect } from 'react';
import api from '../services/api';

function ListarEstudiante() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    cargarEstudiantes();
  }, []);

  const cargarEstudiantes = async () => {
    try {
      setLoading(true);
      // Obtener todos los usuarios del backend
      const response = await api.get('/usuarios');
      
      // Filtrar solo los que tienen rol "Estudiante"
      const estudiantesFiltrados = response.data.filter(
        (usuario) => usuario.rol === 'Estudiante'
      );
      
      setEstudiantes(estudiantesFiltrados);
      setError('');
    } catch (err) {
      console.error('Error al cargar estudiantes:', err);
      setError('Error al cargar la lista de estudiantes');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Mis Estudiantes</h1>
      </div>

      {/* Tabla de Estudiantes */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Lista de Estudiantes Registrados
          </h6>
        </div>
        <div className="card-body">
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Cargando...</span>
              </div>
            </div>
          ) : error ? (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          ) : estudiantes.length === 0 ? (
            <div className="alert alert-info" role="alert">
              No hay estudiantes registrados.
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-bordered" width="100%" cellSpacing="0">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Rol</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {estudiantes.map((estudiante, index) => (
                    <tr key={index}>
                      <td>{estudiante.nombre}</td>
                      <td>{estudiante.correo}</td>
                      <td>
                        <span className="badge badge-primary">
                          {estudiante.rol}
                        </span>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-info mr-2">
                          <i className="fas fa-eye"></i> Ver
                        </button>
                        <button className="btn btn-sm btn-warning">
                          <i className="fas fa-edit"></i> Editar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListarEstudiante;
