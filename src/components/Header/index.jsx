import { NavLink, Link } from 'react-router-dom'
import '../../styles/header.css'
import logo from '../../assets/logo.svg'

function Header() {
    return (
        <header>
            <div>
                <Link to="/">
                    <img src={logo} alt="Logo SportSee" className="header-logo" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/">Profil</NavLink></li>
                    <li><NavLink to="/">Réglage</NavLink></li>
                    <li><NavLink to="/">Communauté</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header