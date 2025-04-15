import { useState } from "react";
import QRcode from './Qrcode';
import SizeInfo from './Size-info';

const PhoneInfo = () => {
  const [phoneNumber, setUrlText] = useState("");
  const [qrText, setQrText] = useState("");
  const [size, setSize] = useState(128);
  
  const onChangePhoneNumber = (e:React.ChangeEvent<HTMLInputElement>) => {
    setQrText("");
    setUrlText(e.target.value);
  }
  const changeSize = (i: number) => {
    setSize(i);
  }
  const stripNonDigits = () => (phoneNumber.replace(/\(|\)|-|_/g, ''));

  return (
    <div className="info-pane">
      <fieldset>
        <legend>Enter Phone Number</legend>
        <div className="formGroup">
          <input id="phoneText" type="text" value={phoneNumber} onChange={onChangePhoneNumber} placeholder="Enter phone number"/>
        </div>
        <div className="formGroup">
          <SizeInfo returnSize={changeSize} />
        </div>
        <button onClick={() => setQrText(`tel:${stripNonDigits()}`)} disabled={!phoneNumber}>Generate QR Code</button>
      </fieldset>
      <QRcode qrText={qrText} size={size}/>
    </div>
  )
}

export default PhoneInfo;