import "./CardsDashboard.css";

function CardsDashboard() {
  return (
    <section className="dashboard-container">
      <h1 className="dashboard-title">Panel de Control</h1>
      <p className="dashboard-subtitle">
        Un resumen de la actividad de tu cuenta.
      </p>

      <div className="cards-container">
        <div className="card card-projects">
          <h3 className="card-label">Proyectos Activos</h3>
          <p className="card-number">12</p>
        </div>

        <div className="card card-tasks">
          <h3 className="card-label">Tareas Completadas</h3>
          <p className="card-number">86</p>
        </div>

        <div className="card card-alerts">
          <h3 className="card-label">Alertas</h3>
          <p className="card-number">3</p>
        </div>

        <div className="card card-members">
          <h3 className="card-label">Miembros del equipo</h3>
          <p className="card-number">8</p>
        </div>
      </div>
      <div className="bottom-section">
        <div className="card-notifications">
          <h2 className="notifications-title">Notificaciones</h2>

          <div className="notification-item">
            <h3 className="notification-title">
              Actualización del sistema programada
            </h3>
            <p className="notification-text">
              El mantenimiento se realizará el 25 de Diciembre a las 10 P.M.
            </p>
          </div>

          <div className="notification-item">
            <h3 className="notification-title">Nueva factura disponible</h3>
            <p className="notification-text">
              Tu factura de Noviembre ya está lista para descargar.
            </p>
          </div>

          <div className="notification-item">
            <h3 className="notification-title">Recordatorio de reunión</h3>
            <p className="notification-text">
              Tienes una reunión de equipo hoy a las 3 P.M.
            </p>
          </div>

          <a href="#" className="view-all">
            Ver todas las notificaciones
          </a>
        </div>

        <div className="card-shortcuts">
          <h2 className="shortcuts-title">Accesos Directos</h2>

          <div className="shortcuts-buttons">
            <button className="btn-primary">Crear Nuevo Proyecto</button>
            <button className="btn-secondary">Añadir Tarea</button>
            <button className="btn-secondary">Invitar Miembro</button>
            <button className="btn-secondary">Generar Reporte</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardsDashboard;
