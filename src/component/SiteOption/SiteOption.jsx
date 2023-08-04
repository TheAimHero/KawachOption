/* eslint-disable no-undef */
import React, { useCallback, useState } from 'react';
import FieldSet from '../utils/FieldSet';

import TextArea from '../utils/TextArea/TextArea';

export default function SiteOption(props) {
  const [censorSite, setCensorSite] = useState(props.censorSite);

  const onChange = useCallback((censorSiteArr) => {
    setCensorSite(censorSiteArr);
    // @note: change when developing
    chrome.storage.sync.set({ censorSite: censorSiteArr });
    console.log(censorSiteArr);
  }, []);

  return (
    <FieldSet title={'Sites To Block'}>
      <TextArea onChange={onChange} censorArr={censorSite} />
    </FieldSet>
  );
}
