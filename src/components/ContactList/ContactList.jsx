import { ContactItem } from '../ContactItem/ContactItem';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts }) => {
  return (
    <ul className={s.list}>
      {contacts.map(item => (
        <ContactItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
