import "./App.css";
import Home from "./Pages/home";
import Events from "./Pages/events";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";





function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </>
  );
}







export default App;
