import { memo, useContext, useState } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';
import { IsContactsContext } from 'index';

export const ContactForm = memo(() => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { contacts, setContacts } = useContext(IsContactsContext);

  const options = { name: setName, number: setNumber };

  const addUserInfoToForm = e => {
    const { name, value } = e.target;
    options[name](value);
  };

  const handleReset = () => {
    setName('');
    setNumber('');
  };

  const addContact = e => {
    e.preventDefault();

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
    <form className={s.form} onSubmit={addContact}>
      <label className={s.label}>
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
      <label className={s.label}>
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
