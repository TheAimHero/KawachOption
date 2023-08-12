/* eslint-disable no-undef */
import React, { useCallback, useState, Fragment } from 'react';
import FieldSet from '../utils/FieldSet';

import TextArea from '../utils/TextArea/TextArea';

export default function SiteOption(props) {
  const [censorSite, setCensorSite] = useState(props.censorSite);
  const [censorExcludeSite, setCensorExcludeSite] = useState(
    props.censorExcludeSite,
  );

  const onNotBlockChange = useCallback((censorExcludeArr) => {
    setCensorExcludeSite(censorExcludeArr);
    chrome.storage.sync.set({ censorExcludeSite: censorExcludeArr });
  }, []);

  const onBlockChange = useCallback((censorSiteArr) => {
    setCensorSite(censorSiteArr);
    // // @note: change when developing
    chrome.storage.sync.set({ censorSite: censorSiteArr });
    console.log(censorSiteArr);
  }, []);

  return (
    <Fragment>
      <FieldSet title={'Sites To Block'}>
        <TextArea onChange={onBlockChange} censorArr={censorSite} />
      </FieldSet>
      <FieldSet title={'Websites Not To Block'}>
        <TextArea onChange={onNotBlockChange} censorArr={censorExcludeSite} />
      </FieldSet>
    </Fragment>
  );
}
