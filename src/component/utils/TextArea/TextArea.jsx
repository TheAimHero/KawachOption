import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './TextArea.module.css';

const style = {
  width: '100%',
  border: 'none',
  fontSize: '1.2rem',
  cursor: 'text',
  backgroundColor: 'grey',
  warp: 'hard',
  height: '200px',
};

TextArea.propTypes = {
  censorArr: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  title: PropTypes.string,
};

export default function TextArea(props) {
  const { censorArr, onChange } = props;
  const [textArea, setTextArea] = useState(censorArr.join(' '));

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(textArea.split(' ').filter((word) => word.trim() !== ''));
    }, 300);

    return () => clearTimeout(timeout);
  }, [onChange, textArea]);

  function onChangeWord(e) {
    setTextArea(e.target.value);
  }

  return (
    <textarea
      onChange={onChangeWord}
      style={style}
      className={styles.censorText}
      value={textArea}
    ></textarea>
  );
}
