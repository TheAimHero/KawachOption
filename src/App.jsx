/* eslint-disable no-undef */
import React, { useState, Fragment, useEffect } from 'react';

import Navbar from './component/Navbar/Navbar';
import Tabs from './component/Tabs/Tabs';
import TextOption from './component/TextOption/TextOption';
import ImgOption from './component/ImgOption/ImgOption';
import SiteOption from './component/SiteOption/SiteOption';

function App() {
  const [active, setActive] = useState('txt');
  const [data, setData] = useState(null);

  useEffect(() => {
    // @note: change when developing
    chrome.storage.sync.get(null, (data) => setData(data));
    // const cpyData = {
    //   censorChar: '*',
    //   censorWords: ['tits', 'sex', 'porn'],
    //   censorSite: ['pronhub', 'xxnx', 'redtube'],
    //   blurAmt: '10',
    //   minDim: '50',
    //   batchSize: '5',
    // };
    // setData(cpyData);
  }, []);

  if (data) {
    return (
      <Fragment>
        <Navbar active={active} setActive={setActive} />
        <Tabs active={active}>
          {active === 'txt' && <TextOption censorChar={data.censorChar} censorWords={data.censorWords} />}
          {active === 'img' && (
            <ImgOption
              minDim={data.minDim}
              batchSize={data.batchSize}
              blurAmt={data.blurAmt}
            />
          )}
          {active === 'site' && <SiteOption censorSite={data.censorSite} />}
        </Tabs>
      </Fragment>
    );
  } else {
    return <div>Hellow</div>;
  }
}

export default App;
