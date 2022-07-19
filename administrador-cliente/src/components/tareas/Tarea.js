import React, { useContext } from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

//11.0-Generar estructura del componente 'Tarea' html
const Tarea = ({tarea}) => {

    //11.1-Extraer si un proyecto esta activo 
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;
    //11.2-Obtener funcion del context de tareas
    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea } = tareasContext;

    //11.3-Extraer el proyecto actual
    const [proyectoActual] = proyecto;

    //11.4-funcion que se ejecuta para Eliminar tarea
    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
    }
    //11.5-funcion que se ejecuta para cambiar el estado de la tarea
    const cambiarEstado = tarea => {
        if(tarea.estado){
            tarea.estado = false;
        }else{
            tarea.estado = true;
        }
        cambiarEstadoTarea(tarea);
    }

    return ( 
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado
                    ? <button type="button" className="completo" onClick={() => cambiarEstado(tarea)}>Completado</button>
                    : <button type="button" className="incompleto" onClick={() => cambiarEstado(tarea)}>Incompletado</button>
                }
            </div>
            <div className="acciones">
                <button type="button" className="btn btn-primario">Editar </button>
                <button 
                    type="button" 
                    className="btn btn-secundario"
                    onClick={() => tareaEliminar(tarea.id)}
                    >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Tarea;