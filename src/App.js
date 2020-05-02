import React from 'react';

import Navigation from "./Pages/Navigation/Navigation";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import Services from "./Pages/Services/Services";
import Employes from "./Pages/Employes/Employes";
import EmployeServices from "./Pages/EmployeServices/EmployeServices";

import Home from "./Pages/Home/Home";

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
    <Route path="/Employes/:EmployeID" component={EmployeServices} />
    <Footer />
  </Router>
  );
}

export default App;
