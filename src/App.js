import React from 'react';

import Navigation from "./Pages/Navigation/Navigation";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import Services from "./Pages/Services/Services";
import Employees from "./Pages/Employees/Employees";
import EmployeeServices from "./Pages/EmployeServices/EmployeeServices";

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
    <Route exact path="/Employees/:employeeId" render={(props) => {
       return <EmployeeServices {...props} /> }} />
        
    <Route exact path="/Employees" render={(props) => {
       return <Employees {...props} /> }} />
          
    <Footer />
  </Router>
  );
}

export default App;
