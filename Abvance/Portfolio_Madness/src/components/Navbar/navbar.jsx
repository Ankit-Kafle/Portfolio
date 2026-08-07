import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="left">Ankit's Portfolio</div>
        <div className="right">
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => isActive ? "active-link" : ""}>Services</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>Projects</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact Me</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar