import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';


const NuevaCuenta = (props) => {
    //2.4- Importar el context de alertas
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, registrarUsuario } = authContext;

    //2.5- En caso de que el usuario ya este registrado o sea un registro duplicado 
    useEffect(() => {
        if(autenticado) {
           props.history.push('/proyectos');
        }
        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        
    }, [mensaje, autenticado, props.history]);


    //2.0-Generar estructura del formulario html
    //2.1-Stete para iniciar session
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });
    //2.2-Extraemos el Email y el Password del usuario 
    const { nombre, email, password, confirmar } = usuario;



    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }
    //2.3-Cuando el usuario quiere iniiar session el submit
    const onSubmit = e => {
        e.preventDefault();
        console.log(usuario);
        //2.3.1-Validar que los campos no esten vacios
        if (nombre.trim() === '' || email.trim() === '' || password.trim() === '' || confirmar.trim() === '') {
            mostrarAlerta('Los campos son obligatorios', 'alerta-error');
            return;
        }
        //2.3.2-Password minimo de 6 caracteres para
        if (password.length < 6) {
            mostrarAlerta('El password debe tener al menos 6 caracteres', 'alerta-error');
            return;
        }
        //2.3.3-Password y confirmar password deben ser iguales
        if (password !== confirmar) {
            mostrarAlerta('Los password no coinciden', 'alerta-error');
            return;
        }
        //2.3.4-Pasarlo al action
        registrarUsuario({nombre, email, password});

        //2.3.5-Redireccionar a la pantalla principal


    }



    return ( 
        <div className="form-usuario">
            { alerta ? ( <div className={`alerta ${alerta.categoria}`}> { alerta.msg } </div> ) : null }
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una Cuenta</h1>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" 
                            id="nombre" 
                            name="nombre" 
                            placeholder="Tu nombre" 
                            value={nombre}
                            onChange={onChange}       
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Tu mail" 
                            value={email}
                            onChange={onChange}       
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Tu Password" 
                            value={password}
                            onChange={onChange}       
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input 
                            type="password" 
                            id="confirmar" 
                            name="confirmar" 
                            placeholder="Repite tu Password" 
                            value={confirmar}
                            onChange={onChange}       
                        />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrarme"/>
                    </div>
                </form>
                <Link to="/" className="enlace-cuenta">Volver a Iniciar Sesión</Link>
            </div>
        </div>
        );
}
 
export default NuevaCuenta;