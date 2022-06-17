import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

function NavBar() {
    return (
      <nav className='NavBar'>  
        <ul>
            <li><Link to='/Inicio'>Inicio</Link></li>
            <li><Link to='/productos'>Productos</Link></li>
            <li><Link to='/info'>Info</Link></li>
            <a href=""><li><CartWidget/></li></a>
        </ul>
      </nav>
    )
  }

export default NavBar