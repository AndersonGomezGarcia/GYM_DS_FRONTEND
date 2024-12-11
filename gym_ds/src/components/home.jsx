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
              <a href="/Home">HOME</a>
            </li>
            <li>
              <a href="/routineProgress">Progreso de rutina</a>
            </li>
            <li>
              <a href="/routineChoosing">Elegir rutina</a>
            </li>
            <li>
              <a href="/createExercises">EJERCICIOS</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="home-image">
        <div>
          <p>
            BE <sa>STRONG</sa> <br /> TRAINING <sa>HARD</sa>
          </p>
          <button>EMPIEZA</button>
        </div>
      </div>
      <h1>¡Bienvenido a Gym DS!</h1> 
      <section>
        
        <h2>¿Qué encontrarás con nosotros?</h2>
        <ul>
          <li>
            <strong>Rutinas Personalizadas:</strong> Diseñadas según tu nivel,
            objetivos y tiempo disponible.
          </li>
          <li>
            <strong>Entrenadores Profesionales:</strong> Siempre listos para
            guiarte y motivarte.
          </li>
          <li>
            <strong>Equipos de Última Generación:</strong> Para que entrenes de
            manera cómoda y segura.
          </li>
          <li>
            <strong>Clases Grupales y Ambientación Única:</strong> Vive la
            energía que te impulsa a darlo todo.
          </li>
        </ul>
        <div class="cta">
          <p>
            <strong>Empieza Ahora:</strong> Regístrate y obtén una{" "}
            <em>sesión de evaluación gratis</em>.
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
