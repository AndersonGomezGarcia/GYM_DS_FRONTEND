import React, { useState } from "react";
import "./stylesCreateRoutine.css";
import { Link } from "react-router-dom";

function CreateRoutines() {
  const [routineData, setRoutineData] = useState({
    nombre: "",
    objetivo: "",
    descripcion: "",
    nivel_entrenamiento: "bajo", // Valor por defecto
    ejercicios: [],
  });

  const [showExerciseInput, setShowExerciseInput] = useState(false); // Mostrar capa para agregar ejercicios
  const [exerciseId, setExerciseId] = useState(""); // Input de ejercicio actual

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoutineData({ ...routineData, [name]: value });
  };

  const handleAddExercise = () => {
    if (exerciseId.trim()) {
      setRoutineData((prevData) => ({
        ...prevData,
        ejercicios: [...prevData.ejercicios, exerciseId], // Cambiado de "exercises" a "ejercicios"
      }));
      setExerciseId(""); // Limpiar el input
    }
  };
  
  const handleRemoveExercise = (id) => {
    setRoutineData((prevData) => ({
      ...prevData,
      ejercicios: prevData.ejercicios.filter((exercise) => exercise !== id), // Cambiado "exercises" a "ejercicios"
    }));
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8081/api/rutinas/agregar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(routineData),
      });

      if (!response.ok) throw new Error("Error al crear la rutina");
      const result = await response.json();
      console.log("Rutina creada:", result);
      alert("¡Rutina creada exitosamente!");
      setRoutineData({
        nombre: "",
        objetivo: "",
        descripcion: "",
        nivel_entrenamiento: "bajo",
        ejercicios: [],
      });
      setShowExerciseInput(false); // Reiniciar la vista
    } catch (error) {
      console.error("Error al guardar la rutina:", error.message);
      alert("Hubo un error al guardar la rutina.");
    }
  };

  return (
    <div className="create-routines-container">
      <h1>Crear Rutina</h1>
      {/* Botón para volver al listado de rutinas */}
      <div className="button-container">
        <Link to="/homeRoutines">
          <button className="back-to-home-button">Volver a Rutinas</button>
        </Link>
      </div>

      {!showExerciseInput ? (
        <form className="routine-form" onSubmit={handleSubmit}>
          <label>
            Nombre de la rutina:
            <input
              type="text"
              name="nombre"
              value={routineData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Objetivo:
            <input
              type="text"
              name="objetivo"
              value={routineData.goal}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Descripción:
            <textarea
              name="descripcion"
              value={routineData.description}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Nivel de entrenamiento:
            <select
              name="nivel_entrenamiento"
              value={routineData.level}
              onChange={handleChange}
            >
              <option value="bajo">Bajo</option>
              <option value="medio">Medio</option>
              <option value="alto">Alto</option>
            </select>
          </label>

          <button
            type="button"
            onClick={() => setShowExerciseInput(true)}
            className="add-exercises-button"
          >
            Agregar Ejercicios
          </button>

          <button type="submit" className="save-routine-button">
            Guardar Rutina
          </button>
        </form>
      ) : (
        <div className="exercise-input-section">
          <h2>Agregar Ejercicios</h2>
          <div className="exercise-input">
            <input
              type="text"
              placeholder="ID del ejercicio"
              value={exerciseId}
              onChange={(e) => setExerciseId(e.target.value)}
            />
            <button onClick={handleAddExercise}>Agregar</button>
          </div>
          <ul className="exercise-list">
            {routineData.exercises.map((id, index) => (
              <li key={index}>
                ID: {id}{" "}
                <button onClick={() => handleRemoveExercise(id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setShowExerciseInput(false)}
            className="back-button"
          >
            Volver
          </button>
        </div>
      )}
    </div>
  );
}

export default CreateRoutines;
