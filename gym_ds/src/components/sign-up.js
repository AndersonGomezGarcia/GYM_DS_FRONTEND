import React from "react";
import './styles-signup.css';
import referenceImage from './sign-up-img.jpg';
import { Link } from "react-router-dom";

function Signup(){
    return(
        <div className="form-container">
        <h2>Registro de Usuario</h2>
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
        <div className="sign-up-img-container">
            <img src={referenceImage} alt="Reference"></img>
          </div>
          <div className="link">
        ¿Ya tienes cuenta? <Link to="./login.js">Inicia sesión aquí</Link> {/* Enlace de regreso al Login */}
      </div>
      </div>
    );
  };
export default Signup