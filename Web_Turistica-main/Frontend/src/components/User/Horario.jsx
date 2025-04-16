import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import "../User/Horario.css";

export default function Horario() {
  const [vista, setVista] = useState("agendar");
  const navigate = useNavigate();

  const viewSchedule = () => setVista("agendar");
  const goToAboutUs = () => navigate("/User/Nosotros_user");
  const logOutUser = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="horario-container">
      {/* NAVBAR */}
      <header className="navbar navbar-expand-lg fixed-top custom-navbar shadow">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div
            className="d-flex align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/User/visitor_user")}
          >
            <img
              src="/Fotos/Parapente_logo.png"
              alt="SkyRush Logo"
              className="logo-navbar"
            />
            <span className="navbar-brand text-white fw-bold ms-2">SkyRush</span>
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
            <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="userMenuButton">
              <li><button className="dropdown-item" onClick={() => navigate("/perfil")}>Ver Perfil</button></li>
              <li><button className="dropdown-item" onClick={viewSchedule}>Ver Horario</button></li>
              <li><button className="dropdown-item" onClick={goToAboutUs}>Más Información</button></li>
              <li><hr className="dropdown-divider" /></li>
              <li><button className="dropdown-item text-danger fw-semibold" onClick={logOutUser}>Cerrar Sesión</button></li>
            </ul>
          </div>
        </div>
      </header>

      <div className="d-flex mt-navbar">
        {/* Sidebar */}
        <div className="sidebar">
          <Button
            variant="light"
            className="w-100 mb-3"
            onClick={() => setVista("agendar")}
          >
            AGENDA NUEVA CITA
          </Button>
          <Button
            variant="outline-light"
            className="w-100"
            onClick={() => setVista("programadas")}
          >
            CITAS PROGRAMADAS
          </Button>
          <div className="calendar-icon">
            <i className="bi bi-calendar3"></i>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {vista === "agendar" ? (
            <>
              <div className="filtros">
                <Form.Control
                  type="date"
                  placeholder="Fecha disponible"
                  style={{ maxWidth: "200px" }}
                />
                <Form.Select style={{ maxWidth: "200px" }}>
                  <option>Filtrar por dificultad</option>
                  <option value="Fácil">Fácil</option>
                  <option value="Medio">Medio</option>
                  <option value="Difícil">Difícil</option>
                </Form.Select>
              </div>

              <h5 className="mb-3">CITAS DISPONIBLES</h5>
              <div className="lista-citas">
                <div className="header">
                  <div className="w-10">ID</div>
                  <div className="w-25">Ubicación</div>
                  <div className="w-30">Dificultad</div>
                  <div className="w-20">Precio</div>
                  <div className="w-15">Fecha Disponible</div>
                  <div className="w-15">Duración (min)</div>
                </div>
                {/* Aquí se agregarían los datos dinámicos, por ejemplo: */}
               
              </div>

              <div className="paginacion">
              
                
                <div>
                  <Button variant="light">‹</Button>
                  <Button variant="light">›</Button>
                </div>
              </div>
            </>
          ) : (
            <>
              <h5 className="mb-3">MIS CITAS PROGRAMADAS</h5>
              <div className="lista-citas">
                <div className="header">
                  <div className="w-25">Fecha</div>
                  <div className="w-30">Tutor</div>
                  <div className="w-20">Sede</div>
                  <div className="w-25">Estado</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
