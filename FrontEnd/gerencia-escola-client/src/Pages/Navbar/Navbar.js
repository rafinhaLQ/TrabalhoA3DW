import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Header = () => {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)}
        to="/">
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)}
        to="/alunos">
        Alunos
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)}
        to="/professores">
        Professores
      </NavLink>
    </nav>
  );
}


export default Header;
