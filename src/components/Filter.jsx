import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <div>
    <label>
      Find contacts by Name
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{  marginLeft: '10px' }}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

