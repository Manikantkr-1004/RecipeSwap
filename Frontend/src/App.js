import './App.css';
import { Navbar } from "./Components/Navbar"
import { AllRoutes } from "./Routes/AllRoutes"
import { Footer } from "./Components/Footer"
import { ScrollToTop } from "./Components/ScrollToTop"
import { Admin } from './Pages/Admin';
import { AdminRoutes } from './Routes/AdminRoutes';

function App() {
  return (
    <div className="App">
<AllRoutes/>
      <ScrollToTop />
        
    </div>
  );
}

export default App;
