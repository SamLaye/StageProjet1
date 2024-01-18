import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css"
import './App.css';
import Template from "./layout/Template"
import Sidebar from "./dashboard/Sidebar"
import Navbar from "./dashboard/Navbar"
import Connexion from './pages/Connexion';
import Stats from './components/Stats'
import EnTete from './components/EnTete';

function App() {
  return (
      <Template
        sidebar={<Sidebar />}
        navbar={<Navbar />}
      >
        <div>
          <EnTete/>
          <Stats/>
        </div>
      </Template>
  );
}

export default App;
