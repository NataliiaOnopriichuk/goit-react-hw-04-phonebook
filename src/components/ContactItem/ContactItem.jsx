import css from './ContactItem.module.css';
import { useContext } from 'react';
import { ContactsContext } from 'index';
import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, id }) => {
  const { contacts, setContacts } = useContext(ContactsContext);

  return (
    <li className={css.listItem}>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        className={css.btnDelete}
        onClick={() => {
          setContacts(contacts.filter(el => el.id !== id));
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
