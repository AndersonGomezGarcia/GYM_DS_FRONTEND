import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signUp';
import AfterSignUpUser from './components/afterSignUpUser';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
          <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} /> {Login}
        <Route path="/signup" element={<Signup />} /> {Signup}
      </Routes>
    </Router>
=======
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Página de inicio de sesión */}
          <Route path="/signup" element={<Signup />} /> {/* Página de registro */}
          <Route path="/afterSignUpUser" element={<AfterSignUpUser />} /> {/* Página post-registro */}
        </Routes>
      </Router>
>>>>>>> origin/main
    </div>
  );
}

export default App;
