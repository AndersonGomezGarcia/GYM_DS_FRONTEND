import React, { useState } from "react";
import "./homeRoutines.css";
import { Link } from "react-router-dom";
import { Routine } from "./component";
import { Menu } from "./menu";
function HomeRoutines() {
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const routines = [
    { id: 1, name: "Full Body", description: "This routine is designed to work all the muscles in your body in a single session.", image: "img/rutina.webp" },
    { id: 2, name: "Upper Body", description: "This routine focuses on the muscles of the upper body, including chest, back, shoulders, and arms.", image: "img/rutina.webp" },
    { id: 3, name: "Lower Body", description: "This routine targets the muscles of the lower body, including legs, glutes, and calves.", image: "img/rutina.webp" },
    { id: 4, name: "Cardio", description: "This routine is designed to improve cardiovascular endurance and burn calories.", image: "img/rutina.webp" },
    { id: 5, name: "Strength Training", description: "This routine focuses on building strength through weightlifting and resistance exercises.", image: "img/rutina.webp" },
    { id: 6, name: "Flexibility", description: "This routine aims to improve flexibility and range of motion through stretching exercises.", image: "img/rutina.webp" },
    { id: 7, name: "HIIT", description: "This High-Intensity Interval Training routine is designed to maximize calorie burn in a short period.", image: "img/rutina.webp" },
    { id: 8, name: "Core", description: "This routine targets the muscles of the core, including abs, obliques, and lower back.", image: "img/rutina.webp" },
    { id: 9, name: "Yoga", description: "This routine focuses on improving flexibility, balance, and mental clarity through yoga poses.", image: "img/rutina.webp" },
    { id: 10, name: "Pilates", description: "This routine aims to strengthen the core and improve overall body alignment through Pilates exercises.", image: "img/rutina.webp" },
  ];

  const handleRoutineClick = (routine) => {
    setSelectedRoutine(routine);
  };

  const closeModal = () => {
    setSelectedRoutine(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRoutines = routines.filter((routine) =>
    routine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="homeRoutines">
      <Menu />
      <section className="header">
        <h1 className="TitleRoutines">Descubre como mejorar tu cuerpo</h1>
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
          <div className="RoutineList">
            {filteredRoutines.map((routine) => (
              <div
                key={routine.id}
                onClick={() => handleRoutineClick(routine)}
              >
                <Routine routine={routine} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedRoutine && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedRoutine.name}</h2>
            <p>{selectedRoutine.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeRoutines;
