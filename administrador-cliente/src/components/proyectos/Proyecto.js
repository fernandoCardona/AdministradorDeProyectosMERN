import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';



 //7.0-Generar estructura del componente 'royecto' html
const Proyecto = ({proyecto}) => {
    //7.1-Obtener State del formulario a traves de Context
    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;
    return ( 
      <li>
          <button
              type="button"
              className="btn btn-blank"
              onClick={ () => proyectoActual(proyecto.id) }
          >
          {proyecto.nombre} 
          </button>
      </li>
     );
}
 
export default Proyecto;