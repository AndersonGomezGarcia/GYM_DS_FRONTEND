import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import SignupAndProfile from './components/signUp';
import RoutineChoosing from './components/routineChoosing';
import RoutineProgress from './components/routineProgress';
import Home from './components/home';
import CreateExercises from './components/createExercises'; // Importa el componente
import UserHome from './components/userHome';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Página de inicio de sesión */}
          <Route path="/signup" element={<SignupAndProfile />} /> {/* Página de registro */}
          <Route path="/routineChoosing" element={<RoutineChoosing />} /> {/* Página post-registro */}
          <Route path='/routineProgress' element={<RoutineProgress />} /> {/* Página de progreso de rutina */}
          <Route path='/Home' element={<Home />} /> {/* Página de progreso de rutina */}
          <Route path="/createExercises" element={<CreateExercises />} /> {/* Página para crear ejercicios */}
          <Route path="/userHome" element={<UserHome/>} /> {/*Pagina principal del usuario*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

