import React, { useState } from "react";
import './stylesSignUp.css';
import { Link, useNavigate } from "react-router-dom";
import referenceImage from './sign-up-img.jpg'; 

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de éxito de registro
    console.log('Registro exitoso:', formData);

    // Navega a la página de configuración del perfil
    navigate('/after-signup');
  };

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
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Ingresa tu nombre" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <label htmlFor="email">Correo Electrónico</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Ingresa tu correo" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <label htmlFor="password">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Ingresa tu contraseña" 
            value={formData.password}
            onChange={handleChange}
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
