import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import './Nosotros_user.css';

const Nosotros_user = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="visitor-container">
      {/* NAVBAR */}
      <header className="navbar navbar-expand-lg fixed-top custom-navbar shadow">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div
            className="d-flex align-items-center"
            style={{ cursor: "pointer", textDecoration: "none" }}
            onClick={() => navigate("/user/visitor_user")}
          >
            <img
              src="/Fotos/Parapente_logo.png"
              alt="SkyRush Logo"
              className="logo-navbar"
            />
            <span className="navbar-brand text-white fw-bold ms-2">
              SkyRush
            </span>
          </div>

          <div className="dropdown">
            <button
              className="btn custom-toggle-btn"
              type="button"
              id="userMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="hamburger-icon">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end shadow"
              aria-labelledby="userMenuButton"
            >
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => navigate("/perfil")}
                >
                  Ver Perfil
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => {}}>
                  Ver Horario
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => {}}>
                  Más Información
                </button>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button
                  className="dropdown-item text-danger fw-semibold"
                  onClick={handleLogout}
                >
                  Cerrar Sesión
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* TÍTULO */}
      <section className="titulo-sobre-nosotros">
        <h1>Sobre Nosotros</h1>
        <p>¡Gracias por ser parte de nuestra comunidad!</p>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className="info-section sobre-nosotros-section">
        <div className="sobre-grid">
          <div className="descripcion">
            <h2>Nuestra Historia</h2>
            <p>
              Somos una agencia turística dedicada a crear experiencias inolvidables. Nuestro objetivo es promover el turismo local con responsabilidad, pasión y creatividad.
            </p>
            <p>
              Como usuario registrado, accedés a beneficios exclusivos, eventos especiales y atención personalizada para que tu experiencia con SkyRush sea única.
            </p>
          </div>

          <div className="comentarios-form">
            <h2>Dejanos tu comentario</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Tu nombre" required />
              <input type="email" placeholder="Tu correo electrónico" required />
              <textarea placeholder="Tu comentario" rows="5" required></textarea>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Nosotros_user;
