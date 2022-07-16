import React, { Fragment } from 'react'
import Tarea from './Tarea';


//10.0-Generar estructura del componente 'ListadoTareas' html

const ListadoTareas = () => {

    const tareasProyecto = [
        {nombre: 'Elegir plataforma', estado: true},
        {nombre: 'Elegir Colores', estado: false},
        {nombre: 'Elegir plataforma de pago', estado: false},
        {nombre: 'Elegir Hosting', estado: true}
    ];

    return ( 
        <Fragment>
            <h2>Proyecto:</h2>
            <ul className="listadoTareas">
                    {tareasProyecto.length === 0 
                        ? (<li className="tarea"><p>No hay tareas</p></li>)
                        :  tareasProyecto.map( tarea => (
                            <Tarea tarea={tarea} />
                        ))
                    }
            </ul>
            <button type="button" className="btn btn-eliminar">Eliminar Proyecto &times;</button>
        </Fragment>
     );
}
 
export default ListadoTareas;