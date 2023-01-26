import { ContactItem } from '../ContactItem/ContactItem';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul className={s.list}>
      <ContactItem
        contacts={contacts}
        removeContact={removeContact}
      ></ContactItem>
    </ul>
  );
};

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
};
