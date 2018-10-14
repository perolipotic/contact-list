import { Container } from 'unstated'
import persons from '../persons.json'

const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}

const loadData = key => {
  const data = localStorage.getItem(key)

  return JSON.parse(data)
}

export default class ContactsContainer extends Container {
  state = {
    contacts: loadData('contacts') || persons,
    searchValue: '',
  }

  saveContacts = () => saveData('contacts', this.state.contacts)

  toggleFavourite = async id => {
    await this.setState({
      contacts: this.state.contacts.map(contact => contact.id === id
        ? { ...contact, isFavourite: !contact.isFavourite }
        : contact)
    })

    this.saveContacts()
  }

  onSearchChange = e => {
    this.setState({ searchValue: e.target.value })
  }

  getFilteredContacts = () => {
    const { searchValue, contacts } = this.state;
    let filteredPersons = contacts.filter(person => {
      const fullName = person.name + ' ' + person.lastName;
      return fullName.toLowerCase().includes(searchValue.toLowerCase())
    })

    return filteredPersons
  }
}
