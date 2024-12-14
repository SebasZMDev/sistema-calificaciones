import { useState } from 'react';
import '../components/AlumnoInfoS.css'

const AlumnoInfo = () => {

    useState(false)

    return (
        <div className='af-general-container'>
            <div className='af-background'></div>
            <div className="af-container">
                <img src="../.././public/media/default.jpg" alt="Foto del alumno" className="af-foto" />
                <div className="af-info">
                    <h2>Alegre Jesus Naniquiste</h2>
                    <p><strong>Código:</strong> i20236969</p>
                    <p><strong>DNI:</strong> 12345678</p>
                    <p><strong>Nivel:</strong> Primaria</p>
                    <p><strong>Grado:</strong> 3ro</p>
                    <p><strong>Sección:</strong> C</p>
                    <div className="af-actions">
                        <button className="af-button af-edit">Editar</button>
                        <button className="af-button af-close">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlumnoInfo;
