import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import Projects from "./components/projects";
import Blogs from "./components/blogs";
import Contactme from "./components/contactme";
import NotFound from "./components/404";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";
import ReactCanvasNest from "react-canvas-nest";

function App() {
  return (
    <div height="1440" width="3060">
      <ReactCanvasNest
        className="canvasNest"
        config={{
          pointColor: " 255, 255, 255 ",
          pointR: "0",
          lineColor: "255,204,204",
          lineWidth: "3",
          count: "100",
        }}
        style={{ zIndex: -1 }}
      />
      <Header />
      <NavBar />

      <div className="App">
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contactme" element={<Contactme />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/" exact element={<Home />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
