import React from "react";
import "../styles/LoginS.css"
import { useState } from "react";

const Login = () => {
  
  const [userInput, setUserInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const userInputChangue = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  }

  const passwordInputChangue = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  }

  const ValidarDatos = () => {
      localStorage.setItem("user",userInput)
      
  }

    return (
        <div className="login">
        <form className="login-form">
          <h1 className="login-title">Iniciar Sesión</h1>
          <div className="login-input-group">
            <label className="login-label">Usuario</label>
            <input type="email" id="userInput" className="login-input" required onChange={userInputChangue}/>
          </div>
          <div className="login-input-group">
            <label className="login-label">Contraseña</label>
            <input type="password" id="password" className="login-input" required onChange={passwordInputChangue}/>
          </div>
          <button type="button" className="login-button">Ingresar</button>
        </form>
      </div>
    )
};

export default Login;
