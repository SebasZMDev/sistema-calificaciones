import './NavBarS.css'
import { useNavigate } from 'react-router-dom';


const NavBar = () => {

    const navigate = useNavigate();

    const IrACurso = () => {
        navigate('/pages/Curso')
    }
    
    return (
        <nav className="nav">
            <img src="../.././public/media/logo.png" className="nav-logo" onClick={()=>IrACurso}/>
            <div style={{textAlign: "end"}}>
            <h3>Bienvenido docente</h3>
        </div>
    </nav>
    )
}

export default NavBar;