import './App.css';
import { Navbar } from "./Components/Navbar"
import { AllRoutes } from "./Routes/AllRoutes"
import { Footer } from "./Components/Footer"
import { ScrollToTop } from "./Components/ScrollToTop"
import { Admin } from './Pages/Admin';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Admin />
      {/* <AllRoutes /> */}
      {/* <Footer /> */}

    </div>
  );
}

export default App;
