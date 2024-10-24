import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Inicializamos useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar validación o autenticación real.
    
    // Redirigir a la página de Certificates después de hacer login
    navigate('/certificates'); // Redirige a la ruta '/certificates'
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email" className={email ? 'filled' : ''}>
            Email
          </label>
        </div>

        <div className="input-container">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password" className={password ? 'filled' : ''}>
            Password
          </label>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

//este es el bueno 