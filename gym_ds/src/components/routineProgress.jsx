import React, { CSSProperties, useState } from "react";
import "./routineProgress.css";
import { Menu } from "./menu";

function RoutineProgress() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <Menu />
      <div className="list-progress-card">
        <h1>Progreso de personal!</h1>
        <div className="progress-card">
          <h2>Progreso Brazo</h2>
          <div
            className="progress-circle"
            style={{ "--i": 75, "--clr": "green" }} //i = porcentaje de progreso, clr = color del circulo
          >
            <span>75%</span>
          </div>
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
          >
            {" "}
            <span>25%</span>
          </div>
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
          >
            <span>35%</span>
          </div>
          <h3>
            Felicitaciones ya casi cumples tu objetivos en el tren superior del
            cuerpo
          </h3>
        </div>
      </div>
      <div className="update-progress">
        <button className="open-popup" onClick={openPopup}>
          Actualizar Progreso
        </button>
      </div>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <h2>Actualizar Progreso</h2>
            <form>
              <div className="form-group">
                <label>Fecha:</label>
                <input type="date" name="fecha" />
              </div>
              <div className="form-group">
                <label>Peso:</label>
                <input
                  type="number"
                  name="peso"
                  onInput={(e) => {
                    if (e.target.value.length > 3)
                      e.target.value = e.target.value.slice(0, 3);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Porcentaje de Grasa:</label>
                <input
                  type="number"
                  max="100"
                  step="0.1"
                  name="porcentaje_grasa"
                  onInput={(e) => {
                    if (e.target.value.length > 2)
                      e.target.value = e.target.value.slice(0, 2);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Comentarios:</label>
                <textarea name="comentarios"></textarea>
              </div>
              <button type="submit">Guardar</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default RoutineProgress;
