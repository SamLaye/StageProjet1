import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css"
import './App.css';
import { BrowserRouter as Roots, Routes, Route } from "react-router-dom"
import Template from "./layout/Template"
import Sidebar from "./dashboard/Sidebar"
import Navbar from "./dashboard/Navbar"
import Stats from './components/Stats'
import Cards from './components/Cards'
import EnTete from './components/EnTete';
import Auth from './pages/Auth';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import ForgetPSW from './pages/ForgetPSW';

function App() {
  return (
      <Template
        sidebar={<Sidebar />}
        navbar={<Navbar />}
      >
        <Routes>
          <Route path='/timeline/stats' element={<Stats />} />
          <Route path='/timeline/cards' element={<Cards />} />
        </Routes>
      </Template>
      
  );
}

export default App;
