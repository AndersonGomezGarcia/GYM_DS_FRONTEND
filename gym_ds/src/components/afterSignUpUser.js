import React, { useState } from 'react';
import './stylessAfterSignUpUser.css';
import healthImage from './imcImg.jpg' // Asegúrate de tener esta imagen en tu proyecto

function afterSignUpUser() {
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    goal: '',
    bodyType: '',
    imc: null,
  });

  const [showImage, setShowImage] = useState(false); // Controla la visibilidad de la imagen

  const calculateIMC = () => {
    const { weight, height } = formData;
    if (weight && height) {
      const heightInMeters = height / 100; // Convertir cm a metros
      const imc = (weight / (heightInMeters ** 2)).toFixed(2);
      setFormData({ ...formData, imc });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('Datos registrados exitosamente');
  };

  return (
    <div className="post-register-container">
  {/* Contenedor de la imagen */}
  <div className={`image-popup ${showImage ? 'active' : ''}`}>
    <img src={healthImage} alt="Guía de salud" />
  </div>

  {/* Botón para mostrar imagen */}
  <button className="info-btn" onClick={() => setShowImage(!showImage)}>
    Guía IMC
  </button>

  {/* Tarjeta del formulario */}
  <form className="form-card" onSubmit={handleSubmit}>
    <h2>Configura tu Perfil</h2>

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

    <button type="button" className="calculate-btn" onClick={calculateIMC}>
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
</div>

  );
}

export default afterSignUpUser;
