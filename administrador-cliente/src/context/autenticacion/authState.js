import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import clienteAxios from '../../config/axios';

import { 
    REGISTRO_EXITOSO, 
    REGISTRO_ERROR, 
    OBTENER_USUARIO, 
    LOGIN_EXITOSO, 
    LOGIN_ERROR, 
    CERRAR_SESSION
} from '../../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        alerta: null
    }
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //Creamos las diferentes funciones
    const registrarUsuario = async datos => {
        try{
            const respuesta = await clienteAxios.post('/api/usuarios', datos);
            console.log(respuesta);
            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            })
        }
        catch(error){
            //console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({ 
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }

    }
    
    //Retorna el usuario Autentificado
    const usuarioAutentificado = async () => {
        const token = localStorage.getItem('token');
        if(token){
            //TODO: enviar el token por headers
            
        }
        try {

        }catch (error){
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarUsuario
            }}
        >
            {props.children}
        </AuthContext.Provider>
           



    )

}


export default AuthState;
