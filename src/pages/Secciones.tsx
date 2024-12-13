import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../styles/SeccionesS.css";

const Secciones = () => {
  const navigate = useNavigate();
  const IrASeccion = () => {
    navigate("/pages/EstaSeccion");
  };

  return (
    <div>
      <NavBar />
      <div className="scc-container">
        <div className="scc-section" onClick={IrASeccion}>
          <h2 className="scc-heading">Sección 1</h2>
          <p className="scc-paragraph">Salón: 101</p>
          <p className="scc-paragraph">Grado: 1° Primaria</p>
        </div>

        <div className="scc-section" onClick={IrASeccion}>
          <h2 className="scc-heading">Sección 2</h2>
          <p className="scc-paragraph">Salón: 102</p>
          <p className="scc-paragraph">Grado: 2° Primaria</p>
        </div>

        <div className="scc-section" onClick={IrASeccion}>
          <h2 className="scc-heading">Sección 3</h2>
          <p className="scc-paragraph">Salón: 103</p>
          <p className="scc-paragraph">Grado: 3° Primaria</p>
        </div>

        <div className="scc-section" onClick={IrASeccion}>
          <h2 className="scc-heading">Sección 4</h2>
          <p className="scc-paragraph">Salón: 104</p>
          <p className="scc-paragraph">Grado: 4° Primaria</p>
        </div>

        <div className="scc-section" onClick={IrASeccion}>
          <h2 className="scc-heading">Sección 5</h2>
          <p className="scc-paragraph">Salón: 105</p>
          <p className="scc-paragraph">Grado: 5° Primaria</p>
        </div>
      </div>
    </div>
  );
};

export default Secciones;
