import React, { useState, useEffect } from "react";
import "./stylesViewExercises.css";
import { Menu } from "./menu";
function ViewExercises() {
  const [exercises, setExercises] = useState([]); // Lista de ejercicios
  const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
  const [filteredExercises, setFilteredExercises] = useState([]); // Resultados filtrados
  const [errorMessage, setErrorMessage] = useState(""); // Error

  // Fetch inicial: traer todos los ejercicios
  const fetchExercises = async () => {
    try {
      const response = await fetch(
        "http://localhost:8081/api/ejercicios/listar-ejercicios"
      );
      if (!response.ok) throw new Error("Error al obtener los ejercicios");

      const data = await response.json();
      setExercises(data); // Actualizar lista de ejercicios
      setFilteredExercises(data); // Mostrar inicialmente todo
    } catch (error) {
      console.error("Error en la búsqueda:", error.message);
      setErrorMessage("No se pudieron obtener los ejercicios.");
    }
  };

  // Llamada inicial cuando carga la página
  useEffect(() => {
    fetchExercises();
  }, []);

  // Manejar cambios en el input del buscador
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Manejar la búsqueda al hacer clic en el botón
  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setFilteredExercises(exercises); // Mostrar todo si no hay término
    } else {
      // Filtrar con coincidencias parciales (case insensitive)
      const filtered = exercises.filter((exercise) =>
        exercise.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredExercises(filtered);
    }
  };

  return (
    <>
      <Menu />
      <div className="view-exercises-container">
        {/* Título */}
        <h1>Buscar Ejercicio</h1>

        {/* Buscador */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar ejercicio..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>

        {/* Lista de ejercicios */}
        {errorMessage ? (
          <p className="error-message">{errorMessage}</p>
        ) : (
          <div className="exercise-list">
            {filteredExercises.length > 0 ? (
              filteredExercises.map((exercise) => (
                <div key={exercise.id} className="exercise-card">
                  <h3>{exercise.nombre}</h3>
                  <p>ID: {exercise.id}</p>
                  <p>Descripción: {exercise.descripcion}</p>
                </div>
              ))
            ) : (
              <p>No se encontraron ejercicios.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default ViewExercises;
