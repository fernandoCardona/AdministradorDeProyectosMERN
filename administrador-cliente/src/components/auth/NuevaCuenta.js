import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {
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
            console.log('Los campos son obligatorios');
            return;
        }
        //2.3.2-Password minimo de 6 caracteres para
        if (password.length < 6) {
            console.log('El password debe tener al menos 6 caracteres');
            return;
        }
        //2.3.3-Password y confirmar password deben ser iguales
        if (password !== confirmar) {
            console.log('Los password no coinciden');
            return;
        }
        //2.3.4-Pasarlo al action

        //2.3.5-Redireccionar a la pantalla principal


    }



    return ( 
        <div className="form-usuario">
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
                            placeholder="TRepite tu Password" 
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