import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Curso from './pages/Curso';
import CursoList from './pages/CursoList';
import Secciones from './pages/Secciones';
import EstaSeccion from './pages/EstaSeccion';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pages/Login" element={<Login />} />
        <Route path="/pages/Home" element={<Home />} />
        <Route path="/pages/CursoList" element={<CursoList />} />
        <Route path="/pages/Curso" element={<Curso />} />
        <Route path="/pages/Secciones" element={<Secciones />} />
        <Route path="/pages/EstaSeccion" element={<EstaSeccion/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
