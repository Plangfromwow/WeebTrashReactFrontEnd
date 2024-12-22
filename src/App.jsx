import "./App.css";
import Home from "./Pages/home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Events from "./Pages/events";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          {/* <Route path="/store" element={<ComingSoon/>} / > */}
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
