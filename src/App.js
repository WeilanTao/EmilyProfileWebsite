import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import Projects from "./components/projects";
import Blogs from "./components/blogs";
import Gallary from "./components/gallary";
import Contactme from "./components/contactme";
import NotFound from "./components/404";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <NavBar />

      <div className="App">
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/gallary" component={Gallary} />
          <Route path="/contactme" component={Contactme} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </>
  );
}

export default App;
