import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

export const NosDisplay = () => {
  return (
    <div id="nosotros">
      <div className="ns_texto">
        <div className="ns_img">
          <img src="https://images.pexels.com/photos/256468/pexels-photo-256468.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
        </div>
        <div className="ns_txt tres_flex">
          <div style={{margin:"20px 0"}}>
            <p className="text_parallax">Este sistema te ayuda a no olvidar tareas con la ayuda de tu dispositivo móvil y mejorar tu rendimiento escolar.</p>
          </div>
          <div className="steps">
            <div className="box_flex">
              <img src="https://images.pexels.com/photos/159621/open-book-library-education-read-159621.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
              <p className="txt_parallax">Realiza tareas rápido, y en un tiempo récord</p>
            </div>
            <div className="box_flex">
              <img src="https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"/>
              <p className="txt_parallax">Un sistema con servicios que funcionan en conjunto</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
