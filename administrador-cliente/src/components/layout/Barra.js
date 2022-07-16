import React from 'react';

//8.0-Generar estructura del componente 'Barra' html
const Barra = () => {
    return ( 
        <header className="app-header">
            <p className="nombre-usuario">Hola <span>Fernando</span></p>
            <nav className="nav-principal">
                <a href="#!">Cerrar Sessión</a>
            </nav>
        </header>
     );
}
 
export default Barra;