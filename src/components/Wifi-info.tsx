import { useState } from "react";
import QRcode from './Qrcode';
import SizeInfo from './Size-info';


const strNoPassword = "nopass";
const strWpa = "WPA";
const strWEP = "WEP"
const regExHttp = /^https:\/\/|http:\/\//
const WifiInfo = () => {
  const [isHidden, setIsHidden ] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cypher, setCypher] = useState(strWpa);
  const [qrText, setQrText] = useState("");
  const [size, setSize] = useState(128);

  
  const onChangeNameText = (e:React.ChangeEvent<HTMLInputElement>) => {
    setQrText("");
    setName(e.target.value);
  }
  const onChangePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
    setQrText("");
    setPassword(e.target.value);
  }
  const onChangeCypher = (cypher : string) => {
    setQrText("");
    setCypher(cypher);
  }

  const createWifiString = () => (`WIFI:T:${cypher};S:${name};P:${password};${isHidden ? 'H:true;' : ';'}`)
  
  return (
    <div className="info-pane">
      <fieldset>
        <legend>Choose Options</legend>
        <div className="formGroup">
          <h4>Encryption Type</h4>
          <label>
            <input type="radio" name="cypher" checked={cypher === strNoPassword} onChange={() => setCypher(strNoPassword)}/>
            None
          </label>
          <label>
            <input type="radio" name="cypher" checked={cypher === strWpa} onChange={() => setCypher(strWpa)}/>
            WPA / WPA2
          </label>
          <label>
            <input type="radio" name="cypher" checked={cypher === strWEP} onChange={() => setCypher(strWEP)}/>
            WEP
          </label>
        </div>
        <div className="formGroup">
          <label htmlFor="name">Network Name: </label>
          <input id="name" type="text" value={name} onChange={onChangeNameText} placeholder="Network Name"/>
        </div>
        <div className="formGroup">
          <label htmlFor="password">Network Password: </label>
          <input id="password" type="text" value={password} onChange={onChangePassword} placeholder="Password"/>
        </div>
        <div className="formGroup">
          <label>
            <input type="checkbox" checked={isHidden} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setIsHidden(e.target.checked)}/>
            Check if hidden network
          </label>
        </div>
        <div className="formGroup">
          <SizeInfo returnSize={setSize} />
        </div>
        <button onClick={() => setQrText(createWifiString())} disabled={!name || (cypher !== strNoPassword && !password)}>Generate QR Code</button>
      </fieldset>
      <QRcode qrText={qrText} size={size} />
    </div>
  )
}

export default WifiInfo;