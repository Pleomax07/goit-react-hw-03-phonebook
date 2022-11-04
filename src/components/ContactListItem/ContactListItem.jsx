import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

const ContactListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li className={css.contactListItem}>
      {name}:{number}
      <button
        className={css.button}
        type="button"
        id={id}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};
export default ContactListItem;

ContactListItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
