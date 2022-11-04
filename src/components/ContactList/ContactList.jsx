import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.contactList}>
    {contacts.map(({ name, number, id }) => (
      <ContactListItem
        key={name}
        name={name}
        number={number}
        id={id}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};
