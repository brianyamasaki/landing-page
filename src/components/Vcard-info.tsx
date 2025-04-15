import { useState } from "react";
import QRcode from './Qrcode';
import SizeInfo from './Size-info';

const vcardStart = `BEGIN:VCARD\nVERSION:3.0\n`;
const vcardEnd = 'END:VCARD';

const VcardInfo = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [size, setSize] = useState(128);
  const [qrText, setQrText] = useState("");
  
  const onChangeFNameText = (e:React.ChangeEvent<HTMLInputElement>) => {
    setQrText("");
    setFName(e.target.value);
  }
  const onChangeLNameText = (e:React.ChangeEvent<HTMLInputElement>) => {
    setQrText("");
    setLName(e.target.value);
  }
  const onChangeSubject = (e:React.ChangeEvent<HTMLInputElement>) => {
    setQrText("");
    setTitle(e.target.value);
  }
  const onChangeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    setQrText("");
    setEmail(e.target.value);
  }
  const onChangeOrg = (e:React.ChangeEvent<HTMLInputElement>) => {
    setQrText("");
    setOrg(e.target.value);
  }

  const nameString = (): string => {
    return `N:${lname};${fname};;;\nFN:${fname} ${lname}\n`;
  }

  const titleString = (): string => {
    if (!title) return '';
    return `TITLE:${title}\n`;
  }

  const emailString = (): string => {
    if (!email) return '';
    return `EMAIL:${email}\n`;
  }

  const orgString = (): string => {
    if (!org) return '';
    return `ORG:${org}\n`
  }

  const vcardString = (): string => {
    return `${vcardStart}${nameString()}${titleString()}${emailString()}${orgString()}${vcardEnd}`;
  }
  
  return (
    <div className="info-pane">
      <fieldset>
        <legend>Enter Contact Information</legend>
        <div className="formGroup">
          <input id="fname" type="text" value={fname} onChange={onChangeFNameText} placeholder="First Name"/>
        </div>
        <div className="formGroup">
          <input id="lname" type="text" value={lname} onChange={onChangeLNameText} placeholder="Last Name"/>
        </div>
        <div className="formGroup">
          <input id="subject" type="text" value={title} onChange={onChangeSubject} placeholder="Job Title"/>
        </div>
        <div className="formGroup">
          <input type="text" value={email} onChange={onChangeEmail} placeholder="Email Address" />
        </div>
        <div className="formGroup">
          <input type="text" value={org} onChange={onChangeOrg} placeholder="Organization" />
        </div>
        <SizeInfo returnSize={setSize} />
        <button onClick={() => setQrText(vcardString())} disabled={!fname && !lname}>Generate QR Code</button>
      </fieldset>
      <QRcode qrText={qrText} size={size} />
    </div>
  )
}

export default VcardInfo;