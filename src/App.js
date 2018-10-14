import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'unstated'
import './App.scss';
import Header from './components/Header'
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
              <Route exact path="/fav" component={props => <HomePage fav {...props} />} />
              <Route exact path="/contact/:id" component={Person} />
              <Route exact path="/contact/edit/:id" component={props => <Person edit   {...props} />} />
              <Route exact path="/contact/add/" component={props => <Person add  {...props} />} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
