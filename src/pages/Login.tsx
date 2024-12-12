import React from "react";
import "../styles/LoginS.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const [userInput, setUserInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [saul, setSaul] = useState(false)
  const [errorMsg, setErrorMsg] = useState('');
  const [olvidaste, setOlvidaste] = useState(false);
   const userInputChangue = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  }

  const passwordInputChangue = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  }

  const ValidarDatos = () => {
      localStorage.setItem("user", JSON.stringify(userInput));
      if (userInput == "Nappan" || userInput == "Jara") {
        setErrorMsg('')
        const rol = "docente";
        localStorage.setItem("rol", JSON.stringify(rol));
      }else if(userInput == "Alegre" || userInput == "Frank")  {
        setErrorMsg('')
        const rol = "encargado"
        localStorage.setItem("rol", JSON.stringify(rol));
      }else {
        setErrorMsg('Credenciales incorrectas')
        return
      }
      navigate('/pages/Home')
  }

  const Saul = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSaul(true);
    setTimeout(() => {
      setSaul(false);
    }, 1000);
  };


    return (
        <div className="login">
        {olvidaste?
          (<form className="login-form">
            <div className="login-input-group"></div>
              <label className="login-label">Ingrese un correo para recuperar la contraseña</label>
              <input className="login-input"/>
              <div style={{height:"20px"}}>
              </div>
              <button className="login-button" onClick={(e)=>Saul(e)}>Enviar codigo</button>
              <h5 style={{paddingTop:"20px"}} className="login-olvidaste" onClick={()=>setOlvidaste(false)}>Regresar a login</h5>
            <div/>
          </form>)
          :(
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
            <h4 style={{color:"red", textAlign:"center", paddingBottom:"10px"}}>{errorMsg}</h4>
            <h5 className="login-olvidaste" onClick={()=>setOlvidaste(true)}>Olvidaste tu contraseña?</h5>
            <button type="button" className="login-button" onClick={ValidarDatos}>Ingresar</button>
          </form>)
        }
        {saul?(<div style={{position:"absolute",}}>
          <img src="../.././public/media/waa.png" />
        </div>):(null)}
      </div>
    )
};

export default Login;
