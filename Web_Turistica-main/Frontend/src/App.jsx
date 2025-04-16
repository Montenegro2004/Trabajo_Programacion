import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Visitor from "./components/Visitor/Visitor";
import Visitor_user from "./components/User/Visitor_user";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Login/Register";
import SobreNosotros from "./components/Visitor/SobreNosotros";
import Perfil from "./components/User/Perfil.jsx";
import Nosotros_user from "./components/User/Nosotros_user.jsx";
import Horario from "./components/User/Horario.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta raíz redirigida a Visitor */}
        <Route path="/user/horario" element={<Horario />} />
        <Route path="/user/nosotros_user" element={<Nosotros_user />} />
        <Route path="/" element={<Navigate to="/visitor" />} />
        <Route path="/visitor" element={<Visitor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/visitor_user" element={<Visitor_user />} />
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

export default App;
