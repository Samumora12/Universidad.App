import api from './api';

const authService = {
  // Login de usuario
  login: async (correo, contraseña) => {
    try {
      const response = await api.post(import.meta.env.VITE_LOGIN_ENDPOINT, {
        correo,
        contraseña,
      });

      const userData = response.data;
      localStorage.setItem('user', JSON.stringify(userData));
      
      return userData;
    } catch (error) {
      const errorMessage = error.response?.data?.message 
        || error.response?.data 
        || error.message 
        || 'Error al iniciar sesión';
      throw new Error(typeof errorMessage === 'string' ? errorMessage : JSON.stringify(errorMessage));
    }
  },

  // Registro de usuario (paso 1)
  registerUsuario: async (usuarioData) => {
    try {
      const response = await api.post(
        import.meta.env.VITE_REGISTER_USUARIO_ENDPOINT,
        usuarioData
      );
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message 
        || error.response?.data 
        || error.message 
        || 'Error al registrar usuario';
      throw new Error(typeof errorMessage === 'string' ? errorMessage : JSON.stringify(errorMessage));
    }
  },

  // Registro de estudiante (paso 2 - si es estudiante)
  registerEstudiante: async (estudianteData) => {
    try {
      const response = await api.post(
        import.meta.env.VITE_REGISTER_ESTUDIANTE_ENDPOINT,
        estudianteData
      );
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message 
        || error.response?.data 
        || error.message 
        || 'Error al registrar estudiante';
      throw new Error(typeof errorMessage === 'string' ? errorMessage : JSON.stringify(errorMessage));
    }
  },

  // NUEVO: Buscar usuario por correo
  buscarUsuarioPorCorreo: async (correo) => {
    try {
      const response = await api.get(`${import.meta.env.VITE_REGISTER_USUARIO_ENDPOINT}`);
      
      // Si el backend devuelve una lista de usuarios, buscar por correo
      if (Array.isArray(response.data)) {
        const usuario = response.data.find(u => u.correo === correo);
        return usuario || null;
      }
      
      // Si el backend tiene un endpoint específico para buscar por correo
      // Puedes ajustar esto según tu backend
      return response.data;
    } catch (error) {
      console.error('Error buscando usuario por correo:', error);
      return null;
    }
  },

  // Logout
  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  },

  // Obtener usuario actual
  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  // Verificar si está autenticado
  isAuthenticated: () => {
    return localStorage.getItem('user') !== null;
  },

  // Obtener rol del usuario
  getUserRole: () => {
    const user = authService.getCurrentUser();
    return user?.rol || null;
  },
};

export default authService;
