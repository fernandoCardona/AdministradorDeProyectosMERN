import React from 'react'



 //7.0-Generar estructura del componente 'royecto' html
const Proyecto = ({proyecto}) => {
    return ( 
      <li>
          <button
              type="button"
              className="btn btn-blank"
          >
          {proyecto.nombre} 
          </button>
      </li>
     );
}
 
export default Proyecto;