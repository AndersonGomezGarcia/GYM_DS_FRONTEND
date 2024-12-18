import React from "react";
import "./menu.css";

export const Menu = () => {
  return (
    <div className="Menu">
      <nav>
        <img className="logo" alt="Gym DS" />
        <ul>
          <li>
            <a href="/userHome">HOME</a>
          </li>
          <li>
            <a href="/viewExercises">EJERCICIOS</a>
          </li>
          <li>
            <a href="/HomeRoutines">RUTINAS</a>
          </li>
          <li>
            <a href="/createRoutine">CREAR RUTINAS</a>
          </li>
          <li>
            <a href="/createExercises">CREAR EJERCIUCIOS</a>
          </li>
          <li>
            <a href="/">LOG OUT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
