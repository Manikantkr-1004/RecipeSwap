import './App.css';
import { Navbar } from "./Components/Navbar"
import { AllRoutes } from "./Routes/AllRoutes"
import { ScrollToTop } from "./Components/ScrollToTop"


function App() {
  return (
    <div className="App" >


      <AllRoutes/>
      <ScrollToTop />
    </div>
  );
}

export default App;
