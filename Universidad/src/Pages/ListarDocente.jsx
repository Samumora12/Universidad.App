import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

function ListarDocente() {
  const [docentes, setDocentes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [docenteAEliminar, setDocenteAEliminar] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    cargarDocentes();
  }, []);

  const cargarDocentes = async () => {
    try {
      setLoading(true);
      const response = await api.get('/usuarios');
      
      const docentesFiltrados = response.data.filter(
        (usuario) => usuario.rol === 'Docente'
      );
      
      setDocentes(docentesFiltrados);
      setError('');
    } catch (err) {
      console.error('Error al cargar docentes:', err);
      setError('Error al cargar la lista de docentes');
    } finally {
      setLoading(false);
    }
  };

  const handleEditar = (docente) => {
    navigate('/EditarDocente', { state: { docente } });
  };

  const abrirModalEliminar = (docente) => {
    setDocenteAEliminar(docente);
    setShowModal(true);
  };

  const cerrarModal = () => {
    setDocenteAEliminar(null);
    setShowModal(false);
  };

  const confirmarEliminar = async () => {
    if (!docenteAEliminar || !docenteAEliminar.correo) {
      alert('No se puede eliminar: correo de docente no disponible');
      return;
    }

    try {
      const docenteResponse = await api.get(`/usuarios/correo/${docenteAEliminar.correo}`);
      
      if (!docenteResponse.data || !docenteResponse.data.id) {
        alert('Error: No se pudo encontrar el ID del docente');
        return;
      }

      const adminResponse = await api.get(`/usuarios/correo/${user?.correo}`);
      
      if (!adminResponse.data || !adminResponse.data.id) {
        alert('Error: No se pudo obtener el ID del administrador');
        return;
      }

      await api.delete(`/usuarios/admin/${adminResponse.data.id}/usuarios/${docenteResponse.data.id}`);
      
      alert('Docente eliminado correctamente');
      cerrarModal();
      cargarDocentes();
    } catch (err) {
      console.error('Error al eliminar docente:', err);
      alert(err.response?.data || 'Error al eliminar el docente');
    }
  };

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Mis Docentes</h1>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Lista de Docentes Registrados
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
          ) : docentes.length === 0 ? (
            <div className="alert alert-info" role="alert">
              No hay docentes registrados.
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-bordered" width="100%" cellSpacing="0">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Rol</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {docentes.map((docente, index) => (
                    <tr key={index}>
                      <td>{docente.nombre}</td>
                      <td>{docente.correo}</td>
                      <td>
                        <span className="badge badge-success">
                          {docente.rol}
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${docente.estado === 'Activo' ? 'badge-info' : 'badge-secondary'}`}>
                          {docente.estado || 'Activo'}
                        </span>
                      </td>
                      <td>
                        <button 
                          className="btn btn-sm btn-warning mr-2"
                          onClick={() => handleEditar(docente)}
                        >
                          <i className="fas fa-edit"></i> Editar
                        </button>
                        <button 
                          className="btn btn-sm btn-danger"
                          onClick={() => abrirModalEliminar(docente)}
                        >
                          <i className="fas fa-trash"></i> Eliminar
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

      {showModal && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={cerrarModal}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirmar Eliminación</h5>
                <button type="button" className="close" onClick={cerrarModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>¿Estás seguro de que deseas eliminar al docente <strong>{docenteAEliminar?.nombre}</strong>?</p>
                <p className="text-danger"><small>Esta acción no se puede deshacer.</small></p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={cerrarModal}>
                  Cancelar
                </button>
                <button type="button" className="btn btn-danger" onClick={confirmarEliminar}>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListarDocente;
