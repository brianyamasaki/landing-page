import { useState } from "react";
import QRcode from './Qrcode';


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

  const createWifiString = () => (`WIFI:T:${cypher};S:${name};P;${password};H:${isHidden ? 'true' : 'false'}`)
  
  return (
    <div className="info-pane">
      <fieldset>
        <legend>Choose Options</legend>
        <div>
          <h4>Encryption Type</h4>
          <label>
            <input type="radio" name="cypher" id="" checked={cypher === strNoPassword} onChange={() => setCypher(strNoPassword)}/>
            None
          </label>
          <label>
            <input type="radio" name="cypher" id="" checked={cypher === strWpa} onChange={() => setCypher(strWpa)}/>
            WPA / WPA2
          </label>
          <label>
            <input type="radio" name="cypher" id="" checked={cypher === strWEP} onChange={() => setCypher(strWEP)}/>
            WEP
          </label>
        </div>
        <div>
          <label htmlFor="name">Network Name: </label>
          <input id="name" type="text" value={name} onChange={onChangeNameText} placeholder="Network Name"/>
        </div>
        <div>
          <label htmlFor="password">Network Password: </label>
          <input id="password" type="text" value={password} onChange={onChangePassword} placeholder="Password"/>
        </div>
        <div>
          <label>
            <input type="checkbox" name="" id="" checked={isHidden} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setIsHidden(e.target.checked)}/>
            Check if hidden network
          </label>
        </div>
        <button onClick={() => setQrText(createWifiString())} disabled={!name || (cypher !== strNoPassword && !password)}>Generate QR Code</button>
      </fieldset>
      <QRcode qrText={qrText} />
    </div>
  )
}

export default WifiInfo;