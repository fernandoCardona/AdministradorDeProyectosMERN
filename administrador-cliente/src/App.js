import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

import ProyectoState from './context/proyectos/proyectoState';
import TareaoState from './context/tareas/tareaState';




function App() {
  return (
    <ProyectoState>
      <TareaoState>
        <Router>
            <Routes>
                <Route exact path="/" element={<Login/>} />
                <Route exact path="/nueva-cuenta" element={<NuevaCuenta/>} />
                <Route exact path="/proyectos" element={<Proyectos/>} />
            </Routes>
        </Router>
      </TareaoState>
    </ProyectoState>
  );
}

export default App;
