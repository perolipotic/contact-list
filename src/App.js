import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider, Subscribe } from 'unstated'
import './App.scss';
import Header from './components/Header'
import HomePage from './container/HomePage';
import Person from './container/Person';
import ContactsContainer from './unstated/ContactsContainer'
import Modal from './components/Modal';

const ConnectedPerson = () => {
  return (
    <Subscribe to={[ContactsContainer]}>
      {({ state: { contacts }, newID, addNewContact, updateContact, deleteContact }) => (
        <Person
          contacts={contacts}
          newID={newID}
          addNewContact={addNewContact}
          updateContact={updateContact}
          deleteContact={deleteContact}
        />)}
    </Subscribe>
  )
}
class App extends Component {
  render() {
    return (
      <Provider>
        <Subscribe to={[ContactsContainer]}>
          {({ state: { isOpen } }) => (<Modal isOpen={isOpen}></Modal>)}
        </Subscribe>
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
