import PropTypes from 'prop-types';

const ContactFilter = ({ value, onChange }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default ContactFilter;

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
