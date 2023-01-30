import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useContext, useMemo, useState, useEffect } from 'react';
import { ContactsContext } from 'index';

export const App = () => {
  const [filter, setFilter] = useState('');
  const { contacts } = useContext(ContactsContext);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChangeFilter = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const filterContactsByName = useMemo(() => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }, [contacts, filter]);

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
      <ContactList contacts={filterContactsByName} />
    </div>
  );
};
