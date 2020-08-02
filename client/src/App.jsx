import React, { useState, useEffect } from 'react';
//import ErrorPage from './components/ErrorPage'
import MemePage from './components/MemePage';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import SearchNav from './components/SearchNav';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  
  return (
    <Router>
      <SearchNav searchTerm={searchTerm} setResults={setResults}setSearchTerm={setSearchTerm}/>
      <Switch>
        <Route exact path="/meme/:id" component={MemePage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search" render={(props) =>{
          return <SearchPage {...props} results={results}/>
        }} />
      </Switch>
    </Router>
  );
};

export default App;
