import { Routes, Route } from "react-router-dom";
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
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* 🔹 Rutas privadas (con sidebar y topbar) */}
      <Route element={<Dash/>}>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/estadisticas" element={<Estadisticas />} />

        <Route path="/ListarEstudiante" element={<ListarEstudiante />} />
        <Route path="/CrearEstudiante" element={<CrearEstudiante />} />

        <Route path="/ListarHistorial" element={<ListarHistorial />} />
        <Route path="/CrearHistorial" element={<CrearHistorial />} />

        <Route path="/ListarFamiliar" element={<ListarFamiliar />} />
        <Route path="/CrearFamiliar" element={<CrearFamiliar />} />

        <Route path="/ListarNota" element={<ListarNota />} />
        <Route path="/CrearNota" element={<CrearNota />} />

        <Route path="/ListarAsistencia" element={<ListarAsistencia />} />
        <Route path="/CrearAsistencia" element={<CrearAsistencia />} />

        <Route path="/ListarBienestar" element={<ListarBienestar />} />
        <Route path="/CrearBienestar" element={<CrearBienestar />} />
      </Route>
    </Routes>
  );
}

export default App;

