import React from "react";
import { useState } from 'react';
import './stylesCreateExercises.css'; // Archivo CSS para estilos

function CreateExercises() {
  const [exerciseData, setExerciseData] = useState({
    exerciseName: '',
    exercisePhoto: null,
    machineName: '',
    machinePhoto: null,
    description: '',
    series: '',
    repetitions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExerciseData({ ...exerciseData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setExerciseData({ ...exerciseData, [name]: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del ejercicio:', exerciseData);
    alert('Ejercicio creado exitosamente');
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

          {/* Foto del ejercicio */}
          <div className="form-group">
            <label htmlFor="exercisePhoto">Foto del ejercicio</label>
            <input
              type="file"
              id="exercisePhoto"
              name="exercisePhoto"
              accept="image/*"
              onChange={handleFileChange}
              required
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

          {/* Foto de la máquina */}
          <div className="form-group">
            <label htmlFor="machinePhoto">Foto de la máquina</label>
            <input
              type="file"
              id="machinePhoto"
              name="machinePhoto"
              accept="image/*"
              onChange={handleFileChange}
              required
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
    </div>
  );
}

export default CreateExercises;
