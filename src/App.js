import React from "react";
import Navbar from './components/Navbar/Navbar'; // Navbar is global
import Home from './components/Home/Home';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar /> {/* Render Navbar here */}
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
