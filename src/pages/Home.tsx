import NavBar from "../components/NavBar";
import '../styles/HomeS.css'
import UserDatos from "../components/UserDatos";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [rol, setRol] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const rolStorage = localStorage.getItem('rol');
        if (rolStorage) {
          try {
            const parsedRol = JSON.parse(rolStorage);
            setRol(parsedRol);
          } catch (error) {
            console.error('Error parsing user information:', error);
          }
        }
      }, [rol]);

      const toCursoList = () => {
        navigate('/pages/CursoList')
      }
  return (
    <div>
      <NavBar />
      <UserDatos/>
      {rol=="docente"?(
        <div className="rol-container">
          <h4 className="rol-title" onClick={toCursoList}>Registrar Calificaciones</h4>
      </div>
      ):(
        <div className="rol-container">
          <h4 className="rol-title">Envio de Libretas</h4>
        </div>
      )}
    </div>
  );
};

export default Home;
