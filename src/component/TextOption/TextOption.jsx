import React, { useState, Fragment } from 'react';

import FieldSet from './FieldSet';
import TextArea from '../utils/TextArea/TextArea';

export default function TextOption(props) {
  const [censorChar, setCensorChar] = useState('*');
  const [censorWords, setCensorWords] = useState(['this', 'is', 'a', 'word']);

  function onChangeChar(e) {
    setCensorChar(e.target.value);
  }

  function onChangeWord(censorWordArr) {
    console.log(censorWordArr);
    setCensorWords(censorWordArr);
  }

  return (
    <Fragment>
      <FieldSet onChange={onChangeChar} censorChar={censorChar} />
      <TextArea title={'Words to Censor Out'} onChange={onChangeWord} censorArr={censorWords} />
    </Fragment>
  );
}
