import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="Menu">
        <nav>
          <img className="logo" alt="Gym DS" />
          <ul>
            <li>
              <a href="/">INICIO</a>
            </li>
            <li>
              <a href="/signUp">USUARIO</a>
            </li>
            <li>
              <a href="/routineChoosing">GYM</a>
            </li>
            <li>
              <a href="/info">INFO</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="home-image">
        <div>
          <p>
            BE <sa>STRONG</sa> <br /> TRAINING <sa>HARD</sa>
          </p>
          <Link to="../signUp">
            <button>EMPIEZA</button>
          </Link>
        </div>
      </div>
      <h1>¡Bienvenido a Gym DS!</h1>
      <section>
        <h2>¿Qué encontrarás con nosotros?</h2>
        <ul>
          <li>
            <div className="routine-img" />
            <strong>Rutinas Personalizadas:</strong> Diseñadas según tu nivel,
            objetivos y tiempo disponible.
          </li>
          <li>
            <div className="trainer-img" />
            <strong>Entrenadores Profesionales:</strong> Siempre listos para
            guiarte y motivarte.
          </li>
          <li>
            <div className="equipo-img" />
            <strong>Equipos de Última Generación:</strong> Para que entrenes de
            manera cómoda y segura.
          </li>
          <li>
            <div className="clases-img" />
            <strong>Clases Grupales y Ambientación Única:</strong> Vive la
            energía que te impulsa a darlo todo.
          </li>
        </ul>
        <div class="cta">
          <p>
          <em><strong>Empieza Ahora:</strong> Regístrate y obtén una{" "}
            sesión de evaluación gratis</em>.
          </p>
          <Link to="../signUp">
            <button>¡Quiero Empezar!</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
