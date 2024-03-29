// Importa las bibliotecas necesarias de React
import React from "react";
import "../Estilos/Layout.css";
import Boton from "../Componentes/Boton.js";
import logoAlonso from "../imagenes/logoalonso.png";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

// Componente principal de la página
function Layout() {
  return (
    <div>
      <div>
        <div className="cabecera">
          <div className="titulo">
            <h1>Alonsopedia 14</h1>
            <h3 className="subtitulo">
              Todas las Estadisticas de Fernando Alonso
            </h3>
          </div>
          <div className="logo">
            <Link to="/">
              <img
                className="imagenLogo"
                src={logoAlonso}
                alt="Logo Fernando Alonso"
              />
            </Link>
          </div>
        </div>

        <nav className="navegacion">
          <Boton valor="Inicio" ruta="/" />
          <Boton valor="Equipos" ruta="/equipos/6" />
          <Boton valor="Coches" ruta="/coches" />
          <Boton valor="Carreras" ruta="/carreras/2023" />
          <Boton valor="Fernando Alonso" ruta="/fernandoAlonso" />
        </nav>

        <div id="contenido" className="contenido">
          <Outlet />
        </div>
        <div id="footer">
          <p>© 2024 Alonsopedia.</p>
          <p>Por <span className="negrita">Adrián Sanz</span> y <span className="negrita">Adrián Nieto</span></p>
          <p>Agradecimientos a Ergast (Creador de la api) <br/> y a <span className="negrita">Fernando Alonso</span>.</p>
          <img className='cruz' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Cruz_de_Asturias.svg/1200px-Cruz_de_Asturias.svg.png"></img>
        </div>
      </div>
    </div>
  );
}

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación
export default Layout;
