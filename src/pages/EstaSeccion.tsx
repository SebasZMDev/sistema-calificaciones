import { useNavigate } from "react-router-dom";
import "../styles/EstaSeccionS.css";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";


const EstaSeccion = () => {
  const [esteGrado, setEsteGrado] = useState("");
  const [alumnoInfo, setAlumnoInfo] = useState(false);
  const [editarAlumno, setEditarAlumno] = useState(false);
  const [verLibreta, setVerLibreta] = useState(false);
  const navigate = useNavigate();



  const data = [
    {
      id: "i202030294",
      dni: "12345678",
      nombreCompleto: "Jesus Alegre Ninaquispe",
      nivel: "Primaria",
      grado: { esteGrado },
      seccion: "A",
      promedioGeneral: "",
    },
    {
      id: "i202030295",
      dni: "44556678",
      nombreCompleto: "Santos Medina Dios",
      nivel: "Primaria",
      grado: { esteGrado },
      seccion: "B",
      promedioGeneral: "",
    },
    {
      id: "i202030296",
      dni: "44556679",
      nombreCompleto: "Ana María Gómez",
      nivel: "Primaria",
      grado: { esteGrado },
      seccion: "C",
      promedioGeneral: "",
    },
    {
      id: "i202030297",
      dni: "44556680",
      nombreCompleto: "Pedro Alberto Díaz",
      nivel: "Primaria",
      grado: { esteGrado },
      seccion: "A",
      promedioGeneral: "",
    },
    {
      id: "i202030298",
      dni: "44556681",
      nombreCompleto: "Sofía Isabel Ramos",
      nivel: "Primaria",
      grado: { esteGrado },
      seccion: "B",
      promedioGeneral: "",
    },
    {
      id: "i202030299",
      dni: "44556682",
      nombreCompleto: "Ricardo Antonio Silva",
      nivel: "Primaria",
      grado: { esteGrado },
      seccion: "C",
      promedioGeneral: "",
    },
    {
      id: "i202030300",
      dni: "44556683",
      nombreCompleto: "María José Hernández",
      nivel: "Primaria",
      grado: { esteGrado },
      seccion: "A",
      promedioGeneral: "",
    },
    {
      id: "i202030301",
      dni: "44556684",
      nombreCompleto: "Juan Carlos González",
      nivel: "Primaria",
      grado: { esteGrado },
      seccion: "B",
      promedioGeneral: "",
    },
    {
      id: "i202030302",
      dni: "44556685",
      nombreCompleto: "Valeria Beatriz López",
      nivel: "Primaria",
      grado: { esteGrado },
      seccion: "A",
      promedioGeneral: "",
    },
    {
      id: "i202030303",
      dni: "44556686",
      nombreCompleto: "Luis Enrique Martínez",
      nivel: "Primaria",
      grado: { esteGrado },
      seccion: "C",
      promedioGeneral: "",
    },
    {
      id: "i202030304",
      dni: "44556687",
      nombreCompleto: "Isabella Andrea Pérez",
      nivel: "Primaria",
      grado: { esteGrado },
      seccion: "A",
      promedioGeneral: "",
    },
    {
      id: "i202030305",
      dni: "44556688",
      nombreCompleto: "Felipe Andrés Vega",
      nivel: "Primaria",
      grado: { esteGrado },
      seccion: "B",
      promedioGeneral: "",
    },
    {
      id: "i202030306",
      dni: "44556689",
      nombreCompleto: "Eva Lucía Ramírez",
      nivel: "Primaria",
      grado: { esteGrado },
      seccion: "A",
      promedioGeneral: "",
    },
    {
      id: "i202030307",
      dni: "44556690",
      nombreCompleto: "José Luis Martínez",
      nivel: "Primaria",
      grado: { esteGrado },
      seccion: "B",
      promedioGeneral: "",
    },
    {
      id: "i202030308",
      dni: "44556691",
      nombreCompleto: "Elena María García",
      nivel: "Primaria",
      grado: { esteGrado },
      seccion: "A",
      promedioGeneral: "",
    },
    {
      id: "i202030309",
      dni: "44556692",
      nombreCompleto: "Manuel Alejandro Torres",
      nivel: "Primaria",
      grado: { esteGrado },
      seccion: "B",
      promedioGeneral: "",
    },
    {
      id: "i202030310",
      dni: "44556693",
      nombreCompleto: "Catalina Verónica Soto",
      nivel: "Primaria",
      grado: { esteGrado },
      seccion: "A",
      promedioGeneral: "",
    },
    {
      id: "i202030311",
      dni: "44556694",
      nombreCompleto: "Fernando José García",
      nivel: "Primaria",
      grado: { esteGrado },
      seccion: "C",
      promedioGeneral: "",
    },
  ];

  const [Listado, setListado] = useState(false);

  useEffect(() => {
    const gradoStorage = localStorage.getItem('grado');
    if (gradoStorage) {
      try {
        const parsedGrado = JSON.parse(gradoStorage);
        setEsteGrado(parsedGrado);
      } catch (error) {
        console.error('Error parsing user information:', error);
      }
    }
  }, [esteGrado]);



  const IrASecciones = () => {
    navigate("/pages/Secciones");
  };
  return (
    <>
      <NavBar />
      <div className="table-container">
        <div className="filter-container">
          <input type="text" placeholder="Código de estudiante" />
          <input type="text" placeholder="DNI" />
          <input type="text" placeholder="Codigo" />
          <input type="date" placeholder="Fecha desde" />
          <input type="date" placeholder="Fecha hasta" />
          <button>Consultar</button>
        </div>
        <div
          className="filter-container"
          style={{
            width: "50%",
            margin: "30px auto",
            transform: "scale(1.25)",
          }}
        >
          <button onClick={IrASecciones}>Volver</button>
          <button onClick={()=>setListado(true)}>Generar Reportes</button>
          <button>Guardar</button>
          <button>Seleccionar Todo</button>
          <button>Enviar</button>
        </div>


        <table className="custom-table">
          <thead>
            <tr>
              <th>ID Estudiante</th>
              <th>DNI</th>
              <th>Nombre Completo</th>
              <th>Nivel</th>
              <th>Grado</th>
              <th>Sección</th>
              <th>Promedio General</th>
              <th>Seleccionar</th>
              <th>Formato</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              const randomValue = ["A", "B", "C"][
                Math.floor(Math.random() * 3)
              ];
              const randomNumber = Math.floor(Math.random() * (20 - 13 + 1)) + 13;
              return (
                <tr key={index}>
                  <td onClick={()=>setAlumnoInfo(true)}>{row.id}</td>
                  <td onClick={()=>setAlumnoInfo(true)}>{row.dni}</td>
                  <td onClick={()=>setAlumnoInfo(true)}>{row.nombreCompleto}</td>
                  <td onClick={()=>setAlumnoInfo(true)}>{row.nivel}</td>
                  <td onClick={()=>setAlumnoInfo(true)}>{esteGrado}</td>
                  <td onClick={()=>setAlumnoInfo(true)}>{randomValue}</td>
                  <td>{Listado?randomNumber:(<img style={{width:"30px", height:"30px"}} src="../.././public/media/advertencia.png"/>)}</td>
                  <td><input disabled={Listado?false:true} style={{width:"30px", height:"30px"}} type="checkbox"/></td>
                  <td>
                    <button className="btn-pdf">PDF</button>
                    <button onClick={()=>setVerLibreta(true)}>Ver</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {alumnoInfo?(
                <div className='af-general-container'>
                <div className='af-background'></div>
                <div className="af-container">
                    <img src="../.././public/media/default.jpg" alt="Foto del alumno" className="af-foto" />
                      {editarAlumno?
                      (
                        <div className="af-info">
                        <input style={{fontFamily:"Nunito, serif", fontSize:"1em", marginLeft:"20px"}} value="Alegre Jesus Ninaquiste"/>
                        <div><span style={{fontFamily:"Nunito, serif", fontSize:"0.8em"}}>Código:</span><input value="i20236969"/></div>
                        <div><span style={{fontFamily:"Nunito, serif", fontSize:"0.8em"}}>DNI:</span><input value="12345678"/></div>
                        <div><span style={{fontFamily:"Nunito, serif", fontSize:"0.8em"}}>Nivel:</span><input value="Primaria"/></div>
                        <div><span style={{fontFamily:"Nunito, serif", fontSize:"0.8em"}}>Grado:</span><input value="3ro"/></div>
                        <div><span style={{fontFamily:"Nunito, serif", fontSize:"0.8em"}}>Sección:</span><input value="C"/></div>
                        <div><span style={{fontFamily:"Nunito, serif", fontSize:"0.8em"}}>Apoderado:</span><input value="Padre Alegre"/></div>
                        <div><span style={{fontFamily:"Nunito, serif", fontSize:"0.8em"}}>Contacto:</span><input value="soycremacorazon@hotmail.com"/></div>
                        <div className="af-actions">
                           <button className="af-button af-edit"  onClick={()=>setEditarAlumno(true)}>Guardar</button>
                           <button className="af-button af-close" onClick={()=>setAlumnoInfo(false)}>Cerrar</button>
                        </div>
                       </div>
                      )
                      :(
                        <div className="af-info">
                          <h2>Jesus Alegre Ninaquispe</h2>
                          <p><strong>Código:</strong> i20236969</p>
                          <p><strong>DNI:</strong> 12345678</p>
                          <p><strong>Nivel:</strong> Primaria</p>
                          <p><strong>Grado:</strong> 3ro</p>
                          <p><strong>Sección:</strong> C</p>
                          <p><strong>Apoderado:</strong> Padre Alegre</p>
                          <p><strong>Contacto:</strong> soycremacorazon@hotmail.com</p>
                          <div className="af-actions">
                             <button className="af-button af-edit"  onClick={()=>setEditarAlumno(false)}>Editar</button>
                             <button className="af-button af-close" onClick={()=>setAlumnoInfo(false)}>Cerrar</button>
                          </div>
                         </div>
                      )}

                </div>
            </div>
      ):(null)}


{verLibreta ? (
  <div className='af-general-container'>
    <div className='af-background'></div>
    <div className="lib-container">
      <div>
        <h2 className="af-title">Libreta de Calificaciones</h2>

        <div className="af-student-name">
          <strong>Nombre del Alumno:</strong> Jesus Alegre Ninaquispe
        </div>

        <div className="af-grade-table">
          <table>
            <thead>
              <tr>
                <th>Curso</th>
                <th>T1</th>
                <th>T2</th>
                <th>T3</th>
                <th>EF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Matemáticas</td>
                <td>15</td>
                <td>16</td>
                <td>18</td>
                <td>19</td>
              </tr>
              <tr>
                <td>Historia</td>
                <td>12</td>
                <td>14</td>
                <td>15</td>
                <td>17</td>
              </tr>
              <tr>
                <td>Ciencias</td>
                <td>14</td>
                <td>13</td>
                <td>15</td>
                <td>18</td>
              </tr>
              <tr>
                <td>Lenguaje</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Arte</td>
                <td>16</td>
                <td>15</td>
                <td>18</td>
                <td>19</td>
              </tr>
              <tr>
                <td>Educación Física</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
                <td>20</td>
              </tr>
            </tbody>
          </table>
          <div style={{width:"100%",height:"50px", display:"grid",alignItems:"center", justifyContent:"center"}}>
            <button onClick={()=>setVerLibreta(false)} style={{backgroundColor:"crimson", transform:"scale(1.3)"}}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
) : null}
    </>
  );
};

export default EstaSeccion;
