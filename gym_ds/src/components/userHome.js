import  React, { useState } from "react";
import "./stylesUserHome.css"; // Archivo CSS para los estilos
import RoutineProgress from "./routineProgress";
import RoutineChoosing from "./routineChoosing";
import referenceImage from "./img/usuario.png";
import HomeRoutines from "./homeRoutines";
import { Link } from "react-router-dom";
import { Menu } from "./menu";
import ViewExercises from "./viewExercises";

function UserHome() {
  const [visibleComponent, setVisibleComponent] = useState(null); // Estado para componentes visibles
  const userName = sessionStorage.getItem('userId'); // Cambiar por el nombre dinámico del usuario

  // Función para alternar visibilidad
  const handleColumnClick = (component) => {
    setVisibleComponent(visibleComponent === component ? null : component);
  };

  return (
    <div className="user-home-container">
      {/* Barra de navegación */}
      <Menu />

      {/* Contenido principal */}
      <div className="main-content">
        {/* Imagen del usuario y nombre */}
        <div className="welcome-section">
          <div className="user-logo">
            <img
              src={referenceImage}
              alt="User Logo"
              className="user-image" // Clase para ajustar tamaño
            />
          </div>
          <h1>Bienvenido, {userName}!</h1>
        </div>

        {/* Sección de columnas */}
        <div className="columns-and-content">
          <div className="columns-section">
            <div
              className="column"
              onClick={() => handleColumnClick("HomeRoutines")}
            >
              <h2>Seleccionar Rutina</h2>
            </div>
            <div
              className="column"
              onClick={() => handleColumnClick("viewExercises")}
            >
              <h2>Seleccionar Ejercicio</h2>
            </div>
            <div
              className="column"
              onClick={() => handleColumnClick("routineProgress")}
            >
              <h2>Ver Progreso</h2>
            </div>
            <div
              className="column"
              onClick={() => handleColumnClick("additionalInfo")}
            >
              <h2>Otra Información</h2>
            </div>
          </div>

          {/* Renderizar componente seleccionado */}
          <div className="content-section">
            {visibleComponent === "routineChoosing" && (
              <div className="routine-choosing-content">
                {/* Mostrar solo rutina con ID 1 */}
                <RoutineChoosing routine={{ id: 1 }} />
              </div>
            )}
            {visibleComponent === "HomeRoutines" && <HomeRoutines showMenu={false} />}
            {visibleComponent === "viewExercises" && <ViewExercises showMenu={false} />}
            {visibleComponent === "routineProgress" && <RoutineProgress showMenu={false} />}
            {visibleComponent === "additionalInfo" && (
              <div className="additional-info">
                <p>Aquí puedes agregar contenido adicional.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
