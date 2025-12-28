import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-117px)]">
        <Outlet/>
      </div>
      <Footer/>

    </>
  );
}

export default App;
