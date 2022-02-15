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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
