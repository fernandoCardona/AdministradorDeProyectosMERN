import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';



 //7.0-Generar estructura del componente 'royecto' html
const Proyecto = ({proyecto}) => {
    //7.1-Obtener State del formulario a traves de Context
    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;
    //7.2-Obtener funcion del contxt de tareas
    const tareasContext = useContext(tareaContext);
    const { obtenerTareas } = tareasContext;    
    //7.3-Funcion para agregar proyecto actual y sus tareasProyecto
    const seleccionarProyecto = id => {
        proyectoActual(id);
        obtenerTareas(id);//Filtrar las tareas con el click en el proyecto 
        
    }    

    return ( 
      <li>
          <button
              type="button"
              className="btn btn-blank"
              onClick={ () => seleccionarProyecto(proyecto.id) }
          >
          {proyecto.nombre} 
          </button>
      </li>
     );
}
 
export default Proyecto;