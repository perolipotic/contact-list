import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'unstated'
import './App.scss';
import Header from './components/Header'
import persons from './persons'


import HomePage from './container/HomePage';
import Person from './container/Person';


class App extends Component {
  render() {
    return (
      <Provider>
        <Header />
        <div className='container'>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/person/:id" component={Person} />
              <Route exact path="/person/edit/:id" component={props => <Person edit {...props} />} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
