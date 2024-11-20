import React from "react";
import './styles-signup.css';
import { Link } from "react-router-dom";
import referenceImage from './sign-up-img.jpg'; 

function Signup() {
  return (
    <div className="signup-page">
      {/* Contenedor de la imagen */}
      <div className="image-container">
        <img src={referenceImage} alt="Registro" />
      </div>
      {/* Contenedor del formulario */}
      <div className="form-container">
        <h2>Registro de Usuario</h2>
        <p className="subtitle">Crea una cuenta para comenzar</p>
        <form action="/register" method="POST">
          <label htmlFor="name">Nombre</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Ingresa tu nombre" 
            required 
          />
          <label htmlFor="email">Correo Electrónico</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Ingresa tu correo" 
            required 
          />
          <label htmlFor="password">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Ingresa tu contraseña" 
            required 
          />
          <button type="submit">Registrar</button>
        </form>
        <div className="link">
          ¿Ya tienes cuenta? <Link to="/">Inicia sesión aquí</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
