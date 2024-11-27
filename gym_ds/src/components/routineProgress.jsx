import React, { CSSProperties } from "react";
import "./routineProgress.css";

function RoutineProgress() {
  return (
    <div className="list-progress-card">
      <h1>Progreso de personal!</h1>
      <div className="progress-card">
        <h2>Progreso Brazo</h2>
        <div
          className="progress-circle"
          style={{ "--i": 75, "--clr": "green" }}//i = porcentaje de progreso, clr = color del circulo
        ><span>75%</span></div>
        <h3>
          Felicitaciones ya casi cumples tu objetivos en el tren superior del
          cuerpo
        </h3>
      </div>
      <div className="progress-card">
        <h2>Progreso Brazo</h2>
        <div
          className="progress-circle less"
          style={{ "--i": 25, "--clr": "blue" }}
        > <span>25%</span></div>
        <h3>
          Felicitaciones ya casi cumples tu objetivos en el tren superior del
          cuerpo
        </h3>
      </div>
      <div className="progress-card">
        <h2>Progreso Brazo</h2>
        <div
          className="progress-circle less"
          style={{ "--i": 35, "--clr": "red" }}
        ><span>35%</span></div>
        <h3>
          Felicitaciones ya casi cumples tu objetivos en el tren superior del
          cuerpo
        </h3>
      </div>
    </div>
  );
}

export default RoutineProgress;
