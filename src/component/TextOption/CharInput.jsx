import React from 'react';
import PropTypes from 'prop-types';

CharInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default function CharInput(props) {
  const { id, name, value, onChange, title, checked } = props;

  return (
    <div style={{ margin: '10px 0' }}>
      <input
        type="radio"
        onChange={onChange}
        id={id}
        name={name}
        value={value}
        checked={checked}
      />
      <label
        style={{ fontSize: '1.2rem', fontWeight: 'normal' }}
        htmlFor={id}
      >{`  ${title}`}</label>
    </div>
  );
}
