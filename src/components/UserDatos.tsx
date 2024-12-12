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

    const IrACurso = () => {
        navigate('/pages/Curso')
    }

    return (
<div className="ud-general-container">
    <img src="../.././public/media/default.jpg" className="ud-pfp" alt="Foto de perfil" />
    <div className="ud-text-display">
        <h3 className="ud-user">
            Usuario: {nombre}
        </h3>
        <h4 className="ud-rol">
            Rol: {rol}
        </h4>
    </div>
</div>
    )
}

export default UserDatos;