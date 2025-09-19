import './App.css';
import Nav from './Nav';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Login from "./pages/login";
import Calculator from "./pages/Calculator";

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
          <Route exact path="/Portfolio" element={<Portfolio />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Calculator" element={<Calculator />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
