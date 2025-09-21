import { React } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid justify-content-center">
        <div className="collapse navbar-collapse justify-content-center" id="navbarColor01">
          <ul className="navbar-nav d-flex flex-row justify-content-center w-100" style={{gap: '2rem'}}>
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/AboutUs" activeClassName="active">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Organisation" activeClassName="active">Organisation</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Login" activeClassName="active">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;