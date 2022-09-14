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
import AddService from "./components/pages/adminResources/AddService";
import CommonContact from "./components/pages/adminResources/CommonContact";
import EnquiryContact from "./components/pages/adminResources/EnquiryContact"
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
            <Route path="/addService" element={<AddService />} exact></Route>
            <Route path="/adminCommonContact" element={<CommonContact />} exact></Route>
            <Route path="/EnquiryContact" element={<EnquiryContact />} exact></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      <Footer />
    </>);
}

export default App;
