import React from 'react'
import Sidebar from '../layout/Sidebar'


 //3.0-Generar estructura de Proyectos html

const Proyectos = () => {
    return ( 
        <div className="contenedor-app">
            <Sidebar/>
            <div className="seccion-principal">
                <main>
                    <div className="contenedor-tareas">

                    </div>
                </main>
            </div>
        </div>
    );
}
 
export default Proyectos;