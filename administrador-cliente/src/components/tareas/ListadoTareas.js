import React, { Fragment, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import Tarea from './Tarea';


//10.0-Generar estructura del componente 'ListadoTareas' html

const ListadoTareas = () => {
    //7.1-Obtener State del formulario a traves de Context
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    //10.1-Si no hay proyecto seleccionado
    if(!proyecto) return <h2>Seleccione un proyecto</h2>;
    //10.2-Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const tareasProyecto = [
        {nombre: 'Elegir plataforma', estado: true},
        {nombre: 'Elegir Colores', estado: false},
        {nombre: 'Elegir plataforma de pago', estado: false},
        {nombre: 'Elegir Hosting', estado: true}
    ];
    //10.3-Eliminar proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id);
    }

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listadoTareas">
                    {tareasProyecto.length === 0 
                        ? (<li className="tarea"><p>No hay tareas</p></li>)
                        :  tareasProyecto.map( tarea => (
                            <Tarea tarea={tarea} />
                        ))
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