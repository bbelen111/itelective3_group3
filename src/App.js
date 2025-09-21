import './App.css';
import Nav from './Nav';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Login from "./pages/login";
import AboutUs from "./pages/AboutUs";
import Organisation from "./pages/Organisation";

const NavBarLayout = () => (
  <>
    <Nav />
    <Outlet />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route element = {<NavBarLayout />}>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/Organisation" element={<Organisation />} />
          <Route exact path="/Login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
