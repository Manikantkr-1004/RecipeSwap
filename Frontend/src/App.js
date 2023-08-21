import './App.css';
import {Navbar} from "./Components/Navbar"
import {AllRoutes} from "./Routes/AllRoutes"
import {Footer} from "./Components/Footer"
import {ScrollToTop} from "./Components/ScrollToTop"

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
