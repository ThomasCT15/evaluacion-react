import './Home.css'
import { Link } from 'react-router-dom'

function Home(){
    return(
            <div className="page">
      {/* HEADER */}
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">Mi Aplicación</div>

          <nav className="nav">
            <Link className="nav-link" to="/login">
              Iniciar Sesión
            </Link>
            <Link className="btn register" to="/registro">
              Registrarse
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <h1 className="hero-title">
            Bienvenido a Nuestra <br />
            <span>Plataforma</span>
          </h1>
          <p className="hero-desc">
            Un espacio diseñado para simplificar tus tareas y potenciar tu
            productividad. Empieza en segundos.
          </p>

          <Link className="cta" to="/Dashboard">
            Comenzar Ahora
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="container features-inner">
          <h2 className="section-title">Características Principales</h2>
          <p className="section-sub">
            Descubre cómo nuestra plataforma puede ayudarte a alcanzar tus
            objetivos de manera más eficiente.
          </p>

          <div className="cards">
            <article className="card">
              <h3>Gestión Centralizada</h3>
              <p>
                Accede y administra todas tus herramientas y datos desde un
                único panel de control intuitivo.
              </p>
            </article>

            <article className="card">
              <h3>Flujos de Trabajo Ágiles</h3>
              <p>
                Optimiza tus procesos y colabora con tu equipo en tiempo real
                para una mayor productividad.
              </p>
            </article>

            <article className="card">
              <h3>Seguridad Confiable</h3>
              <p>
                Mantenemos tu información segura con protocolos de encriptación
                y protección de última generación.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="links">
            <Link to="#">Términos de Servicio</Link>
            <Link to="#">Política de Privacidad</Link>
            <Link to="#">Contacto</Link>
          </div>

          <small>© 2024 Mi Aplicación. Todos los derechos reservados.</small>
        </div>
      </footer>
    </div>
    )
}

export default Home