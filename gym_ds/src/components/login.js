import React, { useState } from "react";
import "./login.css";
import referenceImage from "./img/gym.jpg";
import { Link, useNavigate } from "react-router-dom";
import Signup from "./signUp";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Para redirigir después de iniciar sesión

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    try {
      const response = await fetch("http://localhost:8081/api/usuarios/login", { //Cambiar puerto a 8080 o su respectivo puerto para que funcione.
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, contrasena: password }), // Enviar datos
      });

      if (response.ok) {
        const data = await response.text(); // Procesar respuesta del backend
        alert(data); // Mostrar mensaje de éxito
        navigate("/home"); // Redirigir al home después del login (ajustar según tu ruta)
      } else {
        const error = await response.text();
        setErrorMessage(error); // Mostrar mensaje de error del backend
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setErrorMessage("Ocurrió un error al intentar iniciar sesión. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Welcome to the gym:</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label> <br />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label> <br />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Mostrar errores */}
        <div className="link-sign_up">
          ¿No tienes una cuenta? <Link to="/signup">Regístrate aquí</Link> {Signup}
        </div>
      </div>
      <div className="image-container">
        <img src={referenceImage} alt="Reference" />
      </div>
    </div>
  );
}

export default Login;
