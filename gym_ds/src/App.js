import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/sign-up';

function App() {
  return (
    <div className="App">
          <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} /> {Login}
        <Route path="/signup" element={<Signup />} /> {Signup}
      </Routes>
    </Router>
    </div>
  );
}

export default App;