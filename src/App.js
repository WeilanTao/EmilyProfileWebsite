import "./App.scss";
import Home from "./components/home";
import Projects from "./components/projects";
import Blogs from "./components/blogs";
import Contactme from "./components/contactme";
import NotFound from "./components/404";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";
import CanvasNest from "canvas-nest.js";
import React, { useEffect, useRef } from "react";

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const config = {
      pointColor: "211,211,211",
      pointR: 1,
      lineColor: "211,211,211",
      lineWidth: 1,
      count: 130,
    };

    const cn = new CanvasNest(canvasRef.current, config);

    return () => {
      cn.destroy();
    };
  }, []);

  return (
    <div className="App">
      <div
        ref={canvasRef}
        className="canvasNest"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -99,
        }}
      />

      <div className="Wrapper">
        <Header />
        <NavBar />

        <div className="content">
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contactme" element={<Contactme />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
