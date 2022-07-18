import React, { useContext }from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

//9.0-Generar estructura del componente 'FormTarea' html
const FormTarea = () => {
    //9.1-Extraer si un proyecto esta activo 
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //9.2-Si no hay proyecto seleccionado
    if(!proyecto) return null;
    //9.3-Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;
    
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
                <input type="submit" className="btn btn-primario btn-submit btn-block" value={'Agregar Tarea'} />
            </div>
        </form>
    </div>
        
     );
}
 
export default FormTarea;