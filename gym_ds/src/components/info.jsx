import React from "react";
import "./info.css"; // Asegúrate de tener este archivo para los estilos
import { Link } from "react-router-dom";

function Info() {
  return (
    <div className="info">
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
      <div className="info-content">
        <h1>Información sobre las Rutinas</h1>
        <section>
          <h2>¿Qué encontrarás en las rutinas?</h2>
          <p>
            En <strong>Gym DS</strong>, ofrecemos una amplia variedad de rutinas
            diseñadas para todos los niveles. Ya seas principiante, intermedio o
            avanzado, tenemos la rutina perfecta para ti.
          </p>
        </section>
        <section>
          <h2>Tipos de Rutinas</h2>
          <ul>
            <li>
              <strong>Rutinas de Fuerza:</strong> Ideal para aumentar la masa
              muscular y la resistencia.
            </li>
            <li>
              <strong>Rutinas de Cardio:</strong> Para mejorar tu resistencia
              cardiovascular y quemar grasa.
            </li>
            <li>
              <strong>Rutinas de Flexibilidad:</strong> Para mejorar tu rango de
              movimiento y evitar lesiones.
            </li>
            <li>
              <strong>Rutinas HIIT:</strong> Entrenamientos de alta intensidad
              para maximizar resultados en poco tiempo.
            </li>
          </ul>
        </section>
        <section>
          <h2>Cómo elegir tu rutina</h2>
          <p>
            Selecciona la rutina que mejor se adapte a tus objetivos y nivel de
            entrenamiento. Si tienes dudas, nuestros entrenadores estarán
            disponibles para guiarte.
          </p>
        </section>
        <div className="cta">
          <p>
            <em><strong>Empieza hoy mismo y comienza a entrenar con la mejor rutina</strong></em>
          </p>
          <Link to="../routineChoosing">
            <button>Ver Rutinas</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Info;
