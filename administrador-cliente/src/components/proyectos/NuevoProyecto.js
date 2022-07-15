import React,{ Fragment, useState } from 'react';



 //5.0-Generar estructura del componente boton 'Nuevo Proyecto' html
const NuevoProyecto = () => {
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
        console.log(proyecto);
        //5.4.1-Validar que el nombre del proyecto no este vacio
        if (nombre.trim() === '') {
            console.log('El nombre del proyecto es obligatorio');
            return;
        }
        
    }

    return ( 
        <Fragment>
            <button 
                type="button" 
                className="btn btn-block btn-primario"
            >Nuevo Proyecto</button>
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
        </Fragment>
     );
}
 
export default NuevoProyecto;