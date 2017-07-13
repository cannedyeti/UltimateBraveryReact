import React, { Component } from 'react';
import './App.css';
const Logo = require('./img/league-logo.png');
const Home = require('./components/Home');
const Nav = require('./components/Nav');
const UltimateContainer = require('./components/ultimate-bravery/UltimateContainer');
const Footer = require('./components/Footer');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <img alt="league-logo" className="league-logo" src={Logo} />
          <Nav />
          <div className="content-container">
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/ultimate-bravery' component={UltimateContainer}/>
              <Route render={function() {
                return <p>404 Not Found</p>
              }} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
