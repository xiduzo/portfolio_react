import React, { Component } from "react";
// import { Router } from "react-router-dom";
// import createHistory from "history/createBrowserHistory";

import './normalize.css';
import './App.scss';

import MainNavigation from '../MainNavigation/MainNavigation';
import PortfolioItemGrid from '../PortfolioItemGrid/PortfolioItemGrid';

class App extends Component {
  state = {}

  render() {
    return (
      <main>
        <MainNavigation />
        <PortfolioItemGrid />
      </main>
    )
  }
}

export default App;
