import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header'
import Tabs from './components/Tabs';
import Divider from './components/Divider'
import SearchBar from './components/SearchBar';
import ContactCard from './components/ContactCard/ContactCard';
import CardNew from './components/ContactCard/CardNew';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='test'>
          <Header />
          <Tabs />
          <Divider green />
          <SearchBar />
          <div className='container'>
            <div className='contact-card--list'>
              <CardNew />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
              <ContactCard />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
