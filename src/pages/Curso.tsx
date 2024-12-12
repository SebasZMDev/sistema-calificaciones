import NavBar from "../components/NavBar";
import '../styles/CursoS.css'
const Curso = () => {
  const Estudiantes = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
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
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {Estudiantes.map((estudiante, index) => (
              <tr key={index}>
                <td>Estudiante {estudiante}</td>
                <td>
                  <input type="number" min="0" max="20" />
                </td>
                <td>
                  <input type="number" min="0" max="20" />
                </td>
                <td>
                  <input type="number" min="0" max="20" />
                </td>
                <td>
                  <input type="number" min="0" max="20" />
                </td>
                <td>
                  <button>Guardar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Curso;
