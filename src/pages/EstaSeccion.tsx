import { useNavigate } from 'react-router-dom';
import '../styles/EstaSeccionS.css'
import NavBar from '../components/NavBar';




const EstaSeccion = () => {

    const data = [
        {
          id: "i202030294",
          dni: "44556677",
          nombreCompleto: "Luna Luz Costa Oeste",
          nivel: "Secundaria",
          grado: "5",
          seccion: "A",
          promedioSeleccionado: "15",
          promedioGeneral: "8",
        },
        {
          id: "i202030295",
          dni: "44556678",
          nombreCompleto: "Carlos Martín Peña",
          nivel: "Secundaria",
          grado: "4",
          seccion: "B",
          promedioSeleccionado: "14",
          promedioGeneral: "7",
        },
        {
          id: "i202030296",
          dni: "44556679",
          nombreCompleto: "Ana María Gómez",
          nivel: "Primaria",
          grado: "6",
          seccion: "C",
          promedioSeleccionado: "16",
          promedioGeneral: "9",
        },
        {
          id: "i202030297",
          dni: "44556680",
          nombreCompleto: "Pedro Alberto Díaz",
          nivel: "Primaria",
          grado: "5",
          seccion: "A",
          promedioSeleccionado: "12",
          promedioGeneral: "7",
        },
        {
          id: "i202030298",
          dni: "44556681",
          nombreCompleto: "Sofía Isabel Ramos",
          nivel: "Secundaria",
          grado: "6",
          seccion: "B",
          promedioSeleccionado: "18",
          promedioGeneral: "10",
        },
        {
          id: "i202030299",
          dni: "44556682",
          nombreCompleto: "Ricardo Antonio Silva",
          nivel: "Primaria",
          grado: "4",
          seccion: "C",
          promedioSeleccionado: "13",
          promedioGeneral: "7",
        },
        {
          id: "i202030300",
          dni: "44556683",
          nombreCompleto: "María José Hernández",
          nivel: "Secundaria",
          grado: "2",
          seccion: "A",
          promedioSeleccionado: "20",
          promedioGeneral: "11",
        },
        {
          id: "i202030301",
          dni: "44556684",
          nombreCompleto: "Juan Carlos González",
          nivel: "Secundaria",
          grado: "3",
          seccion: "B",
          promedioSeleccionado: "16",
          promedioGeneral: "9",
        },
        {
          id: "i202030302",
          dni: "44556685",
          nombreCompleto: "Valeria Beatriz López",
          nivel: "Secundaria",
          grado: "5",
          seccion: "A",
          promedioSeleccionado: "17",
          promedioGeneral: "9",
        },
        {
          id: "i202030303",
          dni: "44556686",
          nombreCompleto: "Luis Enrique Martínez",
          nivel: "Primaria",
          grado: "3",
          seccion: "C",
          promedioSeleccionado: "14",
          promedioGeneral: "8",
        },
        {
          id: "i202030304",
          dni: "44556687",
          nombreCompleto: "Isabella Andrea Pérez",
          nivel: "Secundaria",
          grado: "6",
          seccion: "A",
          promedioSeleccionado: "19",
          promedioGeneral: "10",
        },
        {
          id: "i202030305",
          dni: "44556688",
          nombreCompleto: "Felipe Andrés Vega",
          nivel: "Secundaria",
          grado: "1",
          seccion: "B",
          promedioSeleccionado: "16",
          promedioGeneral: "8",
        },
        {
          id: "i202030306",
          dni: "44556689",
          nombreCompleto: "Eva Lucía Ramírez",
          nivel: "Primaria",
          grado: "2",
          seccion: "A",
          promedioSeleccionado: "14",
          promedioGeneral: "7",
        },
        {
          id: "i202030307",
          dni: "44556690",
          nombreCompleto: "José Luis Martínez",
          nivel: "Primaria",
          grado: "6",
          seccion: "B",
          promedioSeleccionado: "17",
          promedioGeneral: "8",
        },
        {
          id: "i202030308",
          dni: "44556691",
          nombreCompleto: "Elena María García",
          nivel: "Secundaria",
          grado: "5",
          seccion: "A",
          promedioSeleccionado: "13",
          promedioGeneral: "6",
        },
        {
          id: "i202030309",
          dni: "44556692",
          nombreCompleto: "Manuel Alejandro Torres",
          nivel: "Secundaria",
          grado: "4",
          seccion: "B",
          promedioSeleccionado: "15",
          promedioGeneral: "7",
        },
        {
          id: "i202030310",
          dni: "44556693",
          nombreCompleto: "Catalina Verónica Soto",
          nivel: "Primaria",
          grado: "3",
          seccion: "A",
          promedioSeleccionado: "18",
          promedioGeneral: "9",
        },
        {
          id: "i202030311",
          dni: "44556694",
          nombreCompleto: "Fernando José García",
          nivel: "Secundaria",
          grado: "2",
          seccion: "C",
          promedioSeleccionado: "14",
          promedioGeneral: "7",
        }
      ];
    const navigate = useNavigate();
    const IrASecciones = () => {
      navigate('/pages/Secciones')
    }
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

      <table className="custom-table">
        <thead>
          <tr>
            <th>ID Estudiante</th>
            <th>DNI</th>
            <th>Nombre Completo</th>
            <th>Nivel</th>
            <th>Grado</th>
            <th>Sección</th>
            <th>Promedio Seleccionado</th>
            <th>Promedio General</th>
            <th>Envio Formato</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.dni}</td>
              <td>{row.nombreCompleto}</td>
              <td>{row.nivel}</td>
              <td>{row.grado}</td>
              <td>{row.seccion}</td>
              <td>{row.promedioSeleccionado}</td>
              <td>{row.promedioGeneral}</td>
              <td>
                <button className="btn-pdf">PDF</button>
                <button className="btn-delete">Excel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button style={{margin:"20px", transform:"scaleY(1.3)", backgroundColor:"skyblue"}} onClick={IrASecciones}>Volver</button>
      <button style={{margin:"20px", transform:"scaleY(1.3)"}}>Guardar</button>
    </div>
    </>
  );
};

export default EstaSeccion;
