
import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { v4 as uuidv4 } from 'uuid';


import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREAS,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
        {id: 1, nombre: 'Elegir plataforma', estado: true, proyectoId:1},
        {id: 2, nombre: 'Elegir Colores', estado: false, proyectoId:2},
        {id: 3, nombre: 'Elegir plataforma de pago', estado: false, proyectoId:3},
        {id: 4, nombre: 'Elegir Hosting', estado: true, proyectoId:4},
        {id: 5, nombre: 'Elegir Themes', estado: true, proyectoId:5},
        {id: 6, nombre: 'Integrar Db nueva', estado: true, proyectoId:6},
        {id: 7, nombre: 'Elegir plataforma', estado: true, proyectoId:6},
        {id: 8, nombre: 'Elegir Colores', estado: false, proyectoId:5},
        {id: 9, nombre: 'Elegir plataforma de pago', estado: false, proyectoId:4},
        {id: 10, nombre: 'Elegir Hosting', estado: true, proyectoId:3},
        {id: 11, nombre: 'Elegir Themes', estado: true, proyectoId:2},
        {id: 12, nombre: 'Integrar Db nueva', estado: true, proyectoId:1},
        {id: 13, nombre: 'Elegir plataforma', estado: true, proyectoId:3},
        {id: 14, nombre: 'Elegir Colores', estado: false, proyectoId:1},
        {id: 15, nombre: 'Elegir plataforma de pago', estado: false, proyectoId:2},
        {id: 16, nombre: 'Elegir Hosting', estado: true, proyectoId:6},
        {id: 17, nombre: 'Elegir Themes', estado: true, proyectoId:1},
        {id: 18, nombre: 'Integrar Db nueva', estado: true, proyectoId:5}
    ],
    tareasproyecto:null,
    errortarea: false,
    tareaseleccionada: null



    }
    //Crear el dispatch y el state para
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // creamos las funciones de Dispatch
    // obtener las tareas de un proyecto 
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }
    // agregar tareas al proyecto seleccionado
    const agregarTarea = tarea => {
        tarea.id = uuidv4();
        dispatch({
            type: AGREGAR_TAREAS,
            payload: tarea
        });
    }
    // validar tarea y muestsra un error en caso de que sea necesario en
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }
    // eliminar tarea por id 
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }
    // cambiar el estado de una tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }
    // obtener la tarea actual para edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }
    // actualizar tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }
    // limpiar tarea actual
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }




    return (
        <TareaContext.Provider value={{
            tareas: state.tareas,
            tareasproyecto: state.tareasproyecto,
            errortarea: state.errortarea,
            tareaseleccionada: state.tareaseleccionada,
            obtenerTareas,
            agregarTarea,
            validarTarea,
            eliminarTarea,
            cambiarEstadoTarea,
            guardarTareaActual,
            actualizarTarea,
            limpiarTarea
        }}>
            {props.children}
        </TareaContext.Provider>
    )
}


export default TareaState;