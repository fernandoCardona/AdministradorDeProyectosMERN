import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    //1.0-Generar estructura del formulario html
    //1.1-Stete para iniciar session
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });
    //1.2-Extraemos el Email y el Password del usuario 
    const { email, password } = usuario;



    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }
    //1.3-Cuando el usuario quiere iniiar session el submit
    const onSubmit = e => {
        e.preventDefault();
        console.log(usuario);
        //1.3.1-Validar que los campos no esten vacios
        if (email.trim() === '' || password.trim() === '') {
            console.log('Los campos son obligatorios');
            return;
        }
        //1.3.2-Pasarlo al action

        //1.3.3-Redireccionar a la pantalla principal


    }



    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Session</h1>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="">Email</label>
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
                        <label htmlFor="">Password</label>
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
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sessión"/>
                    </div>
                </form>
                <Link to="/nueva-cuenta" className="enlace-cuenta">Obtener una cuenta</Link>
            </div>
        </div>
        );
}
 
export default Login;