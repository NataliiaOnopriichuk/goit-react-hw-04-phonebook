import { memo, useContext, useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { ContactsContext } from 'index';

export const ContactForm = memo(() => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { contacts, setContacts } = useContext(ContactsContext);

  const options = { name: setName, number: setNumber };

  const addUserInfoToForm = event => {
    const { name, value } = event.target;
    options[name](value);
  };

  const handleReset = () => {
    setName('');
    setNumber('');
  };

  const addContact = event => {
    event.preventDefault();

    if (
      contacts.some(
        el => el.name.toLowerCase().trim() === name.toLowerCase().trim()
      )
    )
      return alert(`${name} is already in contacts`);

    setContacts(prev => [...prev, { name, number, id: nanoid() }]);
    handleReset();
  };

  return (
    <form className={css.form} onSubmit={addContact}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={addUserInfoToForm}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={addUserInfoToForm}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
});
