import React,{ Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
//import proyectoReducer from '../../context/proyectos/proyectoReducer';



 //5.0-Generar estructura del componente boton 'Nuevo Proyecto' html
const NuevoProyecto = () => {
    //5.5-Obtener State del formulario a traves de Context
    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

    

    //5.1-Iniciar Staet de NuevoProyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    //5.2-Extraer el nombre del proyecto
    const { nombre } = proyecto;

    //5.3-Extraer el nombre del formulario de NuevoProyecto
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }
    //5.4-Cuando el usuario envia el nombre del proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        // Validar el proyecto
        if( nombre === '' ) {
            mostrarError();
            return;
        }

        // agregar al state
        agregarProyecto(proyecto)

        // Reiniciar el form
        guardarProyecto({
            nombre: ''
        })
    }
    //Funcion para mostrar el formulario de 
    const onClickFormulario = () => {
        mostrarFormulario();
    }

    return ( 
        <Fragment>
            <button 
                type="button" 
                className="btn btn-block btn-primario"
                onClick={ onClickFormulario }
            >
            Nuevo Proyecto
            </button>
            { //5.5.1-Creamos un ternario para mostrar el formulario o ocultarlo 
                formulario ?
                   (  
                    <form onSubmit={onSubmitProyecto} className='formulario-nuevo-proyecto'>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="input-text"
                                placeholder="Nombre Proyecto"
                                name="nombre"
                                value={nombre}
                                onChange={onChangeProyecto}
                                
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-block btn-primario" 
                            value="Agregar Proyecto"
                        >Agregar</button>
                    </form>
                    )
                : null }

            { //5.5.2-Creamos un ternario para mostrar el error o ocultarlo
                errorformulario ? <p className="mensaje error">El nombre del Proyecto es obligatorio</p>  : null 
            }
            
        </Fragment>
     );
}
 
export default NuevoProyecto;