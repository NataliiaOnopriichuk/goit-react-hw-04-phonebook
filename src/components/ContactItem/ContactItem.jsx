import s from './ContactItem.module.css';
import { useContext } from 'react';
import { IsContactsContext } from 'index';

export const ContactItem = () => {
  const { contacts, setContacts } = useContext(IsContactsContext);

  return contacts.map(({ name, number, id }) => (
    <li key={id} className={s.listItem}>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        className={s.btnDelete}
        onClick={() => {
          setContacts(contacts.filter(el => el.id !== id));
        }}
      >
        Delete
      </button>
    </li>
  ));
};
