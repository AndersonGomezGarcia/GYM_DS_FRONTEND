import React from "react";
import "./component.css";


export function Routine({ routine }) {
  return (
    <div className="routine-card">
      <img src={routine.image} alt={routine.name} />
      <h3>{routine.name}</h3>
      <p>{routine.description}</p>
    </div>
  );
}


function RoutineList({ routines }) {
    return (
        <div className="routine-list">
        <h1>Lista de rutinas existentes</h1>
        {routines.map((routine) => (
            <Routine key={routine.id} routine={routine} />
        ))}
        </div>
    );
    
}