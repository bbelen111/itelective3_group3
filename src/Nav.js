import { React } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth, userColors } from './AuthContext';

function Nav() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleUserClick = (e) => {
    e.preventDefault();
    logout();
    navigate('/');
  };

  // Determine navbar style and user link based on authentication state
  let userLink = null;
  let navbarStyle = {};
  if (user) {
    const colorInfo = userColors[user.colorKey];
    if (colorInfo?.styleType === 'gradient') {
      navbarStyle = { background: colorInfo.gradient };
    } else if (colorInfo?.color) {
      navbarStyle = { backgroundColor: colorInfo.color };
    }
    userLink = (
      <a href="#logout" className="nav-link fw-semibold" onClick={handleUserClick} title="Click to logout">
        {user.firstName}
      </a>
    );
  } else {
    userLink = <NavLink className="nav-link" to="/Login">Login</NavLink>;
  }

  // Apply dark text class for certain users for better contrast
  const darkTextUsers = ['Bucky', 'Ava', 'John'];
  const extraClass = user && darkTextUsers.includes(user.firstName) ? 'dark-text' : '';
  return (
  <nav className={`navbar navbar-expand-lg ${extraClass}`} data-bs-theme="dark" style={navbarStyle.background || navbarStyle.backgroundColor ? navbarStyle : { backgroundColor: '#0d6efd' }}>
      <div className="container-fluid justify-content-center">
        <div className="collapse navbar-collapse justify-content-center" id="navbarColor01">
          <ul className="navbar-nav d-flex flex-row justify-content-center w-100" style={{gap: '2rem'}}>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/AboutUs">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Organisation">Organisation</NavLink>
            </li>
            <li className="nav-item">
              {userLink}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;