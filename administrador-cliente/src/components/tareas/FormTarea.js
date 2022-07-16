import React from 'react';

//9.0-Generar estructura del componente 'FormTarea' html
const FormTarea = () => {
    
    return ( 
    <div className="formulario">
        <form>
            <div className="contenedor-input">
                <input 
                    type="text" 
                    className='input-text'
                    placeholder="Nombre Tarea ..."
                    name="nombre"
                />
            </div>
            <div className="contenedor-input">
                <input type="text" className="btn btn-primario btn-submit btn-block" />
            </div>
        </form>
    </div>
        
     );
}
 
export default FormTarea;