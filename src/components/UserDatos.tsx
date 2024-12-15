import { useEffect, useState } from 'react';
import './UserDatosS.css'
import { useNavigate } from 'react-router-dom';


const UserDatos = () => {

    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [rol, setRol] = useState('');
    const [infoDocente, setInfoDocente] = useState(false)
    const [editarDocente, setEditarDocente] = useState(false);

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
        <div style={{width:"80%",display:"grid", gridTemplateColumns:"50% 50%"}}>
          <button className='ud-btn-logout' onClick={()=>setInfoDocente(true)}>
            Actualizar Datos
          </button>
          <button className='ud-btn-logout' onClick={CerrarSesion}>
            Cerrar Sesion
          </button>
        </div>
      </div>
      {infoDocente?(
                <div className='af-general-container'>
                <div className='af-background'></div>
                <div className="af-container">
                    <img src="../.././public/media/default.jpg" alt="Foto del alumno" className="af-foto" />
                      {editarDocente?
                      (
                        <div className="af-info">
                        <input readOnly style={{fontFamily:"Nunito, serif", fontSize:"1em", marginLeft:"20px"}} value="Alegre Jesus Ninaquiste"/>
                        <div><span style={{fontFamily:"Nunito, serif", fontSize:"0.8em"}}>Código:</span><input readOnly value="i20236969"/></div>
                        <div><span style={{fontFamily:"Nunito, serif", fontSize:"0.8em"}}>DNI:</span><input readOnly value="12345678"/></div>
                        <div><span style={{fontFamily:"Nunito, serif", fontSize:"0.8em"}}>Correo:</span><input readOnly value="soycremacorazon@hotmail.com"/></div>
                        <div><span style={{fontFamily:"Nunito, serif", fontSize:"0.8em"}}>Numero:</span><input readOnly value="969 969 111"/></div>
                        <div className="af-actions">
                           <button className="af-button af-edit"  onClick={()=>setEditarDocente(false)}>Guardar</button>
                           <button className="af-button af-close" onClick={()=>setInfoDocente(false)}>Cerrar</button>
                        </div>
                       </div>
                      )
                      :(
                        <div className="af-info">
                          <h2>Jesus Alegre Ninaquispe</h2>
                          <p><strong>Código:</strong> i20236969</p>
                          <p><strong>DNI:</strong> 12345678</p>
                          <p><strong>Rol:</strong> C</p>
                          <p><strong>Correo:</strong> soycremacorazon@hotmail.com</p>
                          <p><strong>Numero:</strong>969 969 111</p>
                          <div className="af-actions">
                             <button className="af-button af-edit"  onClick={()=>setEditarDocente(true)}>Editar</button>
                             <button className="af-button af-close" onClick={()=>setInfoDocente(false)}>Cerrar</button>
                          </div>
                         </div>
                      )}

                </div>
            </div>
      ):(null)}
</div>
    )
}

export default UserDatos;