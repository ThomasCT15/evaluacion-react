import CardsDashboard from "../../components/CardsDashboard";
import MenuAside from "../../components/MenuAside";
import "./Dashboard.css";
import iconUsuario from '../../assets/icon-usuario.png'

function Dashboard() {
  return (
    <div>
      <MenuAside />
      <header className="dashboard-header">
        <h2 className="header-title">Bienvenido de nuevo</h2>

      <div className="header-user">
        <div className="notification-dot"></div>
        <img src={iconUsuario} alt="User-Avatar" className="user-avatar" />
      </div>
      </header>
      <CardsDashboard />
    </div>
  );
}

export default Dashboard;
