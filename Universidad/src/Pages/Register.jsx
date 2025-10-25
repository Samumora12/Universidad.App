import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Register() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    contraseña: '',
    repetirContraseña: '',
    rol: 'Estudiante',
    estado: 'Activo',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value, name } = e.target;
    setFormData({
      ...formData,
      [id || name]: value,
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

    if (formData.contraseña !== formData.repetirContraseña) {
      setError('Las contraseñas no coinciden');
      setLoading(false);
      return;
    }

    if (formData.contraseña.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      setLoading(false);
      return;
    }

    try {
      // Preparar datos del usuario
      const usuarioData = {
        nombre: formData.nombre,
        correo: formData.correo,
        contraseña: formData.contraseña,
        rol: formData.rol,
        estado: formData.estado,
      };

      // Registrar solo el usuario
      await register(usuarioData);
      
      // Mostrar mensaje de éxito y redirigir al login
      alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
      navigate('/login');
    } catch (err) {
      console.error('Error completo:', err);
      console.error('Mensaje del error:', err.message);
      setError(err.message || 'Error al registrar usuario');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">¡Crea una cuenta!</h1>
                </div>

                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                <form className="user" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-user"
                      id="nombre"
                      placeholder="Nombre completo"
                      value={formData.nombre}
                      onChange={handleChange}
                      disabled={loading}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-user"
                      id="correo"
                      placeholder="Correo electrónico"
                      value={formData.correo}
                      onChange={handleChange}
                      disabled={loading}
                    />
                  </div>

                  <div className="form-group">
                    <select
                      className="form-control"
                      id="rol"
                      name="rol"
                      value={formData.rol}
                      onChange={handleChange}
                      disabled={loading}
                    >
                      <option value="Estudiante">Estudiante</option>
                      <option value="Docente">Docente</option>
                    </select>
                  </div>

                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        id="contraseña"
                        placeholder="Contraseña"
                        value={formData.contraseña}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        id="repetirContraseña"
                        placeholder="Repetir contraseña"
                        value={formData.repetirContraseña}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-user btn-block"
                    disabled={loading}
                  >
                    {loading ? 'Registrando...' : 'Registrar cuenta'}
                  </button>
                </form>

                <hr />

                <div className="text-center">
                  <Link className="small" to="/login">
                    ¿Ya tienes una cuenta? ¡Inicia sesión!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
