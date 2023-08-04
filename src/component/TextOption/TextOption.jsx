/* eslint-disable no-undef */
import React, { useState, Fragment, useCallback } from 'react';

import FieldSet from '../utils/FieldSet';
import TextArea from '../utils/TextArea/TextArea';
import CharInput from './CharInput';

export default function TextOption(props) {
  const [censorChar, setCensorChar] = useState(props.censorChar);
  const [censorWords, setCensorWords] = useState(props.censorWords);

  function onChangeChar(e) {
    // @note: change when developing
    chrome.storage.sync.set({ censorChar: e.target.value });
    setCensorChar(e.target.value);
  }

  const onChangeWord = useCallback((censorWordArr) => {
    // @note: change when developing
    chrome.storage.sync.set({ censorWords: censorWordArr });
    console.log(censorWordArr);
    setCensorWords(censorWordArr);
  }, []);

  return (
    <Fragment>
      <FieldSet title={'Censor Character'}>
        <CharInput
          onChange={onChangeChar}
          id="asterisk"
          name="censor-char"
          checked={censorChar === '*'}
          value="*"
          title="* Astrisk"
        />
        <CharInput
          onChange={onChangeChar}
          id="dash"
          checked={censorChar === '-'}
          name="censor-char"
          value="-"
          title="- Dash"
        />
        <CharInput
          onChange={onChangeChar}
          id="block"
          name="censor-char"
          checked={censorChar === '█'}
          value="█"
          title="█ Block"
        />
      </FieldSet>
      <FieldSet title={'Words to Censor Out'}>
        <TextArea onChange={onChangeWord} censorArr={censorWords} />
      </FieldSet>
    </Fragment>
  );
}
