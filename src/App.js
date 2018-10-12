import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Header from './components/Header'
import persons from './persons'


import HomePage from './container/HomePage';
import Edit from './container/Edit';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className='container'>
          <Router>
            <Switch>
              <Route exact path="/" component={() => <HomePage persons={persons} />} />
              <Route exact path="/edit" component={Edit} />
            </Switch>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
