import React, { Fragment, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import Tarea from './Tarea';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


//10.0-Generar estructura del componente 'ListadoTareas' html

const ListadoTareas = () => {
    //10.4-Obtener State del formulario a traves de Context
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;
    //10.5-Obtener las tareas del  proyecto
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext; 

    //10.1-Si no hay proyecto seleccionado
    if(!proyecto) return <h2>Seleccione un proyecto</h2>;
    //10.2-Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;


    //10.3-Eliminar proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id);
    }

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listadoTareas">
                    {tareasproyecto.length === 0 
                        ? (<li className="tarea"><p>No hay tareas</p></li>)
                        :   <TransitionGroup>
                        {
                            tareasproyecto.map( tarea => (
                                <CSSTransition key={tarea.id} timeout={200} classNames="tarea">
                                    <Tarea tarea={tarea}/>
                                </CSSTransition>
                            ))
                        }
                        </TransitionGroup>
                    }
            </ul>
            <button 
                type="button" 
                className="btn btn-eliminar"
                onClick={onClickEliminar}>Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;