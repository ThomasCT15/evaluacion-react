import './Registro.css'
import { Link } from 'react-router-dom'

function Registro(){
    return(
 <div className="register-wrapper">
      {/* Título y subtítulo FUERA de la tarjeta */}
      <div className="register-header">
        <h1 className="register-title">Crea tu Cuenta</h1>
        <p className="register-subtitle">
          Regístrate para empezar a usar la aplicación.
        </p>
      </div>

      {/* Tarjeta del formulario */}
      <div className="register-container">
        <form className="register-form">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" placeholder="Ingresa tu nombre" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" placeholder="tucorreo@ejemplo.com" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Crea una contraseña segura"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Vuelve a escribir la contraseña"
            />
          </div>

          <button type="submit" className="btn-register">
            Registrarse
          </button>
        </form>

        <p className="register-footer">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="login-link">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
    )
}

export default Registro