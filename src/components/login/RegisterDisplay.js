import React from 'react';
import './Login.css';

export const RegisterDisplay = ({mostrar, toggleMostrar, saveRegistro, onSubmit, error, email, pass, pass2}) => (
  <div className="login">
    <div className="card_login">
      <h3>Crea una cuenta</h3>
      <h2 style={{color:"red", fontSize:"18px"}}>{error}</h2>

      <hr className="line_log"/>
      <div className="log_email">
        <form onSubmit={onSubmit} >
          <p>Tu email</p>
          <input className="input" name="email" placeholder="ejemplo@hacksite.com"  type="text" value={email} onChange={saveRegistro} />

          <p>Tu contraseña</p>
          <input className="input" name="pass" value={pass} onChange={saveRegistro}  placeholder="Contraseña" type={mostrar ? "text" : "password"}/>

          <p>Repite tu contraseña</p>
          <input className="input" name="pass2" placeholder="Repite contraseña" onChange={saveRegistro} value={pass2} type={mostrar ? "text" : "password"} />

          <br/>
          <br/>
          <button type="submit" className="btn_login">Crear cuenta</button>
        </form>
      </div>
    </div>
  </div>
);
