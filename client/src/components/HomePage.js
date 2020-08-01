import React from 'react'
import SearchNav from './SearchNav'
import TopicNav from './TopicNav'
import HomeBody from './HomeBody'
import MemePage from './MemePage'
import ErroePage from './ErrorPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const HomePage = () => {
    return (

          <Router>
          <TopicNav />
          <SearchNav />
            <Switch>
              <Route path="./MemePage.js" component={MemePage} />
              <Route path="./ErrorPage.js" component={ErroePage} />
              <Route path="./HomePage.js" component={HomePage} />
            </Switch>
            <HomeBody />
        </Router>
      );


    
}

export default HomePage