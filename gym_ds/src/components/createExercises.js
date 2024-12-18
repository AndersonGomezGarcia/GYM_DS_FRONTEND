import React, { useState } from "react";
import "./stylesCreateExercises.css"; // Archivo CSS para estilos

function CreateExercises() {
  const [exerciseData, setExerciseData] = useState({
    exerciseName: "",
    machineName: "",
    description: "",
    series: "",
    repetitions: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExerciseData({ ...exerciseData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar datos del ejercicio (incluyendo series y repeticiones)
      const ejercicioData = {
        nombre: exerciseData.exerciseName,
        descripcion: exerciseData.description,
        series: parseInt(exerciseData.series, 10),
        repeticiones: parseInt(exerciseData.repetitions, 10),
      };

      const ejercicioResponse = await fetch("http://localhost:8081/api/ejercicios/agregar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ejercicioData),
      });

      if (!ejercicioResponse.ok) {
        throw new Error("Error al guardar el ejercicio");
      }

      const ejercicioResult = await ejercicioResponse.json();
      console.log("Ejercicio guardado:", ejercicioResult);

      // Enviar datos del equipamiento
      const equipamientoData = {
        nombre: exerciseData.machineName,
      };

      const equipamientoResponse = await fetch("http://localhost:8081/api/equipamiento/agregar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(equipamientoData),
      });

      if (!equipamientoResponse.ok) {
        throw new Error("Error al guardar el equipamiento");
      }

      const equipamientoResult = await equipamientoResponse.json();
      console.log("Equipamiento guardado:", equipamientoResult);

      // Mensaje de éxito
      setSuccessMessage("¡Ejercicio y equipamiento creados exitosamente!");
      setErrorMessage("");

    } catch (error) {
      console.error("Error al guardar los datos:", error.message);
      setErrorMessage(`Error: ${error.message}`);
      setSuccessMessage("");
    }
  };


  return (
    <div className="create-exercise-container">
      <form className="exercise-form" onSubmit={handleSubmit}>
        <h2>Crear Nuevo Ejercicio</h2>

        <div className="form-grid">
          {/* Nombre del ejercicio */}
          <div className="form-group">
            <label htmlFor="exerciseName">Nombre del ejercicio</label>
            <input
              type="text"
              id="exerciseName"
              name="exerciseName"
              value={exerciseData.exerciseName}
              onChange={handleChange}
              placeholder="Ejemplo: Press de banca"
              required
            />
          </div>

          {/* Foto del ejercicio (NO FUNCIONAL) */}
          <div className="form-group">
            <label htmlFor="exercisePhoto">Foto del ejercicio</label>
            <input
              type="file"
              id="exercisePhoto"
              name="exercisePhoto"
              accept="image/*"
              disabled // Deshabilitar funcionalmente
            />
          </div>

          {/* Nombre de la máquina */}
          <div className="form-group">
            <label htmlFor="machineName">Máquina para el ejercicio</label>
            <input
              type="text"
              id="machineName"
              name="machineName"
              value={exerciseData.machineName}
              onChange={handleChange}
              placeholder="Ejemplo: Banco inclinado"
              required
            />
          </div>

          {/* Foto de la máquina (NO FUNCIONAL) */}
          <div className="form-group">
            <label htmlFor="machinePhoto">Foto de la máquina</label>
            <input
              type="file"
              id="machinePhoto"
              name="machinePhoto"
              accept="image/*"
              disabled // Deshabilitar funcionalmente
            />
          </div>

          {/* Descripción */}
          <div className="form-group">
            <label htmlFor="description">Descripción del ejercicio</label>
            <textarea
              id="description"
              name="description"
              value={exerciseData.description}
              onChange={handleChange}
              placeholder="Escribe aquí una descripción detallada del ejercicio"
              required
            />
          </div>

          {/* Número de series */}
          <div className="form-group">
            <label htmlFor="series">Número de series</label>
            <input
              type="number"
              id="series"
              name="series"
              value={exerciseData.series}
              onChange={handleChange}
              placeholder="Ejemplo: 3"
              required
            />
          </div>

          {/* Número de repeticiones */}
          <div className="form-group">
            <label htmlFor="repetitions">Número de repeticiones</label>
            <input
              type="number"
              id="repetitions"
              name="repetitions"
              value={exerciseData.repetitions}
              onChange={handleChange}
              placeholder="Ejemplo: 10"
              required
            />
          </div>
        </div>

        {/* Botón de guardar */}
        <button type="submit" className="save-btn">
          Guardar Ejercicio
        </button>
      </form>

      {/* Mensajes de estado */}
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default CreateExercises;
