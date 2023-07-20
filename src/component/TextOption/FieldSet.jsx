import React from 'react';

import CharInput from './CharInput';

const style = {
  width: '70%',
  border: '2px solid black',
  fontWeight: 'normal',
  margin: '20px 20px',
};

export default function FieldSet(props) {
  const { onChange, censorChar } = props;

  return (
    <fieldset style={style}>
      <legend>Select a Censor Char</legend>
      <CharInput
        onChange={onChange}
        id="asterisk"
        name="censor-char"
        checked={censorChar === '*'}
        value="*"
        title="* Astrisk"
      />
      <CharInput
        onChange={onChange}
        id="dash"
        checked={censorChar === '-'}
        name="censor-char"
        value="-"
        title="- Dash"
      />
      <CharInput
        onChange={onChange}
        id="block"
        name="censor-char"
        checked={censorChar === '█'}
        value="█"
        title="█ Block"
      />
    </fieldset>
  );
}
