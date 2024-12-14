import { useNavigate } from "react-router-dom";
import "../styles/EstaSeccionS.css";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import AlumnoInfo from "../components/AlumnoInfo";

const EstaSeccion = () => {
  const [esteGrado, setEsteGrado] = useState("");
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
              <th>Envio Formato</th>
              <th>Seleccionar</th>
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
                  <td>{row.id}</td>
                  <td>{row.dni}</td>
                  <td onClick={()=>''}>{row.nombreCompleto}</td>
                  <td>{row.nivel}</td>
                  <td>{esteGrado}</td>
                  <td>{randomValue}</td>
                  <td>{Listado?randomNumber:(<img style={{width:"40px", height:"40px"}} src="../.././public/media/advertencia.png"/>)}</td>
                  <td><input disabled={Listado?false:true} style={{width:"30px", height:"30px"}} type="checkbox"/></td>
                  <td>
                    <button className="btn-pdf">PDF</button>
                    <button>Ver</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <AlumnoInfo/>
    </>
  );
};

export default EstaSeccion;
