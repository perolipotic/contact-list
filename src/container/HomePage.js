import React, { Component } from 'react'
import Tabs from '../components/Tabs';
import Divider from '../components/Divider'
import SearchBar from '../components/SearchBar';
import ContactCard from '../components/ContactCard/ContactCard';
import CardNew from '../components/ContactCard/CardNew';



class HomePage extends Component {
  state = {
    searchValue: '',
  }
  onTextChange = e => {
    this.setState({ searchValue: e.target.value })
  };

  render() {
    const { persons } = this.props;
    const { searchValue } = this.state;


    let extendPersons = persons.map(person => {
      const fullName = person.name + ' ' + person.lastName;
      return { ...person, fullName }
    })

    const filteredPersons = extendPersons.filter(person =>
      person.fullName.toLowerCase().includes(searchValue.toLowerCase())
    )

    return (
      <div className='test'>
        <Tabs />
        <Divider green />
        <SearchBar
          searchValue={searchValue}
          onTextChange={this.onTextChange}
        />
        <div className='contact-card--list'>
          <CardNew />
          {filteredPersons.map(person =>
            <ContactCard
              key={person.id} person={person}
            />
          )}
        </div>
      </div>

    )
  }
}

export default HomePage
