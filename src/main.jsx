import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <App />
    <Footer />
  </React.StrictMode>
);
