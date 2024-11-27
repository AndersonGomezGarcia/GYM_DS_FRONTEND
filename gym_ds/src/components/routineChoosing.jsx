import React from "react";
import "./routineChoosing.css";

const routines = [
  {
    id: 1,
    name: "Full Body",
    description:
      "This routine is designed to work all the muscles in your body in a single session.",
    image:
      "https://www.bodybuilding.com/images/2020/xdb/originals/5-best-full-body-workouts-muscle-building.jpg",
  },
  {
    id: 2,
    name: "Upper Body",
    description:
      "This routine is designed to work the muscles in the upper part of your body.",
    image:
      "https://www.bodybuilding.com/images/2020/xdb/originals/5-best-full-body-workouts-muscle-building.jpg",
  },
  {
    id: 4,
    name: "Upper Body",
    description:
      "This routine is designed to work the muscles in the upper part of your body.",
    image:
      "https://www.bodybuilding.com/images/2020/xdb/originals/5-best-full-body-workouts-muscle-building.jpg",
  },
  {
    id: 3,
    name: "Upper Body",
    description:
      "This routine is designed to work the muscles in the upper part of your body.",
    image:
      "https://www.bodybuilding.com/images/2020/xdb/originals/5-best-full-body-workouts-muscle-building.jpg",
  },
  {
    id: 5,
    name: "Upper Body",
    description:
      "This routine is designed to work the muscles in the upper part of your body.",
    image:
      "https://www.bodybuilding.com/images/2020/xdb/originals/5-best-full-body-workouts-muscle-building.jpg",
  },
  {
    id: 6,
    name: "Upper Body",
    description:
      "This routine is designed to work the muscles in the upper part of your body.",
    image:
      "https://www.bodybuilding.com/images/2020/xdb/originals/5-best-full-body-workouts-muscle-building.jpg",
  },
];

function RoutineList() {
  return (
    <div className="routine-list">
      <h1>Lista de rutinas existentes</h1>
      {routines.map((routine) => (
        <div key={routine.id} className="routine-card">
          <img src={routine.image} alt={routine.name} />
          <h3>{routine.name}</h3>
          <p>{routine.description}</p>
        </div>
      ))}
    </div>
  );
}

function Routine({ routineItem }) {
  return (
    <div className="routine-card">
      <img src={routineItem.image} alt={routineItem.name} />
      <h3>{routineItem.name}</h3>
      <p>{routineItem.description}</p>
    </div>
  );
}

function RoutineForm() {
  return (
    <div className="routine-form">
        <h1 className="form">Create a new routine</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label> <br />
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label> <br />
          <textarea id="description" name="descriptioRn" required />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label> <br />
          <input type="file" id="image" name="image" required />
        </div>
        <button type="submit">Create Routine</button>
      </form>
    </div>
  );
}

function routineChoosing() {
  return (
    <div className="routine-choosing">
      <p>hola</p>
      <RoutineList routines={routines} />
      <RoutineForm />
    </div>
  );
}

export default routineChoosing;
