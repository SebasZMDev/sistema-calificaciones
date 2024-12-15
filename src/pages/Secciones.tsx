import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../styles/SeccionesS.css";
import { useState } from "react";

const Secciones = () => {
  const navigate = useNavigate();
  const IrASeccion = (value:string) => {
    navigate("/pages/EstaSeccion");
    localStorage.setItem("grado", JSON.stringify(value));
  };

  return (
    <div>
      <NavBar />
<div className="sex-container">
  <select className="sex-select">
    <option value="">Curso</option>
    <option value="matematicas">Matemáticas</option>
    <option value="ciencias">Ciencias</option>
    <option value="historia">Historia</option>
    <option value="lenguaje">Lenguaje</option>
    <option value="arte">Arte</option>
    <option value="educacion-fisica">Educación Física</option>
  </select>

  <select className="sex-select">
    <option value="">Grado</option>
    <option value="primero">Primero</option>
    <option value="segundo">Segundo</option>
    <option value="tercero">Tercero</option>
    <option value="cuarto">Cuarto</option>
    <option value="quinto">Quinto</option>
  </select>

  <select className="sex-select">
    <option value="">Sección</option>
    <option value="a">A</option>
    <option value="b">B</option>
    <option value="c">C</option>
  </select>
</div>


      <div className="scc-container">
      <div className="scc-section" onClick={() => { IrASeccion("1")}}>
          <h2 className="scc-heading">Sección 1</h2>
          <p className="scc-paragraph">Salón: 101</p>
          <p className="scc-paragraph">Grado: 1° Primaria</p>
        </div>

        <div className="scc-section" onClick={() => { IrASeccion("2")}}>
          <h2 className="scc-heading">Sección 2</h2>
          <p className="scc-paragraph">Salón: 102</p>
          <p className="scc-paragraph">Grado: 2° Primaria</p>
        </div>

        <div className="scc-section" onClick={() => { IrASeccion("3")}}>
          <h2 className="scc-heading">Sección 3</h2>
          <p className="scc-paragraph">Salón: 103</p>
          <p className="scc-paragraph">Grado: 3° Primaria</p>
        </div>

        <div className="scc-section" onClick={() => { IrASeccion("4")}}>
          <h2 className="scc-heading">Sección 4</h2>
          <p className="scc-paragraph">Salón: 104</p>
          <p className="scc-paragraph">Grado: 4° Primaria</p>
        </div>

        <div className="scc-section" onClick={() => { IrASeccion("5")}}>
          <h2 className="scc-heading">Sección 5</h2>
          <p className="scc-paragraph">Salón: 105</p>
          <p className="scc-paragraph">Grado: 5° Primaria</p>
        </div>
      </div>
    </div>
  );
};

export default Secciones;
