import React from 'react';
import './login.css';
import referenceImage from './gym.jpg'; // Asegúrate de tener una imagen de referencia en tu proyecto

function Login() {
  return (
    <div className="login-container">
      <div className="form-container">
        <h2>Welcome to the gym:</h2>
        <h3>Please Register or Login</h3>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label> <br />
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label> <br />
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="image-container">
        <img src={referenceImage} alt="Reference" />
      </div>
    </div>
  );
}

export default Login;