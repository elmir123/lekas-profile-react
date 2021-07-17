import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Nav";
// import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { HashRouter, Switch, Route} from 'react-router-dom';




function App() {
  return (
    <HashRouter basename="/">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route>
          <About />
        </Route>
      </Switch>
    </HashRouter>
  );
}





export default App;
