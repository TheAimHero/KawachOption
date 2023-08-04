import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';

function Input(props) {
  const { defaultValue, type, inputMode, min, max, title, onChange } = props;

  return (
    <div className={styles.inputDiv}>
      <label className={styles.label} htmlFor="ip">
        {title}
      </label>
      <input
        type={type}
        inputMode={inputMode}
        className={styles.input}
        pattern="[0-9]"
        onChange={onChange}
        id="ip"
        value={defaultValue}
        name="minDim"
        min={min}
        max={max && max}
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  title: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  inputMode: PropTypes.string,
};

export default Input;
