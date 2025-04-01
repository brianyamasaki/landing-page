import { useState } from "react";
import QRcode from './Qrcode';

const EmailInfo = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
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
          <input id="name" type="text" value={name} onChange={onChangeNameText} placeholder="Email"/>
        </div>
        <div className="formGroup">
          <label htmlFor="subject">Subject: </label>
          <input id="subject" type="text" value={subject} onChange={onChangeSubject} placeholder=""/>
        </div>
        <div className="formGroup">
          <label>
          Email Message Body:
          <textarea value={message} onChange={onChangeMessage} />
          </label>
        </div>
        <button onClick={() => setQrText(createWifiString())} disabled={!name}>Generate QR Code</button>
      </fieldset>
      <QRcode qrText={qrText} />
    </div>
  )
}

export default EmailInfo;