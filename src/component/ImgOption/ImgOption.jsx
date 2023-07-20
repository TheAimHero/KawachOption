import React, { useState } from 'react';

const style = {
  width: '70%',
  display: 'flex',
  border: '2px solid black',
  fontWeight: 'normal',
  margin: '20px 20px',
  justifyContent: 'space-between',
  padding: '20px 20px',
};

const imgDiv = {
  float: 'right',
  position: 'relative',
  overflow: 'hidden',
};

const imgArr = [64, 237, 219, 250, 325, 342];

export default function ImgOption() {
  const [blurAmt, setBlurAmt] = useState(7.5);
  const img = imgArr.map((num, index) => (
    <img
      key={index}
      src={`https://picsum.photos/id/${num}/100/150`}
      style={{ filter: 'blur(' + blurAmt + 'px' }}
      alt="Blur Preview"
    />
  ));

  function onChange(e) {
    console.log(e.target.value);
    setBlurAmt(+e.target.value);
  }

  return (
    <fieldset style={style}>
      <legend>Image Blur Amount</legend>
      <input
        type="range"
        min={0}
        max={15}
        onChange={onChange}
        defaultValue={blurAmt}
      />
      <div style={imgDiv}>{img}</div>
    </fieldset>
  );
}
