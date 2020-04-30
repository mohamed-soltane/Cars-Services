import React from 'react';

import Navigation from "./Pages/Navigation";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Services from "./Pages/Services";
import Employes from "./Pages/Employes";
import Home from "./Pages/Home";

import {BrowserRouter as Router,Route} from "react-router-dom";

import './App.css';

function App() {
  return (
   <Router>
    <Header />
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route exact path="/Services" component={Services} />
    <Route path="/Employes" component={Employes} />
    <Footer />
  </Router>
  );
}

export default App;
