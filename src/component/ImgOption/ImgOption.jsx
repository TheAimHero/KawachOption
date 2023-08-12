/* eslint-disable no-undef */
import React, { useState, Fragment } from 'react';

import FieldSet from '../utils/FieldSet';
import Input from '../utils/Input/Input';
import styles from './ImageOption.module.css';

const imgArr = [64, 237, 219, 250, 325, 342];

export default function ImgOption(props) {
  const [blurAmt, setBlurAmt] = useState(props.blurAmt);
  const [minDim, setMinDim] = useState(props.minDim);
  // const [batchSize, setBatchSize] = useState(props.batchSize);

  const img = imgArr.map((num, index) => (
    <img
      key={index}
      src={`https://picsum.photos/id/${num}/100/150`}
      style={{ filter: 'blur(' + blurAmt + 'px', overflow: 'clip' }}
      alt="Blur Preview"
    />
  ));

  function onChangeBlurAmt(e) {
    console.log(e.target.value);
    setBlurAmt(+e.target.value);
    // @note: change when developing
    dhrome.storage.sync.set({ blurAmt: e.target.value });
  }

  function onChangeDim(e) {
    console.log(e.target.value);
    const value = +e.target.value;
    setMinDim(isNaN(value) || 0 ? '' : value);
    // @note: change when developing
    chrome.storage.sync.set({ minDim: e.target.value });
  }

  // function onChangeBatchSize(e) {
  //   console.log(e.target.value);
  //   setBatchSize(+e.target.value);
  //   // @note: change when developing
  //   chrome.storage.sync.set({ batchSize: e.target.value });
  // }

  return (
    <Fragment>
      <FieldSet title={'Blur Amount'}>
        <input
          type="range"
          className={styles.imgBlurIp}
          min={0}
          max={15}
          onChange={onChangeBlurAmt}
          defaultValue={blurAmt}
        />
        <div className={styles.img}>{img}</div>
      </FieldSet>
      <Input
        onChange={onChangeDim}
        defaultValue={minDim}
        title={'Minimum Size of Image to Blur'}
        type={'number'}
        inputMode={'numeric'}
        min={50}
      />
      {/* <Input */}
      {/*   onChange={onChangeBatchSize} */}
      {/*   title={'Image Process Batch Size'} */}
      {/*   type={'number'} */}
      {/*   defaultValue={batchSize} */}
      {/*   inputMode={'numeric'} */}
      {/*   min={1} */}
      {/* /> */}
    </Fragment>
  );
}
