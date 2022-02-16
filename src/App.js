import logo from "./logo.svg";
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
import ReactCanvasNest from "react-canvas-nest";

function App() {
  return (
    <div className="App">
      <ReactCanvasNest
        className="canvasNest"
        config={{
          pointColor: " 0,0,0 ",
          pointR: "1",
          lineColor: "0,0,0",
          lineWidth: "1",
          count: "130",
        }}
        style={{ zIndex: -99 }}
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
            <Route path="/" exact element={<Home />} />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
