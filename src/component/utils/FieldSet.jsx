import React from 'react';

const style = {
  width: '70%',
  border: '2px solid black',
  justifyContent: 'space-between',
  paddingInline: '40px',
  paddingBlock: '10px',
  fontWeight: 'normal',
  display: 'flex',
  margin: '20px 20px',
};

export default function FieldSet(props) {
  const { title, children } = props;

  return (
    <fieldset style={style}>
      <legend>{title}</legend>
      {children}
    </fieldset>
  );
}
