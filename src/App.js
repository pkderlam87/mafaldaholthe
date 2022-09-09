/**Import Router DOM */
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Detail from "./components/pages/Detail";
import Login from "./components/pages/Login";
import Admin from "./components/pages/Admin";
import SuperAdmin from "./components/pages/SuperAdmin";
import NavBar from "./components/layout/NavBar";
import { AuthProvider } from "./components/context/AuthContext";
import Footer from "./components/layout/Footer";
import './sass/styles.scss';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/SuperAdmin" element={<SuperAdmin />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <Footer />
    </>);
}

export default App;
