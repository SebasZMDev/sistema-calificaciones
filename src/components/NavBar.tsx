import { useEffect, useState } from 'react';
import './NavBarS.css'
import { useNavigate } from 'react-router-dom';


const NavBar = () => {

    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [rol, setRol] = useState('');

    useEffect(() => {
        const nameStorage = localStorage.getItem('user');
        const rolStorage = localStorage.getItem('rol');
        if (nameStorage && rolStorage) {
          try {
            const parsedName = JSON.parse(nameStorage);
            const parsedRol = JSON.parse(rolStorage);
            setNombre(parsedName);
            setRol(parsedRol);
          } catch (error) {
            console.error('Error parsing user information:', error);
          }
        }
      }, [nombre, rol]);


    const IrAHome = () => {
      navigate('/pages/Home')
  }

    return (
        <nav className="nav">
            <img src="../.././public/media/logo.png" className="nav-logo" onClick={IrAHome}/>
            <div style={{textAlign: "end"}}>
            <h3>Bienvenido <span style={{color:"blue"}}>{rol}</span> <span style={{color:"green", fontWeight:"800"}}>{nombre}</span></h3>
        </div>
    </nav>
    )
}

export default NavBar;