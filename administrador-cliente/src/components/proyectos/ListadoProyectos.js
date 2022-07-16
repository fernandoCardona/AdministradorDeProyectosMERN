import React from 'react';
import Proyecto from './Proyecto';


 //6.0-Generar estructura del componente 'ListadoProyectos' html
const ListadoProyectos = () => {

    const proyectos = [
        {id: 1, nombre: 'Tienda Virtual'},
        {id: 2, nombre: 'Intranet'},
        {id: 3, nombre: 'Diseño Web'},
        {id: 4, nombre: 'Diseño de Logotipo'},
        {id: 5, nombre: 'Diseño de Cartas'},
        {id: 6, nombre: 'Diseño de Flyers'},
        {id: 7, nombre: 'Diseño de Páginas'},
        {id: 8, nombre: 'Diseño de Aplicaciones'},
        {id: 9, nombre: 'Diseño de Videojuegos'},
        {id: 10, nombre: 'Diseño de Apps Móviles'},
        {id: 11, nombre: 'Diseño de Apps Web'},
        {id: 12, nombre: 'Diseño de Apps de Escritorio'},
        {id: 13, nombre: 'Diseño de Apps de Juegos'},
        {id: 14, nombre: 'Diseño de Apps de Móviles'},
        {id: 15, nombre: 'Diseño de Apps de Escritorio'},
        {id: 16, nombre: 'Diseño de Apps de Juegos'},
        {id: 17, nombre: 'Diseño de Apps de Móviles'},
        {id: 18, nombre: 'Diseño de Apps de Escritorio'}
        
    ];
    return ( 
        <ul className="listado-proyectos">
            {proyectos.map( proyecto => (
                <Proyecto  proyecto={proyecto} />
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;