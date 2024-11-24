import React from 'react';
import './routine-choosing.css';

function RoutineList(){
    const routines = [
        {
            id: 1,
            name: "Full Body",
            description: "This routine is designed to work all the muscles in your body in a single session.",
            image: "https://www.bodybuilding.com/images/2020/xdb/originals/5-best-full-body-workouts-muscle-building.jpg"
        },
        {
            id: 2,
            name: "Upper Body",
            description: "This routine is designed to work the muscles in the upper part of your body.",
            image: "https://www.bodybuilding.com/images/2020/xdb/originals/5-best-full-body-workouts-muscle-building.jpg"
        },]
        return (
            <div className="routine-list">
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

function Rotine({routineItem}){
    return (
        <div className="routine-card">
            <img src={routineItem.image} alt={routineItem.name} />
            <h3>{routineItem.name}</h3>
            <p>{routineItem.description}</p>
        </div>
    );
}
