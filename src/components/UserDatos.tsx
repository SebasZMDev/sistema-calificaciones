import { useEffect, useState } from 'react';
import './UserDatosS.css'
import { useNavigate } from 'react-router-dom';


const UserDatos = () => {

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

    const CerrarSesion = () => {
        navigate('/pages/Login')
    }

    return (
  <div className="ud-general-container">
      <img style={{position:"absolute", width:"100%", height:"70%"}} src='../.././public/media/landscape.png'/>
      <div className='ud-sub-container'>
        <img src="../.././public/media/default.jpg" className="ud-pfp" alt="Foto de perfil" />
        <div style={{display:"grid", gridTemplateRows: "60% 40%", paddingLeft: "10px"}}>
            <h3 className="ud-user">
            Usuario: {nombre}
            </h3>
            <h4 className="ud-rol">
            Rol: {rol}
            </h4>
        </div>
        <button className='ud-btn-logout' onClick={CerrarSesion}>
          Cerrar Sesion
        </button>
      </div>
</div>
    )
}

export default UserDatos;