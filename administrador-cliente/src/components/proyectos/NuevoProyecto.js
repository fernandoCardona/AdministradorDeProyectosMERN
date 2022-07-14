import React,{ Fragment } from 'react'



 //2.0-Generar estructura del componente boton 'Nuevo Proyecto' html
const NuevoProyecto = () => {
    return ( 
        <Fragment>
            <button type="button" className="btn btn-block btn-primario">Nuevo Proyecto</button>
            <form action="" className='formulario-nuevo-proyecto'>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="input-text" 
                        placeholder="Nombre Proyecto" 
                        name="nombre"
                    />
                </div>
                <button type="submit" className="btn btn-block btn-primario" value="Agregar Proyecto">Agregar</button>
            </form>
        </Fragment>
     );
}
 
export default NuevoProyecto;