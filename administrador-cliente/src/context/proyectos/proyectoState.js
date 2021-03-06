import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS, 
    AGREGAR_PROYECTOS, 
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO

} from '../../types';

 


const ProyectoState = props => {

    const proyectos = [
    {id: 1, nombre: 'Tienda Virtual'},
    {id: 2, nombre: 'Intranet'},
    {id: 3, nombre: 'Diseño Web'},
    {id: 4, nombre: 'Diseño de Logotipo'},
    {id: 5, nombre: 'Diseño de Cartas'},
    {id: 6, nombre: 'Diseño de Flyers'}
];

    const initialState ={
        proyectos : [],
        formulario: false,
        errorformulario: false,
        proyecto: null
    }
    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //Serie de funciones
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }
    // Obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }
    // Agregar nuevo Proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuidv4();
        //insertar proyecto en el State de
        dispatch({
            type: AGREGAR_PROYECTOS,
            payload: proyecto
        })

        
    }
    // Valida el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    } 
    // Seleccionar proyecto actual al que el usuario hizo clicking
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }
    // Eliminar proyecto
    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }


    return(
        <proyectoContext.Provider value={{
            proyectos: state.proyectos,
            formulario: state.formulario,
            errorformulario: state.errorformulario,
            proyecto: state.proyecto,
            mostrarFormulario,
            obtenerProyectos,
            agregarProyecto,
            mostrarError,
            proyectoActual,
            eliminarProyecto
        }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;