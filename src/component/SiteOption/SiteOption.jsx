import React, { useEffect, useState } from 'react';

import TextArea from '../utils/TextArea/TextArea';

export default function SiteOption() {
  const [censorSite, setCensorSite] = useState(['this', 'is', 'a', 'site']);

  function onChange(censorSiteArr) {
    setCensorSite(censorSiteArr);
    console.log(censorSiteArr);
  }

  return <TextArea title={"Sites To Block"} onChange={onChange} censorArr={censorSite} />;
}
