import React, { useState } from 'react';

type Props = {
  returnSize: (i: number) => void;
};

const sizeSmall = "128";
const sizeMedium = "256";
const sizeLarge = "512";

const SizeInfo = ({returnSize}: Props ) => {
  const [size, setSize] = useState(sizeSmall);
  const onChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value)
    returnSize(parseInt(event.target.value, 10));
    console.log(event.target.value);
  }

  return (
    <div className="formGroup">
      <h4>QR Code Size:</h4>
      <label htmlFor="smallSize">
        <input id="sizeSmall" type="radio" value={sizeSmall} onChange={onChangeRadio} checked={size===sizeSmall} />
        Small
      </label>
      <label htmlFor="mediumSize">
        <input id="mediumSize" type="radio" value={sizeMedium} onChange={onChangeRadio} checked={size===sizeMedium}/>
        Medium
      </label>
      <label htmlFor="largeSize">
        <input id="largeSize" type="radio" value={sizeLarge} onChange={onChangeRadio} checked={size===sizeLarge}/>
        Large
      </label>
    </div>
  );
}

export default SizeInfo;