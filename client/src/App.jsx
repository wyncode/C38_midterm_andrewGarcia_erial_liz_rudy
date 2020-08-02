import React, { useState, useEffect } from 'react';
import ErrorPage from './components/ErrorPage'
import MemePage from './components/MemePage'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    
    // <Router> 
    //   <Switch>
    //     <Route path="./MemePage.js" component={MemePage} />
    //     <HomePage />
    //     <Route path="./HomePage.js" component={HomePage} />
    //   </Switch>
    //   </Router>

    <SearchPage />
  )
};

export default App;
