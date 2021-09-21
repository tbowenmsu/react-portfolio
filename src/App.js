import {BrowserRouter, Route, Switch} from "react-router-dom"
//components
import Homepage from "./components/Homepage";
//hamburger menu button
import Menu from "./components/Menu";
//Pages
import Projects from "./pages/Projects";
//Error page
import Error from "./pages/Error";
//Contact Me page
import Contacts from "./pages/Contacts";
//AboutMe Page
import AboutMe from "./pages/AboutMe";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" exact>          
          <Homepage />   
        </Route>
        <Route path="/AboutMe">
          <AboutMe />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact-me">
          <Contacts />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
