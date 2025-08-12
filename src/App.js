import './style.css';
import Rentcar from "./pages/Rentcar.jsx";
import Addcar from "./pages/Addcar.jsx";
import Home from './Home.jsx';
import Updatecustomer from './pages/Updatecustomer.jsx';
import Addcustomer from './pages/Addcustomer.jsx';
import Customers from './pages/Customers.jsx';
import Updatecar from "./pages/Updatecar.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/Rentcar" element={<Rentcar />}/>
        <Route path="/Addcar" element={<Addcar />}/>
        <Route path="/Updatecar/:id" element={<Updatecar />}/>
          <Route path="/Customers" element={<Customers />} />
          <Route path="/Addcustomer" element={<Addcustomer />} />
          <Route path="/Updatecustomer/:id" element={<Updatecustomer />} />
  
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
