import React from 'react'
import { Subscribe } from 'unstated'
import Tabs from '../components/Tabs';
import Divider from '../components/Divider'
import SearchBar from '../components/SearchBar';
import ContactCard from '../components/ContactCard/ContactCard';
import CardNew from '../components/ContactCard/CardNew';
import ContactsContainer from '../unstated/ContactsContainer';



const HomePage = () => (
  <div className='test'>
    <Tabs />
    <Divider green />
    <Subscribe to={[ContactsContainer]}>
      {({ state: { searchValue }, onSearchChange }) => (
        <SearchBar
          searchValue={searchValue}
          onTextChange={onSearchChange}
        />
      )}
    </Subscribe>
    <div className='contact-card--list'>
      <CardNew />
      <Subscribe to={[ContactsContainer]}>
        {({ getFilteredContacts }) => getFilteredContacts().map(person =>
          <ContactCard key={person.id} person={person} />
        )}
      </Subscribe>
    </div>
  </div>
)

export default HomePage
