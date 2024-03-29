import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';

import ProyectoState from './context/proyectos/proyectoState';
import TareaoState from './context/tareas/tareaState';

import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';

console.log(process.env.REACT_APP_BACKEND_URL);

function App() {
  return (
    <ProyectoState>
      <TareaoState>
        <AlertaState>
          <AuthState>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login/>} />
                    <Route exact path="/nueva-cuenta" element={<NuevaCuenta/>} />
                    <Route exact path="/proyectos" element={<Proyectos/>} />
                </Routes>
            </Router>
          </AuthState>
        </AlertaState>
      </TareaoState>
    </ProyectoState>
  );
}

export default App;
