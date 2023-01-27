import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useContext, useMemo, useState } from 'react';
// import { IsContactsContext } from 'index';

export const App = () => {
  const [filter, setFilter] = useState('');

  // const { contacts, setContacts } = useContext(IsContactsContext);

  const handleChangeFilter = e => {
    const { value } = e.target;
    setFilter(value);
  };

  // const filteredTodo = useMemo(() => {
  //   setContacts(() => {
  //     return contacts.filter(({ name }) =>
  //       name.toLowerCase().includes(filter.toLowerCase().trim())
  //     );
  //   });
  // }, [contacts, filter]);

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
      <Filter nameFilter={filter} handleChangeFilter={handleChangeFilter} />
      <ContactList />
    </div>
  );
};

// export class App extends Component {

//   filterContactsByName = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase().trim())
//     );
//   };

//   componentDidMount() {
//     const localStorageData = JSON.parse(localStorage.getItem('contacts'));

//     if (localStorageData) {
//       this.setState({ contacts: localStorageData });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }
