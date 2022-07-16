import React from 'react'

//11.0-Generar estructura del componente 'Tarea' html
const Tarea = ({tarea}) => {
    return ( 
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado
                    ? <button type="button" className="completo">Completado</button>
                    : <button type="button" className="incompleto">Incompletado</button>
                }
            </div>
            <div className="acciones">
                <button type="button" className="btn btn-primario">Editar </button>
                <button type="button" className="btn btn-secundario">Eliminar</button>
            </div>
        </li>
     );
}
 
export default Tarea;