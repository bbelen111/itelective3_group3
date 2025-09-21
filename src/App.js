import './App.css';
import Nav from './Nav';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import Organisation from "./pages/Organisation";
import { AuthProvider } from './AuthContext';

const NavBarLayout = () => (
  <>
    <Nav />
    <Outlet />
  </>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Pages without navbar */}
          <Route exact path="/Login" element={<Login />} />
          {/* Pages with navbar */}
          <Route element={<NavBarLayout />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/AboutUs" element={<AboutUs />} />
            <Route exact path="/Organisation" element={<Organisation />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
