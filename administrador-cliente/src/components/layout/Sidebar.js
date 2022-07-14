import React from 'react'
import NuevoProyecto from '../proyectos/NuevoProyecto';


 //2.0-Generar estructura del Sidebar html
const Sidebar = () => {
    return ( 
        <aside>
            <div className="contenedor-sidebar">
                <h1>MERN<span>Task</span></h1>
                <NuevoProyecto/>
                <div className="proyectos">
                    <h2>Tus proyectos</h2>
                </div>
                
            </div>
        </aside>
     );
}
 
export default Sidebar;