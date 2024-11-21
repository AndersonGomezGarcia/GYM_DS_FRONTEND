import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signUp';
import afterSignUpUser from './components/afterSignUpUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Página de inicio de sesión */}
          <Route path="/signup" element={<Signup />} /> {/* Página de registro */}
          <Route path="/after-signup" element={<afterSignUpUser />} /> {/* Página post-registro */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
