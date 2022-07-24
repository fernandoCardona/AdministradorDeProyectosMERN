import React, { useReducer} from 'react';
import alertaReducer from './alertaReducer';
import alertaContext from './alertaContext';


import { MOSTRAR_ALERTA, OCULTAR_ALERTA} from '../../types'

const AlertaState = props => {
    const initialState = {
        alerta: null
    }
    const [ state, dispatch ] = useReducer(alertaReducer, initialState);

    //FUNCIONES DE
    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                msg,
                categoria
            }   
        }) //dispatch es una funcion que recibe un objeto 
        
        // despues de 5 segundoe limpia el msg de Alerta 
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })

        }, 5000);

    }


    return (
        <alertaContext.Provider 
            value={{
                alerta: state.alerta,
                mostrarAlerta
            }}
        >

            {props.children}
        </alertaContext.Provider>
    )

}

export default AlertaState;