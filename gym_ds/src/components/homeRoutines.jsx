import React, { useState, useEffect } from "react";
import "./homeRoutines.css";
import { Link } from "react-router-dom";
import { Routine } from "./component";
import { Menu } from "./menu";

function HomeRoutines() {
  const [routines, setRoutines] = useState([]); // Lista de rutinas traídas del backend
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // Indicador de carga
  const [error, setError] = useState(null); // Manejo de errores

  // Fetch para traer rutinas del backend
  const fetchRoutines = async () => {
    try {
      const response = await fetch("http://localhost:8081/api/rutinas/listar-rutinas");
      if (!response.ok) throw new Error("Error al obtener las rutinas");

      const data = await response.json();
      setRoutines(data); // Actualizar la lista de rutinas
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Finalizar la carga
    }
  };

  // Llamada inicial para traer las rutinas al cargar el componente
  useEffect(() => {
    fetchRoutines();
  }, []);

  // Manejo del input de búsqueda
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrar rutinas según el término de búsqueda
  const filteredRoutines = routines.filter((routine) =>
    routine.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mostrar modal con los detalles de la rutina
  const handleRoutineClick = (routine) => {
    setSelectedRoutine(routine);
  };

  // Cerrar modal
  const closeModal = () => {
    setSelectedRoutine(null);
  };

  // Obtener imagen local según el nombre de la rutina o tipo
  const getImageForRoutine = (routineName) => {
    switch (routineName.toLowerCase()) {
      case "upper":
        return "./img/ejemplo2.jpg";
      case "lower body":
        return "/img/rutina-lower.webp";
      case "cardio":
        return "/img/rutina-cardio.webp";
      case "hiit":
        return "/img/rutina-hiit.webp";
      default:
        return "./img/exercisesImg.jpg"; // Imagen predeterminada
    }
  };

  return (
    <div className="homeRoutines">
      <Menu />
      <section className="header">
        <h1 className="TitleRoutines">Descubre como mejorar tu cuerpo</h1>
        {/* Botón para crear rutina */}
        <div className="button-container">
          <Link to="/createRoutine">
            <button className="create-routine-button">Crear Rutina</button>
          </Link>
        </div>
        <div className="search">
          <form>
            <input
              type="text"
              placeholder="Buscar rutina"
              className="Routines"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>

          {/* Manejo de estado de carga y error */}
          {loading ? (
            <p>Cargando rutinas...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div className="RoutineList">
              {filteredRoutines.map((routine) => (
                <div
                  key={routine.id}
                  onClick={() => handleRoutineClick(routine)}
                >
                  <Routine 
                    routine={routine}
                    image={getImageForRoutine(routine.nombre)} // Pasar la imagen como prop
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal para mostrar detalles de una rutina */}
      {selectedRoutine && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedRoutine.nombre}</h2>
            <p>{selectedRoutine.descripcion}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeRoutines;
