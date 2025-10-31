import './MenuAside.css'
import { Link } from 'react-router-dom'

function MenuAside (){
    return(
        <aside className='aside-container'>
            <h2 className='logo-aside'>N</h2>
            <h3 className='title-aside'>Nombre App</h3>
            <Link className='links-aside' to= "">Dashboard</Link>
            <Link className='links-aside' to= "">Perfil</Link>
            <Link className='links-aside' to= "">Configuracion</Link>
            <Link className='links-aside' to= "">Cerrar sesion</Link>
        </aside>
    )
}

export default MenuAside