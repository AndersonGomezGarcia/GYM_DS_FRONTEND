import React from "react";
import "./menu.css";

export const Menu = () => {
  return (
    <div className="Menu">
      <nav>
        <img className="logo" alt="Gym DS" />
        <ul>
          <li>
            <a href="/HomeRoutines">HOME</a>
          </li>
          <li>
            <a href="/routineProgress">PROGRESO</a>
          </li>
          <li>
            <a href="/routineChoosing">RUTINAS</a>
          </li>
          <li>
            <a href="/createExercises">EJERCICIOS</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
