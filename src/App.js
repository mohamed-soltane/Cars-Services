import React from 'react';

import Navigation from "./Pages/Navigation";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";

import {BrowserRouter as Router,Route} from "react-router-dom";

import './App.css';

function App() {
  return (
   <Router>
    <Header />
    <Navigation />
    <Footer />
  </Router>
  );
}

export default App;
