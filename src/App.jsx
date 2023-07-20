import React, { useState, Fragment } from 'react';

import Navbar from './component/Navbar/Navbar';
import Tabs from './component/Tabs/Tabs';
import TextOption from './component/TextOption/TextOption';
import ImgOption from './component/ImgOption/ImgOption';
import SiteOption from './component/SiteOption/SiteOption';

function App() {
  const [active, setActive] = useState('site');

  return (
    <Fragment>
      <Navbar active={active} setActive={setActive} />
      <Tabs active={active}>
        {active === 'txt' && <TextOption />}
        {active === 'img' && <ImgOption />}
        {active === 'site' && <SiteOption />}
      </Tabs>
    </Fragment>
  );
}

export default App;
