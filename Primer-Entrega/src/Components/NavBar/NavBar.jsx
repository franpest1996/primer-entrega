import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

function NavBar() {
    return (
      <nav className='NavBar'>  
        <ul>
            <li><NavLink to='/Inicio'>Inicio</NavLink></li>
            <li><NavLink to='/productos'>Productos</NavLink></li>
            {/* <li><NavLink to='/info'>Info</NavLink></li> */}
            <li><NavLink to='/cart'><CartWidget/></NavLink></li>
        </ul>
      </nav>
    )
  }

export default NavBar