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
    let filteredPersons = contacts.filter(contact => {
      return contact.fullName.toLowerCase().includes(searchValue.toLowerCase())
    })

    return filteredPersons
  }

  newID = (contacts) => {
    let idArr = []
    contacts.map(contact => {

      return idArr.push(contact.id)
    })
    return Math.max(...idArr) + 1
  }

  addNewContact = async (contacts, newContact) => {
    await this.setState({
      contacts: [...contacts, newContact]
    })
    this.saveContacts()
  }
  updateContact = async (contacts, values, _id) => {
    let updContacts = contacts.map(contact => {
      return contact.id === parseInt(_id) ? contact = values : contact
    })
    await this.setState({ contacts: updContacts })
    this.saveContacts()
  }
  deleteContact = (contacts, _id) => {
    let removeIndex = contacts.findIndex(item => item.id === parseInt(_id))
    contacts.splice(removeIndex, 1)
    this.saveContacts()
  }
}



