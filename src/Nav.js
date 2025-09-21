import { React } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
<nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <NavLink classname="nav-brand" to="/Home">My Portfolio Page</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <NavLink classname="nav-link" to="/" activeclassname = "active">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink classname="nav-link" to="/AboutUs" activeclassname = "active">About Us</NavLink>
        </li>
        <li class="nav-item">
          <NavLink classname="nav-link" to="/Organisation" activeclassname = "active">Organisation</NavLink>
        </li>
        <li class="nav-item">
          <NavLink classname="nav-link" to="/Login" activeclassname = "active">Login</NavLink>
        </li>
        
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search"></input>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
);
}

export default Nav;