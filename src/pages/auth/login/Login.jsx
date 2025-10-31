import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-page">
      <h1>Iniciar Sesión</h1>
      <p className="subtitle">Bienvenido de nuevo. Accede a tu cuenta.</p>
      <div className="login-container">
        <form className="login-form">
          <label htmlFor="email">Email o Nombre de Usuario</label>
          <input type="text" id="email" placeholder="tu@ejemplo.com" required />

          <div className="password-section">
            <label htmlFor="password">Contraseña</label>
            <Link href="#" className="forgot-password">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <input
            type="password"
            id="password"
            placeholder="********"
            required
          />

          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
      <p className="register-text">
        ¿No tienes una cuenta? <Link to="/registro">Regístrate</Link>
      </p>
    </div>
  );
}

export default Login;
