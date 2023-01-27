import { ContactItem } from '../ContactItem/ContactItem';
import s from './ContactList.module.css';
import { useContext } from 'react';
import { IsContactsContext } from 'index';

export const ContactList = () => {
  const { contacts } = useContext(IsContactsContext);

  return (
    <ul className={s.list}>
      {contacts.map(item => (
        <ContactItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
