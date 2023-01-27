import { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChangeFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  filterContactsByName = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  componentDidMount() {
    const localStorageData = JSON.parse(localStorage.getItem('contacts'));

    if (localStorageData) {
      this.setState({ contacts: localStorageData });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter
          nameFilter={this.state.filter}
          handleChangeFilter={this.handleChangeFilter}
        />
        <ContactList />
      </div>
    );
  }
}
