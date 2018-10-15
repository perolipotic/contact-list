import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider, Subscribe } from 'unstated'
import './App.scss';
import Header from './components/Header'
import HomePage from './container/HomePage';
import Person from './container/Person';
import ContactsContainer from './unstated/ContactsContainer'

const ConnectedPerson = () => {
  return (
    <Subscribe to={[ContactsContainer]}>
      {({ state: { contacts } }) => (
        <Person contacts={contacts} />)}
    </Subscribe>
  )
}
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
              <Route exact path="/contact/:id" component={ConnectedPerson} />
              <Route exact path="/contact/edit/:id" component={props => <ConnectedPerson   {...props} />} />
              <Route exact path="/contact/add/:id" component={props => <ConnectedPerson  {...props} />} />
            </Switch>
          </Router>
        </div>
      </Provider>

    );
  }
}

export default App;
