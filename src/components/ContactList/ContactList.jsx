import { ContactItem } from '../ContactItem/ContactItem';
import s from './ContactList.module.css';

export const ContactList = () => {
  return (
    <ul className={s.list}>
      <ContactItem />
    </ul>
  );
};
