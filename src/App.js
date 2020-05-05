import React, { Component } from 'react';

import Navigation from "./Pages/Navigation/Navigation";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";

import Auth from "./Pages/Login/Auth";
import Services from "./Pages/Services/Services";
import Employees from "./Pages/Employees/Employees";
import EmployeeServices from "./Pages/EmployeServices/EmployeeServices";

import Home from "./Pages/Home/Home";

import {BrowserRouter as Router,Route} from "react-router-dom";

import './App.css';


 class App extends Component{
   state = {
      user: false
    }
   
    // Check if credentials are in local storage
    // returns true/false
    isAuthenticated = () => localStorage.getItem("credentials") !== null
   
    setUser = (authObj) => {
      /*
        For now, just store the email and password that
        the customer enters into local storage.
      */
      localStorage.setItem(
        "credentials",
        JSON.stringify(authObj)
      )
      this.setState({
        user: this.isAuthenticated()
      });
    }
   
    clearUser = () => {
    // removes what is in localStorage when the user logs out and updates state for cars
        // localStorage.clear() removes everything in local storage
        localStorage.removeItem("credentials")
   
        this.setState({user: this.isAuthenticated})
    }
   
    componentDidMount(){
      this.setState({
        user: this.isAuthenticated()
      })
    }
    render(){
   return (
   <Router>
    <Header />
    <Navigation user={this.state.user} clearUser={this.clearUser} />
    <Route path="/auth" render={(props) => {
            return <Auth setUser={this.setUser} {...props} /> 
            }} />
    <Route exact path="/" component={Home} />
    <Route exact path="/Services" component={Services} />
    <Route exact path="/Employees/:employeeId" render={(props) => {
       return <EmployeeServices {...props} /> }} />
        
    <Route exact path="/Employees" render={(props) => {
       return <Employees {...props} /> }} />
      
    
  </Router>
  );
}
}
export default App;
