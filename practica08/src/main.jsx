import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import MiFieldSet from './MiFieldSet'
import Formulario from './Formulario'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <MiFieldSet titulo="Datos Personales" txt1="Nombre:" txt2="Password:"/>
    <MiFieldSet titulo="Datos Escolares" txt1="Carrera:" txt2="Semestre:"/>
    <input type="submit" value="Enviar datos" /> */}
    <Formulario></Formulario>
  </React.StrictMode>,
)
