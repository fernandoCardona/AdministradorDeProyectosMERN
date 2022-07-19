import React, { useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

//9.0-Generar estructura del componente 'FormTarea' html
const FormTarea = () => {

    //9.1-Extraer si un proyecto esta activo 
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;
    //9.8-Obtener funcion del context de tareas
    const tareasContext = useContext(tareaContext);
    const { errortarea, agregarTarea, validarTarea, obtenerTareas } = tareasContext;

    //9.5-Definimos un State inicial 
        const [tarea, guardarTarea] = useState({
            nombre: ''
        });
    //9.7-Extraer el nobre del proyecto del proyecto actual
        const { nombre } = tarea;

    //9.2-Si no hay proyecto seleccionado
    if(!proyecto) return null;
    //9.3-Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;
    //9.6-Leer los datos del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }
    //9.4-funcion onSubmit para agregar tarea
    const onSubmit = e => {
        e.preventDefault();
        //validar 
        if(nombre.trim() === '') {
            validarTarea();
            return;
        }

        //agregar la nueva tarea al state de tareas
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;
        agregarTarea(tarea);
        
        //Obtener y filtrar las tareas del proyectoActual
        obtenerTareas(proyectoActual.id);

        //reiniciar el form
        guardarTarea({
            nombre: ''
        })

    }
    
    return ( 
    <div className="formulario">
        <form onSubmit={onSubmit}>
            <div className="contenedor-input">
                <input 
                    type="text" 
                    className='input-text'
                    placeholder="Nombre Tarea ..."
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                />
            </div>
            <div className="contenedor-input">
                <input type="submit" className="btn btn-primario btn-submit btn-block" value={'Agregar Tarea'} />
            </div>
        </form>
        {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
    </div>
        
     );
}
 
export default FormTarea;