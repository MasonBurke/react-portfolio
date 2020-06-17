import React from 'react';
import './App.css';
import Navbar1 from "./components/Navbar"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
<Navbar1 />
<Router>
<Switch>
<Route exact path="/" component={Home} />
<Route exact path="/home" component={Home} />
<Route exact path="/projects" component={Projects} />
<Route exact path="/contact" component={Contact} />
</Switch>
</Router>
<Footer />

    </div>
  );
}

export default App;
