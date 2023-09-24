import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Home.css';

export const SendFreeDisplay = () => {
  return (
    <div style={{backgroundColor:"white", paddingBottom:"100px"}}>
      <div className="revista">
        <section className="txt_revista">
        <h2>Descarga y adapta nuestra app complementaria </h2>
        <p className="txto">
          Prueba nuestra app
          <br/>
          <br/>
          Aumenta la participacion de tus alumnos
          <br/>
          <br/>
          Servicio + Rápidez Tienemos el respaldo de desarrolladores expertos, lo que te permite escalar nuestro sistema a miles de usuarios.
        </p>
        </section>
        <div className="process">
          <div className="row">
            <div className="uno">
              <div className="cub">
              <FontAwesome name="bell" size="2x" />
              <br/>
              <p>Tareas Diarias</p>
              <p> Revisa tus tareas diariamente desde la app</p></div>
            </div>
            <div className="uno">
              <div className="cub">
              <FontAwesome name="bell" size="2x" />
              <br/>
              <p>Tareas Diarias</p>
              <p> Revisa tus tareas diariamente desde la app</p></div>
            </div>
          </div>
          <div className="row">
            <div className="dos">
              <div className="cub">
                <FontAwesome name="calendar" size="2x" />
                <br/>
                <p>Calendario</p>
                <p> Ten a la mano todas las fechas importantes<br/></p>
              </div>
            </div>
            <div className="dos">
              <div className="cub">
                <FontAwesome name="calendar" size="2x" />
                <br/>
                <p>Calendario</p>
                <p> Ten a la mano todas las fechas importantes<br/></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tres">
              <div className="cub">
                <FontAwesome name="paper-plane" size="2x" />
                <br/>
                <p>Análisis</p>
                <p>Accede al análisis de tus alumnos fácil y rápido</p>
              </div>
            </div>
            <div className="tres">
              <div className="cub">
                <FontAwesome name="paper-plane" size="2x" />
                <br/>
                <p>Análisis</p>
                <p>Accede al análisis de tus alumnos fácil y rápido</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
