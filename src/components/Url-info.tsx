import { useState } from "react";
import QRcode from './Qrcode';

const regExHttp = /^https:\/\/|http:\/\//
const UrlInfo = () => {
  const [useSecure, setUseSecure ] = useState(true);
  const [urlText, setUrlText] = useState("");
  const [qrText, setQrText] = useState("");
  
  const onChangeUrlText = (e:React.ChangeEvent<HTMLInputElement>) => {
    setQrText("");
    setUrlText(e.target.value);
  }

  const ensureHttp = (text: string):string => {
    if (text.match(regExHttp)) return text;
    return useSecure ? `https://${text}` : `http://${text}`;
  }
  
  return (
    <div className="info-pane">
      <fieldset>
        <legend>Choose Options</legend>
        <div>
          <label>
            <input type="checkbox" name="" id="" checked={useSecure} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setUseSecure(e.target.checked)}/>
            Use HTTPS
          </label>
        </div>
        <div>
          <label htmlFor="urlText">Web address: </label>
          <input id="urlText" type="text" value={urlText} onChange={onChangeUrlText} placeholder="like https://google.com"/>
        </div>
        <button onClick={() => setQrText(ensureHttp(urlText))} disabled={!urlText}>Generate QR Code</button>
      </fieldset>
      <QRcode qrText={qrText} />
    </div>
  )
}

export default UrlInfo;