import { useState } from "react";
import NavBar from "../components/NavBar";
import '../styles/CursoS.css'
import { useNavigate } from "react-router-dom";

const Curso = () => {

  const Estudiantes = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
  ];

  const [guardado, setGuardado] = useState(false);
  const navigate = useNavigate();
  const IrACursoList = () => {
    navigate('/pages/CursoList')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, estudianteIndex: number, calificacionIndex: number) => {
    const value = Number(e.target.value);
    if (value > 20) {
      alert("La calificación no puede ser mayor a 20");
      e.target.value = "";
      return;
    }

    console.log(`Estudiante ${estudianteIndex}, Calificación ${calificacionIndex}: ${value}`);
  };

  return (
    <div>
      <NavBar />
      <div id="estudiantes-container">
        <h2>Lista de Estudiantes</h2>
        <table>
          <thead>
            <tr>
              <th>Estudiante</th>
              <th>Nota 1</th>
              <th>Nota 2</th>
              <th>Nota 3</th>
              <th>Nota 4</th>
            </tr>
          </thead>
          <tbody>
            {Estudiantes.map((estudiante, index) => (
              <tr key={index}>
                <td>Estudiante {estudiante}</td>
                <td>
                  <input onChange={(e)=>handleInputChange(e,index,1)} type="number" min="0" max="20" />
                </td>
                <td>
                  <input onChange={(e)=>handleInputChange(e,index,2)} type="number" min="0" max="20" />
                </td>
                <td>
                  <input onChange={(e)=>handleInputChange(e,index,3)} type="number" min="0" max="20" />
                </td>
                <td>
                  <input onChange={(e)=>handleInputChange(e,index,4)} type="number" min="0" max="20" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{width:"50%", display:"grid", gridTemplateColumns:"33% 33% 33%", margin:"0 auto"}}>
          <button style={{margin:"20px", transform:"scaleY(1.3)", backgroundColor:"skyblue"}} onClick={IrACursoList}>Volver</button>
          {guardado?(<button style={{margin:"20px", backgroundColor:"gray", transform:"scaleY(1.3)"}}>Guardado</button>):(<button style={{margin:"20px", transform:"scaleY(1.3)"}} onClick={()=>setGuardado(true)}>Guardar</button>)}
          {guardado?(<button style={{margin:"20px", transform:"scaleY(1.3)"}}  onClick={()=>setGuardado(false)}>Editar</button>):(<button style={{margin:"20px", backgroundColor:"gray", transform:"scaleY(1.3)"}}>Guardar</button>)}
        </div>
      </div>
    </div>
  );
};

export default Curso;
