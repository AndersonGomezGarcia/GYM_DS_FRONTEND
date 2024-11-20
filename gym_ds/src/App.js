import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/sign-up';
import PostRegisterForm from './components/afterSignUpUser';

function App() {
  return (
    <div className="App">
          <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {Login}
        <Route path="/signup" element={<Signup />} /> {Signup}
      </Routes>
    </Router>
    </div>
  );
}

export default App;