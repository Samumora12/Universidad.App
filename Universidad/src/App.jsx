import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Perfil from "./Pages/Perfil";
import Estadisticas from "./Pages/Estadisticas";
import Dash from "./layout/Dash";
import ListarEstudiante from "./Pages/ListarEstudiante";
import CrearEstudiante from "./Pages/CrearEstudiante";
import ListarHistorial from "./Pages/ListarHistorial";
import CrearHistorial from "./Pages/CrearHistorial";
import ListarFamiliar from "./Pages/ListarFamiliar";
import CrearFamiliar from "./Pages/CrearFamiliar";
import ListarNota from "./Pages/ListarNota";
import CrearNota from "./Pages/CrearNota";
import ListarAsistencia from "./Pages/ListarAsistencia";
import CrearAsistencia from "./Pages/CrearAsistencia";
import ListarBienestar from "./Pages/ListarBienestar";
import CrearBienestar from "./Pages/CrearBienestar";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Redirigir la raíz al dashboard si está autenticado, o al login si no */}
        <Route 
          path="/" 
          element={
            <PrivateRoute>
              <Navigate to="/dashboard" replace />
            </PrivateRoute>
          } 
        />

        {/* Rutas privadas (con sidebar y topbar) */}
        <Route
          element={
            <PrivateRoute>
              <Dash />
            </PrivateRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/perfil" element={<Perfil />} />

          {/* Estadísticas - Solo Docentes y Admin */}
          <Route
            path="/estadisticas"
            element={
              <PrivateRoute allowedRoles={["Docente", "Administrador"]}>
                <Estadisticas />
              </PrivateRoute>
            }
          />

          {/* Gestión de Estudiantes - Solo Docentes y Admin */}
          <Route
            path="/ListarEstudiante"
            element={
              <PrivateRoute allowedRoles={["Docente", "Administrador"]}>
                <ListarEstudiante />
              </PrivateRoute>
            }
          />
          <Route
            path="/CrearEstudiante"
            element={
              <PrivateRoute allowedRoles={["Docente", "Administrador"]}>
                <CrearEstudiante />
              </PrivateRoute>
            }
          />

          {/* Historial - Todos pueden ver */}
          <Route path="/ListarHistorial" element={<ListarHistorial />} />
          
          {/* Crear Historial - Solo Docentes y Admin */}
          <Route
            path="/CrearHistorial"
            element={
              <PrivateRoute allowedRoles={["Docente", "Administrador"]}>
                <CrearHistorial />
              </PrivateRoute>
            }
          />

          {/* Módulo Familiar - Docentes, Admin y Empresarios */}
          <Route
            path="/ListarFamiliar"
            element={
              <PrivateRoute allowedRoles={["Docente", "Administrador", "Empresario"]}>
                <ListarFamiliar />
              </PrivateRoute>
            }
          />
          <Route
            path="/CrearFamiliar"
            element={
              <PrivateRoute allowedRoles={["Docente", "Administrador", "Empresario"]}>
                <CrearFamiliar />
              </PrivateRoute>
            }
          />

          {/* Notas - Todos pueden ver */}
          <Route path="/ListarNota" element={<ListarNota />} />
          
          {/* Crear/Registrar Notas - Solo Docentes y Admin */}
          <Route
            path="/CrearNota"
            element={
              <PrivateRoute allowedRoles={["Docente", "Administrador"]}>
                <CrearNota />
              </PrivateRoute>
            }
          />

          {/* Asistencias - Todos pueden ver */}
          <Route path="/ListarAsistencia" element={<ListarAsistencia />} />
          
          {/* Registrar Asistencias - Solo Docentes y Admin */}
          <Route
            path="/CrearAsistencia"
            element={
              <PrivateRoute allowedRoles={["Docente", "Administrador"]}>
                <CrearAsistencia />
              </PrivateRoute>
            }
          />

          {/* Bienestar - Todos pueden ver */}
          <Route path="/ListarBienestar" element={<ListarBienestar />} />
          
          {/* Crear registros de Bienestar - Solo Docentes y Admin */}
          <Route
            path="/CrearBienestar"
            element={
              <PrivateRoute allowedRoles={["Docente", "Administrador"]}>
                <CrearBienestar />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
