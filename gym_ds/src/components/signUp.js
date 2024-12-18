import React, { useState } from "react";
import "./stylesSignUp.css";
import referenceImage from "./img/sign-up-img.jpg";
import healthImage from "./img/imcImg.jpg";

function SignupAndProfile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    weight: 0,
    height: 0,
    goal: "",
    bodyType: "",
    imc: 0,
  });

  const [step, setStep] = useState(1); // Controla qué formulario se muestra
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showImage, setShowImage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateIMC = () => {
    const { weight, height } = formData;
    if (weight && height) {
      const heightInMeters = height / 100;
      const imc = (weight / heightInMeters ** 2).toFixed(2);
      setFormData({ ...formData, imc });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8081/api/usuarios/registro", //cambiar local host a 8080 o su respectivo puerto para que funcione.
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: formData.name,
            email: formData.email,
            contrasena: formData.password,
            peso: formData.weight,
            altura: formData.height,
            objetivo: formData.goal,
            tipo_anatomia: formData.bodyType,
            imc: formData.imc,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage("Usuario registrado exitosamente: " + data.nombre);
        setErrorMessage("");
      } else {
        const error = await response.text();
        setErrorMessage(error);
        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      setErrorMessage(
        "Ocurrió un error al intentar registrar. Inténtalo de nuevo."
      );
      setSuccessMessage("");
    }
  };

  return (
    <div className="signup-page">
      <div className="image-container">
        <img src={referenceImage} alt="Registro" />
      </div>

      <div className="form-container">
        {step === 1 && (
          <>
            <h2>Registro de Usuario</h2>
            <p className="subtitle">Crea una cuenta para comenzar</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStep(2);
              }}
            >
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
              <button type="submit">Continuar</button>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <h2>Configura tu Perfil</h2>
            <button
              className="info-btn"
              onClick={() => setShowImage(!showImage)}
            >
              Guía IMC
            </button>
            {showImage && (
              <div className="image-popup">
                <img src={healthImage} alt="Guía de salud" />
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <label htmlFor="weight">Peso (kg)</label>
              <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="Ingresa tu peso"
                required
              />

              <label htmlFor="height">Altura (cm)</label>
              <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder="Ingresa tu altura"
                required
              />

              <button
                type="button"
                className="calculate-btn"
                onClick={calculateIMC}
              >
                Calcular IMC
              </button>

              {formData.imc && (
                <p className="imc-result">
                  Tu IMC es: <strong>{formData.imc}</strong>
                </p>
              )}

              <label htmlFor="goal">Objetivo</label>
              <select
                id="goal"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Selecciona tu objetivo
                </option>
                <option value="adelgazar">Adelgazar</option>
                <option value="volumen">Volumen</option>
                <option value="mantener">Mantener</option>
              </select>

              <label htmlFor="bodyType">Tipo de cuerpo</label>
              <select
                id="bodyType"
                name="bodyType"
                value={formData.bodyType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Selecciona tu tipo de cuerpo
                </option>
                <option value="mesomorfo">Mesomorfo</option>
                <option value="endomorfo">Endomorfo</option>
                <option value="ectomorfo">Ectomorfo</option>
              </select>

              <button type="submit" className="submit-btn">
                Guardar Datos
              </button>
            </form>
          </>
        )}

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
}

export default SignupAndProfile;
