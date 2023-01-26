import { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  addUserName = e => {
    this.setState({ name: e.target.value });
  };

  addUserPhone = e => {
    this.setState({ number: e.target.value });
  };

  handleReset = () => {
    this.setState({ name: '', number: '' });
  };

  addContact = e => {
    e.preventDefault();

    if (
      this.props.contacts.some(
        ({ name }) =>
          name.toLowerCase().trim() === this.state.name.toLowerCase().trim()
      )
    )
      return alert(`${this.state.name} is already in contacts`);

    this.props.onAddContact({
      name: this.state.name,
      phoneNumber: this.state.number,
      id: nanoid(),
    });

    this.handleReset();
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.addContact}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.addUserName}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.addUserPhone}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
};
