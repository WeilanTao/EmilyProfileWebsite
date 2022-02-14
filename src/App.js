import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import Projects from "./components/projects";
import Blogs from "./components/blogs";
import Gallary from "./components/gallary";
import Contactme from "./components/contactme";

function App() {
  return (
    <div className="App">
      <Home />
      <Projects />
      <Blogs />
      <Gallary />
      <Contactme />
    </div>
  );
}

export default App;
