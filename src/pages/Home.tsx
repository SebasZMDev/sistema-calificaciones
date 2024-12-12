import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import '../styles/HomeS.css'

const Home = () => {

    const navigate = useNavigate();

    const IrACurso = () => {
        navigate('/pages/Curso')
    }

  return (
    <div>
      <NavBar />
      <div id="cursos-container">
        <div className="curso historia" onClick={()=>IrACurso()}>
          <h3>Historia</h3>
          <h4>2C - Aula 05</h4>
        </div>
        <div className="curso historia" onClick={()=>IrACurso()}>
          <h3>Historia</h3>
          <h4>1A - Aula 02</h4>
        </div>
        <div className="curso geografia" onClick={()=>IrACurso()}>
          <h3>Geografía</h3>
          <h4>4C - Aula 09</h4>
        </div>
        <div className="curso matematicas" onClick={()=>IrACurso()}>
          <h3>Matemáticas</h3>
          <h4>3B - Aula 08</h4>
        </div>
        <div className="curso fisica" onClick={()=>IrACurso()}>
          <h3>Física</h3>
          <h4>5A - Aula 12</h4>
        </div>
        <div className="curso quimica" onClick={()=>IrACurso()}>
          <h3>Química</h3>
          <h4>2B - Aula 03</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
