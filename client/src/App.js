import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import "./cab.jpg"

import Home from './Pages/Homepage';
import Dashboard from './Pages/Dashboard';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Trip from './Components/Trip';
import Driver from './Components/Driver';

function App() {
  return (
      <React.Fragment>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/driver" exact component={Driver} />
        <Footer />
      </React.Fragment>
  );
}

export default App;
