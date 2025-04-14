import { useState } from "react";
import QRcode from './Qrcode';
import SizeInfo from './Size-info';

const EmailInfo = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [size, setSize] = useState(128);
  const [qrText, setQrText] = useState("");
  
  const onChangeNameText = (e:React.ChangeEvent<HTMLInputElement>) => {
    setQrText("");
    setName(e.target.value);
  }
  const onChangeSubject = (e:React.ChangeEvent<HTMLInputElement>) => {
    setQrText("");
    setSubject(e.target.value);
  }
  const onChangeMessage = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setQrText("");
    setMessage(e.target.value);
  }

  const createWifiString = () => (`mailto:${name}?subject=${subject}&body=${message}`)
  
  return (
    <div className="info-pane">
      <fieldset>
        <legend>Choose Options</legend>
        <div className="formGroup">
          <label htmlFor="name">Email Address to send to: </label>
          <input id="name" type="text" value={name} onChange={onChangeNameText} placeholder="Email address"/>
        </div>
        <div className="formGroup">
          <label htmlFor="subject">Subject: </label>
          <input id="subject" type="text" value={subject} onChange={onChangeSubject} />
        </div>
        <div className="formGroup">
          <label>
          Email Message Body:
          <textarea value={message} onChange={onChangeMessage} />
          </label>
        </div>
        <SizeInfo returnSize={setSize} />
        <button onClick={() => setQrText(createWifiString())} disabled={!name}>Generate QR Code</button>
      </fieldset>
      <QRcode qrText={qrText} size={size} />
    </div>
  )
}

export default EmailInfo;